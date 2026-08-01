import React, { useState, useRef, useEffect } from 'react';
import { Layer, LayerFilters } from '../types';
import {
  Sliders,
  Crop,
  Sparkles,
  Wand2,
  X,
  Check,
  RotateCw,
  Sun,
  Contrast,
  Droplet,
  Eye,
  EyeOff,
  Zap,
  Scissors,
  Layers,
  Circle,
  Square,
  Maximize2,
  RefreshCw,
  Volume2,
  Image as ImageIcon,
  Tablet,
  Smartphone,
  Laptop
} from 'lucide-react';

interface ImageAdjustmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeLayer: Layer | null;
  onUpdateLayer: (updatedLayer: Layer) => void;
  pushHistoryStep?: (description: string, toolName: string, updatedLayers: Layer[]) => void;
  allLayers?: Layer[];
  theme?: 'dark' | 'light';
  defaultTab?: 'adjustments' | 'crop' | 'filters' | 'smart';
}

export const ImageAdjustmentModal: React.FC<ImageAdjustmentModalProps> = ({
  isOpen,
  onClose,
  activeLayer,
  onUpdateLayer,
  pushHistoryStep,
  allLayers = [],
  theme = 'dark',
  defaultTab = 'adjustments',
}) => {
  const [activeTab, setActiveTab] = useState<'adjustments' | 'crop' | 'filters' | 'smart'>(defaultTab);

  useEffect(() => {
    if (isOpen && defaultTab) {
      setActiveTab(defaultTab);
    }
  }, [isOpen, defaultTab]);

  // Working filter state
  const [filters, setFilters] = useState<LayerFilters>({
    brightness: 0,
    contrast: 0,
    saturation: 0,
    hue: 0,
    blur: 0,
    vibrance: 0,
    temperature: 0,
    exposure: 0,
    shadows: 0,
    highlights: 0,
    sharpen: 0,
    gamma: 1.0,
    sepia: 0,
    invert: false,
    grayscale: false,
    presetFilter: 'none',
    filterIntensity: 100,
  });

  // Crop mode state
  const [cropAspect, setCropAspect] = useState<'free' | '1:1' | '4:3' | '16:9' | 'circle' | 'tablet' | 'android' | 'macos'>('free');
  const [cropRect, setCropRect] = useState<{ x: number; y: number; w: number; h: number }>({ x: 0, y: 0, w: 100, h: 100 });
  const [cropRotation, setCropRotation] = useState<number>(0);

  // Sync state when modal opens or activeLayer changes
  useEffect(() => {
    if (activeLayer && activeLayer.filters) {
      setFilters({
        brightness: activeLayer.filters.brightness ?? 0,
        contrast: activeLayer.filters.contrast ?? 0,
        saturation: activeLayer.filters.saturation ?? 0,
        hue: activeLayer.filters.hue ?? 0,
        blur: activeLayer.filters.blur ?? 0,
        vibrance: activeLayer.filters.vibrance ?? 0,
        temperature: activeLayer.filters.temperature ?? 0,
        exposure: activeLayer.filters.exposure ?? 0,
        shadows: activeLayer.filters.shadows ?? 0,
        highlights: activeLayer.filters.highlights ?? 0,
        sharpen: activeLayer.filters.sharpen ?? 0,
        gamma: activeLayer.filters.gamma ?? 1.0,
        sepia: activeLayer.filters.sepia ?? 0,
        invert: activeLayer.filters.invert ?? false,
        grayscale: activeLayer.filters.grayscale ?? false,
        presetFilter: activeLayer.filters.presetFilter ?? 'none',
        filterIntensity: activeLayer.filters.filterIntensity ?? 100,
      });
    } else {
      setFilters({
        brightness: 0,
        contrast: 0,
        saturation: 0,
        hue: 0,
        blur: 0,
        vibrance: 0,
        temperature: 0,
        exposure: 0,
        shadows: 0,
        highlights: 0,
        sharpen: 0,
        gamma: 1.0,
        sepia: 0,
        invert: false,
        grayscale: false,
        presetFilter: 'none',
        filterIntensity: 100,
      });
    }
  }, [activeLayer, isOpen]);

  // Preview canvas ref
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const sourceImageRef = useRef<HTMLImageElement | null>(null);

  // Load image into ref
  useEffect(() => {
    if (activeLayer && activeLayer.content) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = activeLayer.content;
      img.onload = () => {
        sourceImageRef.current = img;
        renderPreview();
      };
    }
  }, [activeLayer?.content, isOpen]);

  // Re-render preview whenever filters change
  useEffect(() => {
    if (isOpen) {
      renderPreview();
    }
  }, [filters, isOpen, cropRotation]);

  const renderPreview = () => {
    const canvas = previewCanvasRef.current;
    const img = sourceImageRef.current;
    if (!canvas || !img) return;

    canvas.width = img.naturalWidth || 600;
    canvas.height = img.naturalHeight || 600;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Build CSS Filter string
    const b = 100 + filters.brightness + (filters.exposure || 0);
    const c = 100 + filters.contrast;
    const s = 100 + filters.saturation + (filters.vibrance || 0) * 0.5;
    const h = filters.hue;
    const blur = filters.blur;
    const sepia = filters.sepia || 0;
    const invert = filters.invert ? 100 : 0;
    const grayscale = filters.grayscale ? 100 : 0;

    let filterString = `brightness(${b}%) contrast(${c}%) saturate(${s}%) hue-rotate(${h}deg) blur(${blur}px) sepia(${sepia}%) invert(${invert}%) grayscale(${grayscale}%)`;

    // Add preset filters if selected
    if (filters.presetFilter && filters.presetFilter !== 'none') {
      const intensity = (filters.filterIntensity ?? 100) / 100;
      switch (filters.presetFilter) {
        case 'vintage':
          filterString += ` sepia(${50 * intensity}%) contrast(${120 * intensity}%)`;
          break;
        case 'hdr':
          filterString += ` contrast(${140 * intensity}%) saturate(${130 * intensity}%)`;
          break;
        case 'neon':
          filterString += ` saturate(${200 * intensity}%) contrast(${150 * intensity}%) hue-rotate(${90 * intensity}deg)`;
          break;
        case 'cinema':
          filterString += ` contrast(${130 * intensity}%) sepia(${20 * intensity}%) hue-rotate(${-10 * intensity}deg)`;
          break;
        case 'popart':
          filterString += ` saturate(${250 * intensity}%) contrast(${160 * intensity}%)`;
          break;
        case 'cool':
          filterString += ` hue-rotate(${180 * intensity}deg) saturate(${110 * intensity}%)`;
          break;
        case 'warm':
          filterString += ` sepia(${30 * intensity}%) saturate(${120 * intensity}%)`;
          break;
        case 'duotone':
          filterString += ` contrast(${180 * intensity}%) grayscale(${80 * intensity}%)`;
          break;
      }
    }

    ctx.save();
    try {
      ctx.filter = filterString;
    } catch (e) {
      // Fallback if browser filter fails
    }

    // Apply rotation if any
    if (cropRotation !== 0) {
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((cropRotation * Math.PI) / 180);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);
    }

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.restore();
  };

  if (!isOpen || !activeLayer) return null;

  // Apply Changes to Layer
  const handleApply = () => {
    const updated = {
      ...activeLayer,
      filters: { ...filters },
    };

    onUpdateLayer(updated);

    if (pushHistoryStep) {
      const newLayers = allLayers.map((l) => (l.id === updated.id ? updated : l));
      pushHistoryStep('Ajustes de Imagem Aplicados', 'Filtros/Ajustes', newLayers);
    }

    onClose();
  };

  // Reset Filters
  const handleResetFilters = () => {
    setFilters({
      brightness: 0,
      contrast: 0,
      saturation: 0,
      hue: 0,
      blur: 0,
      vibrance: 0,
      temperature: 0,
      exposure: 0,
      shadows: 0,
      highlights: 0,
      sharpen: 0,
      gamma: 1.0,
      sepia: 0,
      invert: false,
      grayscale: false,
      presetFilter: 'none',
      filterIntensity: 100,
    });
  };

  // Perform Recorte (Crop)
  const handleApplyCrop = () => {
    const img = sourceImageRef.current;
    if (!img) return;

    const cropCanvas = document.createElement('canvas');
    let width = img.naturalWidth;
    let height = img.naturalHeight;

    if (cropAspect === '1:1') {
      const side = Math.min(width, height);
      cropCanvas.width = side;
      cropCanvas.height = side;
    } else if (cropAspect === '4:3' || cropAspect === 'tablet') {
      cropCanvas.width = width;
      cropCanvas.height = Math.round((width * 3) / 4);
    } else if (cropAspect === '16:9') {
      cropCanvas.width = width;
      cropCanvas.height = Math.round((width * 9) / 16);
    } else if (cropAspect === 'android') {
      cropCanvas.height = height;
      cropCanvas.width = Math.round((height * 9) / 16);
    } else if (cropAspect === 'macos') {
      cropCanvas.width = width;
      cropCanvas.height = Math.round((width * 10) / 16);
    } else {
      cropCanvas.width = width;
      cropCanvas.height = height;
    }

    const ctx = cropCanvas.getContext('2d');
    if (!ctx) return;

    if (cropAspect === 'circle') {
      ctx.beginPath();
      ctx.arc(cropCanvas.width / 2, cropCanvas.height / 2, Math.min(cropCanvas.width, cropCanvas.height) / 2, 0, Math.PI * 2);
      ctx.clip();
    }

    ctx.drawImage(img, 0, 0, cropCanvas.width, cropCanvas.height);
    const newContent = cropCanvas.toDataURL('image/png');

    const updated = {
      ...activeLayer,
      content: newContent,
      width: Math.round(activeLayer.width * (cropCanvas.width / (img.naturalWidth || 1))),
      height: Math.round(activeLayer.height * (cropCanvas.height / (img.naturalHeight || 1))),
    };

    onUpdateLayer(updated);
    if (pushHistoryStep) {
      const newLayers = allLayers.map((l) => (l.id === updated.id ? updated : l));
      pushHistoryStep('Recorte de Imagem Executado', 'Recorte', newLayers);
    }
    onClose();
  };

  // Smart Tools: Remove BG (Chroma / White removal)
  const handleRemoveBackground = () => {
    const img = sourceImageRef.current;
    if (!img) return;

    const processCanvas = document.createElement('canvas');
    processCanvas.width = img.naturalWidth;
    processCanvas.height = img.naturalHeight;

    const ctx = processCanvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, processCanvas.width, processCanvas.height);
    const data = imageData.data;

    // Detect white/light background or chromakey corner pixels
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // Remove near-white pixels (luminance > 230)
      if (r > 225 && g > 225 && b > 225) {
        data[i + 3] = 0; // Set Alpha transparent
      }
    }

    ctx.putImageData(imageData, 0, 0);
    const newContent = processCanvas.toDataURL('image/png');

    const updated = { ...activeLayer, content: newContent };
    onUpdateLayer(updated);

    if (pushHistoryStep) {
      const newLayers = allLayers.map((l) => (l.id === updated.id ? updated : l));
      pushHistoryStep('Remoção de Fundo Inteligente', 'Remover Fundo', newLayers);
    }
    onClose();
  };

  // Smart Tools: Vetorizar / Posterize Sublimação
  const handleVectorize = () => {
    const img = sourceImageRef.current;
    if (!img) return;

    const processCanvas = document.createElement('canvas');
    processCanvas.width = img.naturalWidth;
    processCanvas.height = img.naturalHeight;

    const ctx = processCanvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, processCanvas.width, processCanvas.height);
    const data = imageData.data;

    // Posterize to 8 crisp color levels for vector-style sublimation print
    const levels = 8;
    const step = 255 / (levels - 1);

    for (let i = 0; i < data.length; i += 4) {
      data[i] = Math.round(data[i] / step) * step;
      data[i + 1] = Math.round(data[i + 1] / step) * step;
      data[i + 2] = Math.round(data[i + 2] / step) * step;
    }

    ctx.putImageData(imageData, 0, 0);
    const newContent = processCanvas.toDataURL('image/png');

    const updated = { ...activeLayer, content: newContent };
    onUpdateLayer(updated);

    if (pushHistoryStep) {
      const newLayers = allLayers.map((l) => (l.id === updated.id ? updated : l));
      pushHistoryStep('Vetorização de Imagem Sublimática', 'Vetorizar', newLayers);
    }
    onClose();
  };

  // Smart Tools: Upscale 2x / 4x
  const handleUpscale = (factor: 2 | 4) => {
    const img = sourceImageRef.current;
    if (!img) return;

    const scaleCanvas = document.createElement('canvas');
    scaleCanvas.width = img.naturalWidth * factor;
    scaleCanvas.height = img.naturalHeight * factor;

    const ctx = scaleCanvas.getContext('2d');
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, scaleCanvas.width, scaleCanvas.height);

    const newContent = scaleCanvas.toDataURL('image/png');
    const updated = { ...activeLayer, content: newContent };
    onUpdateLayer(updated);

    if (pushHistoryStep) {
      const newLayers = allLayers.map((l) => (l.id === updated.id ? updated : l));
      pushHistoryStep(`Upscale ${factor}x HD de Imagem`, 'Upscale', newLayers);
    }
    onClose();
  };

  // Smart Tools: Auto Enquadramento / Trim Transparente
  const handleAutoCropTransparent = () => {
    const img = sourceImageRef.current;
    if (!img) return;

    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const { data, width, height } = imageData;

    let minX = width, minY = height, maxX = 0, maxY = 0;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const alpha = data[(y * width + x) * 4 + 3];
        if (alpha > 5) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }

    if (maxX <= minX || maxY <= minY) return;

    const cropW = maxX - minX + 1;
    const cropH = maxY - minY + 1;

    const trimmedCanvas = document.createElement('canvas');
    trimmedCanvas.width = cropW;
    trimmedCanvas.height = cropH;

    const tCtx = trimmedCanvas.getContext('2d');
    if (tCtx) {
      tCtx.drawImage(canvas, minX, minY, cropW, cropH, 0, 0, cropW, cropH);
      const newContent = trimmedCanvas.toDataURL('image/png');
      const updated = { ...activeLayer, content: newContent };
      onUpdateLayer(updated);

      if (pushHistoryStep) {
        const newLayers = allLayers.map((l) => (l.id === updated.id ? updated : l));
        pushHistoryStep('Auto Enquadramento Transparente', 'Auto Enquadrar', newLayers);
      }
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden ${
        theme === 'light'
          ? 'bg-white border-purple-200 text-slate-800'
          : 'bg-[#14151a] border-purple-500/30 text-gray-100'
      }`}>
        {/* Modal Header */}
        <div className={`flex items-center justify-between px-5 py-4 border-b ${
          theme === 'light' ? 'border-purple-100 bg-purple-50/50' : 'border-[#282a36] bg-[#1a1b22]'
        }`}>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base tracking-tight flex items-center gap-2">
                Edição Avançada de Imagem
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Sublim Studio
                </span>
              </h3>
              <p className="text-xs text-gray-400 truncate max-w-xs">
                Elemento: <strong className="text-purple-300">{activeLayer.name}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center border-b border-[#282a36] bg-[#121318] px-4 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('adjustments')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'adjustments'
                ? 'border-purple-500 text-purple-400 bg-purple-500/10'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>Ajustes de Cor & Luz</span>
          </button>

          <button
            onClick={() => setActiveTab('crop')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'crop'
                ? 'border-purple-500 text-purple-400 bg-purple-500/10'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Crop className="w-4 h-4" />
            <span>Recorte & Proporção</span>
          </button>

          <button
            onClick={() => setActiveTab('filters')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'filters'
                ? 'border-purple-500 text-purple-400 bg-purple-500/10'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Filtros Especiais</span>
          </button>

          <button
            onClick={() => setActiveTab('smart')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'smart'
                ? 'border-purple-500 text-purple-400 bg-purple-500/10'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Wand2 className="w-4 h-4 text-amber-400" />
            <span>Ferramentas Inteligentes</span>
          </button>
        </div>

        {/* Modal Main Content (Preview + Sliders) */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-12 p-4 gap-4">
          {/* Left Canvas Live Preview (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-4 bg-[#0a0b0e] border border-[#282a36] rounded-2xl relative min-h-[220px]">
            <span className="absolute top-3 left-3 text-[10px] font-mono uppercase font-bold text-purple-400 bg-purple-950/80 px-2.5 py-1 rounded-lg border border-purple-500/30">
              Pré-Visualização ao Vivo
            </span>

            <div className="max-w-full max-h-[300px] flex items-center justify-center overflow-hidden rounded-lg shadow-2xl">
              <canvas ref={previewCanvasRef} className="max-w-full max-h-[280px] object-contain rounded" />
            </div>
          </div>

          {/* Right Controls Panel (7 cols) */}
          <div className="md:col-span-7 flex flex-col overflow-y-auto max-h-[420px] pr-2 space-y-4 text-xs">
            {/* TAB 1: AJUSTES */}
            {activeTab === 'adjustments' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#282a36]">
                  <span className="font-bold text-purple-300">Ajustes da Imagem (Real-time)</span>
                  <button
                    onClick={handleResetFilters}
                    className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" />
                    Resetar Filtros
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Brilho */}
                  <div className="bg-[#1a1b22] p-2.5 rounded-xl border border-[#282a36] space-y-1">
                    <div className="flex justify-between text-[11px] font-semibold text-gray-300">
                      <span className="flex items-center gap-1">
                        <Sun className="w-3.5 h-3.5 text-amber-400" /> Brilho
                      </span>
                      <span className="font-mono text-purple-400">{filters.brightness}</span>
                    </div>
                    <input
                      type="range"
                      min="-100"
                      max="100"
                      value={filters.brightness}
                      onChange={(e) => setFilters({ ...filters, brightness: parseInt(e.target.value) })}
                      className="w-full accent-purple-500 cursor-pointer"
                    />
                  </div>

                  {/* Contraste */}
                  <div className="bg-[#1a1b22] p-2.5 rounded-xl border border-[#282a36] space-y-1">
                    <div className="flex justify-between text-[11px] font-semibold text-gray-300">
                      <span className="flex items-center gap-1">
                        <Contrast className="w-3.5 h-3.5 text-sky-400" /> Contraste
                      </span>
                      <span className="font-mono text-purple-400">{filters.contrast}</span>
                    </div>
                    <input
                      type="range"
                      min="-100"
                      max="100"
                      value={filters.contrast}
                      onChange={(e) => setFilters({ ...filters, contrast: parseInt(e.target.value) })}
                      className="w-full accent-purple-500 cursor-pointer"
                    />
                  </div>

                  {/* Saturação */}
                  <div className="bg-[#1a1b22] p-2.5 rounded-xl border border-[#282a36] space-y-1">
                    <div className="flex justify-between text-[11px] font-semibold text-gray-300">
                      <span className="flex items-center gap-1">
                        <Droplet className="w-3.5 h-3.5 text-pink-400" /> Saturação
                      </span>
                      <span className="font-mono text-purple-400">{filters.saturation}</span>
                    </div>
                    <input
                      type="range"
                      min="-100"
                      max="100"
                      value={filters.saturation}
                      onChange={(e) => setFilters({ ...filters, saturation: parseInt(e.target.value) })}
                      className="w-full accent-purple-500 cursor-pointer"
                    />
                  </div>

                  {/* Matiz (Hue) */}
                  <div className="bg-[#1a1b22] p-2.5 rounded-xl border border-[#282a36] space-y-1">
                    <div className="flex justify-between text-[11px] font-semibold text-gray-300">
                      <span className="flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-indigo-400" /> Matiz (Hue)
                      </span>
                      <span className="font-mono text-purple-400">{filters.hue}°</span>
                    </div>
                    <input
                      type="range"
                      min="-180"
                      max="180"
                      value={filters.hue}
                      onChange={(e) => setFilters({ ...filters, hue: parseInt(e.target.value) })}
                      className="w-full accent-purple-500 cursor-pointer"
                    />
                  </div>

                  {/* Temperatura */}
                  <div className="bg-[#1a1b22] p-2.5 rounded-xl border border-[#282a36] space-y-1">
                    <div className="flex justify-between text-[11px] font-semibold text-gray-300">
                      <span>Temperatura de Cor</span>
                      <span className="font-mono text-purple-400">{filters.temperature || 0}</span>
                    </div>
                    <input
                      type="range"
                      min="-100"
                      max="100"
                      value={filters.temperature || 0}
                      onChange={(e) => setFilters({ ...filters, temperature: parseInt(e.target.value) })}
                      className="w-full accent-purple-500 cursor-pointer"
                    />
                  </div>

                  {/* Vibrância */}
                  <div className="bg-[#1a1b22] p-2.5 rounded-xl border border-[#282a36] space-y-1">
                    <div className="flex justify-between text-[11px] font-semibold text-gray-300">
                      <span>Vibrância</span>
                      <span className="font-mono text-purple-400">{filters.vibrance}</span>
                    </div>
                    <input
                      type="range"
                      min="-100"
                      max="100"
                      value={filters.vibrance}
                      onChange={(e) => setFilters({ ...filters, vibrance: parseInt(e.target.value) })}
                      className="w-full accent-purple-500 cursor-pointer"
                    />
                  </div>

                  {/* Desfoque (Blur) */}
                  <div className="bg-[#1a1b22] p-2.5 rounded-xl border border-[#282a36] space-y-1">
                    <div className="flex justify-between text-[11px] font-semibold text-gray-300">
                      <span>Desfoque (Blur)</span>
                      <span className="font-mono text-purple-400">{filters.blur}px</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="30"
                      value={filters.blur}
                      onChange={(e) => setFilters({ ...filters, blur: parseInt(e.target.value) })}
                      className="w-full accent-purple-500 cursor-pointer"
                    />
                  </div>

                  {/* Sépia */}
                  <div className="bg-[#1a1b22] p-2.5 rounded-xl border border-[#282a36] space-y-1">
                    <div className="flex justify-between text-[11px] font-semibold text-gray-300">
                      <span>Efeito Sépia</span>
                      <span className="font-mono text-purple-400">{filters.sepia || 0}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={filters.sepia || 0}
                      onChange={(e) => setFilters({ ...filters, sepia: parseInt(e.target.value) })}
                      className="w-full accent-purple-500 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Toggles Color Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setFilters({ ...filters, grayscale: !filters.grayscale })}
                    className={`px-3 py-1.5 rounded-xl font-bold text-xs border transition-all cursor-pointer ${
                      filters.grayscale
                        ? 'bg-purple-600 text-white border-purple-400 shadow-md'
                        : 'bg-[#1a1b22] text-gray-300 border-[#282a36] hover:bg-[#252732]'
                    }`}
                  >
                    Preto e Branco
                  </button>

                  <button
                    onClick={() => setFilters({ ...filters, invert: !filters.invert })}
                    className={`px-3 py-1.5 rounded-xl font-bold text-xs border transition-all cursor-pointer ${
                      filters.invert
                        ? 'bg-purple-600 text-white border-purple-400 shadow-md'
                        : 'bg-[#1a1b22] text-gray-300 border-[#282a36] hover:bg-[#252732]'
                    }`}
                  >
                    Inverter Cores
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: RECORTE */}
            {activeTab === 'crop' && (
              <div className="space-y-4">
                <div className="font-bold text-purple-300 pb-2 border-b border-[#282a36]">
                  Opções de Recorte (Crop)
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <button
                    onClick={() => setCropAspect('free')}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      cropAspect === 'free'
                        ? 'bg-purple-600/20 border-purple-500 text-purple-300 font-bold'
                        : 'bg-[#1a1b22] border-[#282a36] text-gray-300 hover:border-purple-500/50'
                    }`}
                  >
                    <Crop className="w-5 h-5 text-purple-400" />
                    <span>Livre</span>
                  </button>

                  <button
                    onClick={() => setCropAspect('1:1')}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      cropAspect === '1:1'
                        ? 'bg-purple-600/20 border-purple-500 text-purple-300 font-bold'
                        : 'bg-[#1a1b22] border-[#282a36] text-gray-300 hover:border-purple-500/50'
                    }`}
                  >
                    <Square className="w-5 h-5 text-sky-400" />
                    <span>Quadrado (1:1)</span>
                  </button>

                  <button
                    onClick={() => setCropAspect('circle')}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      cropAspect === 'circle'
                        ? 'bg-purple-600/20 border-purple-500 text-purple-300 font-bold'
                        : 'bg-[#1a1b22] border-[#282a36] text-gray-300 hover:border-purple-500/50'
                    }`}
                  >
                    <Circle className="w-5 h-5 text-emerald-400" />
                    <span>Circular</span>
                  </button>

                  <button
                    onClick={() => setCropAspect('4:3')}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      cropAspect === '4:3'
                        ? 'bg-purple-600/20 border-purple-500 text-purple-300 font-bold'
                        : 'bg-[#1a1b22] border-[#282a36] text-gray-300 hover:border-purple-500/50'
                    }`}
                  >
                    <Maximize2 className="w-5 h-5 text-pink-400" />
                    <span>4:3 Foto</span>
                  </button>

                  <button
                    onClick={() => setCropAspect('16:9')}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      cropAspect === '16:9'
                        ? 'bg-purple-600/20 border-purple-500 text-purple-300 font-bold'
                        : 'bg-[#1a1b22] border-[#282a36] text-gray-300 hover:border-purple-500/50'
                    }`}
                  >
                    <Maximize2 className="w-5 h-5 text-amber-400" />
                    <span>16:9 Banner</span>
                  </button>

                  <button
                    onClick={() => setCropAspect('tablet')}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      cropAspect === 'tablet'
                        ? 'bg-purple-600/20 border-purple-500 text-purple-300 font-bold'
                        : 'bg-[#1a1b22] border-[#282a36] text-gray-300 hover:border-purple-500/50'
                    }`}
                  >
                    <Tablet className="w-5 h-5 text-sky-400" />
                    <span>Tablet / iPad</span>
                  </button>

                  <button
                    onClick={() => setCropAspect('android')}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      cropAspect === 'android'
                        ? 'bg-purple-600/20 border-purple-500 text-purple-300 font-bold'
                        : 'bg-[#1a1b22] border-[#282a36] text-gray-300 hover:border-purple-500/50'
                    }`}
                  >
                    <Smartphone className="w-5 h-5 text-emerald-400" />
                    <span>Android Mobile</span>
                  </button>

                  <button
                    onClick={() => setCropAspect('macos')}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      cropAspect === 'macos'
                        ? 'bg-purple-600/20 border-purple-500 text-purple-300 font-bold'
                        : 'bg-[#1a1b22] border-[#282a36] text-gray-300 hover:border-purple-500/50'
                    }`}
                  >
                    <Laptop className="w-5 h-5 text-purple-400" />
                    <span>macOS Desktop</span>
                  </button>
                </div>

                {/* Crop Rotation */}
                <div className="bg-[#1a1b22] p-3 rounded-xl border border-[#282a36] space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-gray-300">
                    <span className="flex items-center gap-1">
                      <RotateCw className="w-3.5 h-3.5 text-sky-400" /> Rotação do Corte
                    </span>
                    <span className="font-mono text-purple-400">{cropRotation}°</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={cropRotation}
                    onChange={(e) => setCropRotation(parseInt(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                </div>

                <button
                  onClick={handleApplyCrop}
                  className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 font-bold text-white shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Scissors className="w-4 h-4" />
                  <span>Aplicar Recorte na Imagem</span>
                </button>
              </div>
            )}

            {/* TAB 3: FILTROS */}
            {activeTab === 'filters' && (
              <div className="space-y-4">
                <div className="font-bold text-purple-300 pb-2 border-b border-[#282a36]">
                  Filtros Estéticos Não Destrutivos
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'none', label: 'Original / Nenhum', color: 'from-slate-700 to-slate-900' },
                    { id: 'vintage', label: 'Vintage Retro', color: 'from-amber-700 to-yellow-900' },
                    { id: 'hdr', label: 'HDR Vibrante', color: 'from-sky-600 to-blue-900' },
                    { id: 'neon', label: 'Cyberpunk Neon', color: 'from-pink-600 to-purple-900' },
                    { id: 'cinema', label: 'Cinema Mood', color: 'from-teal-700 to-slate-900' },
                    { id: 'popart', label: 'Pop Art', color: 'from-fuchsia-600 to-pink-800' },
                    { id: 'cool', label: 'Tons Frios', color: 'from-cyan-700 to-blue-950' },
                    { id: 'warm', label: 'Tons Quentes', color: 'from-orange-600 to-red-900' },
                    { id: 'duotone', label: 'Duotone Sublimação', color: 'from-purple-800 to-indigo-950' },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFilters({ ...filters, presetFilter: f.id })}
                      className={`p-3 rounded-2xl border text-left flex flex-col justify-between h-20 transition-all cursor-pointer bg-gradient-to-br ${f.color} ${
                        filters.presetFilter === f.id
                          ? 'border-purple-400 ring-2 ring-purple-500/50 shadow-lg scale-[1.02]'
                          : 'border-white/10 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <span className="font-bold text-xs text-white">{f.label}</span>
                      {filters.presetFilter === f.id && (
                        <span className="self-end px-1.5 py-0.5 rounded bg-purple-500 text-[9px] font-bold text-white">
                          ATIVO
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Filter Intensity Slider */}
                <div className="bg-[#1a1b22] p-3 rounded-xl border border-[#282a36] space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-gray-300">
                    <span>Intensidade do Filtro</span>
                    <span className="font-mono text-purple-400">{filters.filterIntensity ?? 100}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={filters.filterIntensity ?? 100}
                    onChange={(e) => setFilters({ ...filters, filterIntensity: parseInt(e.target.value) })}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                </div>
              </div>
            )}

            {/* TAB 4: SMART AI TOOLS */}
            {activeTab === 'smart' && (
              <div className="space-y-3">
                <div className="font-bold text-amber-300 pb-2 border-b border-[#282a36] flex items-center gap-1.5">
                  <Wand2 className="w-4 h-4 text-amber-400" />
                  Ferramentas Inteligentes de Edição
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Remove BG */}
                  <button
                    onClick={handleRemoveBackground}
                    className="p-3 bg-[#1a1b22] hover:bg-purple-900/30 border border-[#282a36] hover:border-purple-500/50 rounded-2xl flex items-center gap-3 text-left transition-all cursor-pointer"
                  >
                    <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      <Wand2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-white">Remover Fundo</div>
                      <div className="text-[10px] text-gray-400">Remove fundos claros/brancos com transparência</div>
                    </div>
                  </button>

                  {/* Vetorizar */}
                  <button
                    onClick={handleVectorize}
                    className="p-3 bg-[#1a1b22] hover:bg-sky-900/30 border border-[#282a36] hover:border-sky-500/50 rounded-2xl flex items-center gap-3 text-left transition-all cursor-pointer"
                  >
                    <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/30">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-white">Vetorizar Estampa</div>
                      <div className="text-[10px] text-gray-400">Converte fotos em arte vetorial nítida</div>
                    </div>
                  </button>

                  {/* Upscale 2x */}
                  <button
                    onClick={() => handleUpscale(2)}
                    className="p-3 bg-[#1a1b22] hover:bg-emerald-900/30 border border-[#282a36] hover:border-emerald-500/50 rounded-2xl flex items-center gap-3 text-left transition-all cursor-pointer"
                  >
                    <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-white">Upscale 2x HD</div>
                      <div className="text-[10px] text-gray-400">Dobrar resolução para impressão 300 DPI</div>
                    </div>
                  </button>

                  {/* Auto Crop Transparente */}
                  <button
                    onClick={handleAutoCropTransparent}
                    className="p-3 bg-[#1a1b22] hover:bg-pink-900/30 border border-[#282a36] hover:border-pink-500/50 rounded-2xl flex items-center gap-3 text-left transition-all cursor-pointer"
                  >
                    <div className="p-2.5 rounded-xl bg-pink-500/20 text-pink-300 border border-pink-500/30">
                      <Crop className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-white">Auto Enquadramento</div>
                      <div className="text-[10px] text-gray-400">Elimina bordas transparentes desnecessárias</div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className={`flex items-center justify-between px-5 py-3 border-t ${
          theme === 'light' ? 'border-purple-100 bg-purple-50/50' : 'border-[#282a36] bg-[#1a1b22]'
        }`}>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-gray-400 hover:text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Cancelar
          </button>

          <button
            onClick={handleApply}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg transition-all cursor-pointer flex items-center gap-2"
          >
            <Check className="w-4 h-4" />
            <span>Salvar e Aplicar no Studio</span>
          </button>
        </div>
      </div>
    </div>
  );
};
