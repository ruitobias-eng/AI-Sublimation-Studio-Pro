export interface ImageAsset {
  blob?: Blob;
  url?: string;
  bitmap?: ImageBitmap;
}

// LRU-capable asset map. Keys kept in insertion order; access moves key to most-recent.
const assetMap: Map<string, ImageAsset> = new Map();
let bitmapLimit = 6; // default max number of ImageBitmaps to keep in memory (tunable)

function touchKey(url: string) {
  const entry = assetMap.get(url);
  if (!entry) return;
  // move to most-recent position
  assetMap.delete(url);
  assetMap.set(url, entry);
}

function countBitmaps(): number {
  let c = 0;
  for (const [, a] of assetMap) {
    if (a.bitmap) c++;
  }
  return c;
}

function evictOldestBitmapIfNeeded() {
  while (countBitmaps() > bitmapLimit) {
    // find the oldest entry (Map iteration is oldest-first)
    let evictedKey: string | null = null;
    for (const [k, a] of assetMap) {
      if (a.bitmap) {
        // close bitmap and remove bitmap field but keep blob/url so layer URLs remain valid
        try {
          if (typeof (a.bitmap as any).close === 'function') {
            try { (a.bitmap as any).close(); } catch (e) { /* ignore */ }
          }
        } catch (e) {
          // ignore
        }
        delete a.bitmap;
        // keep the asset entry but it no longer holds bitmap
        assetMap.set(k, a);
        evictedKey = k;
        break;
      }
    }
    if (!evictedKey) break; // nothing to evict
  }
}

export function setBitmapLimit(limit: number) {
  if (typeof limit !== 'number' || limit < 0) return;
  bitmapLimit = Math.max(0, Math.floor(limit));
  evictOldestBitmapIfNeeded();
}

export function setAsset(url: string, asset: ImageAsset) {
  // set or update
  assetMap.set(url, asset);
  // newly set asset is considered most-recent
  touchKey(url);
  // if this asset contains a bitmap, enforce bitmap limit
  if (asset.bitmap) {
    evictOldestBitmapIfNeeded();
  }
}

export function getAsset(url?: string): ImageAsset | undefined {
  if (!url) return undefined;
  const a = assetMap.get(url);
  if (a) touchKey(url);
  return a;
}

export function revokeAsset(url?: string) {
  if (!url) return;
  const asset = assetMap.get(url);
  if (!asset) return;
  try {
    if (asset.url) {
      try { URL.revokeObjectURL(asset.url); } catch (e) { /* ignore */ }
    }
    if (asset.bitmap && typeof (asset.bitmap as any).close === 'function') {
      try { (asset.bitmap as any).close(); } catch (e) { /* ignore */ }
    }
  } catch (e) {
    // ignore cleanup errors
  }
  assetMap.delete(url);
}

export function clearAssets() {
  for (const key of Array.from(assetMap.keys())) {
    revokeAsset(key);
  }
}

// Optional helper to inspect current store stats (not used by existing code)
export function getAssetStoreStats() {
  return {
    totalAssets: assetMap.size,
    bitmaps: countBitmaps(),
    bitmapLimit,
  };
}
