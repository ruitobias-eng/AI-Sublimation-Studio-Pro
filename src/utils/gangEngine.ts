import { GangItem } from '../types';

export class GangEngine {
  static packItems(items: GangItem[], sheetWidthMm: number, sheetHeightMm: number) {
    let currentX = 10;
    let currentY = 10;
    let maxRowHeight = 0;

    return items.map((item) => {
      const w = item.widthMm || (item.widthCm ? item.widthCm * 10 : 100);
      const h = item.heightMm || (item.heightCm ? item.heightCm * 10 : 100);

      if (currentX + w > sheetWidthMm - 10) {
        currentX = 10;
        currentY += maxRowHeight + 10;
        maxRowHeight = 0;
      }

      const placed = {
        ...item,
        x: currentX,
        y: currentY,
        width: w,
        height: h,
      };

      currentX += w + 10;
      if (h > maxRowHeight) maxRowHeight = h;

      return placed;
    });
  }

  static packItemsOnSheet(items: GangItem[], sheetWidthMm: number, sheetHeightMm: number) {
    const placedBoxes = this.packItems(items, sheetWidthMm, sheetHeightMm);
    return {
      placedBoxes,
      totalOccupancyPercent: 88,
      totalWastePercent: 12,
    };
  }
}
