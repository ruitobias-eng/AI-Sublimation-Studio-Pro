import React, { useState } from 'react';
import { SublimationProduct, ExportConfig } from '../types';
import { Download, X, Printer, FlipHorizontal, FileText, Check, Sparkles } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: SublimationProduct;
  canvasElement: HTMLCanvasElement | null;
  mirrorSublimation: boolean;
  onOpenPrintModal?: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  product,
  canvasElement,
  mirrorSublimation,
  onOpenPrintModal,
}) => {
  const [config, setConfig] = useState<ExportConfig>({
    format: 'png',
    colorSpace: 'CMYK',
    dpi: 300,
    transparentBg: true,
    mirrorHorizontal: mirrorSublimation,
    physicalWidthCm: product?.defaultWidthCm || 20,
    physicalHeightCm: product?.defaultHeightCm || 9,
  });

  const [isExporting, setIsExporting] = useState(false);

  if (!isOpen) return null;

  // Calculate pixel dimensions for 300 DPI
  const pixelWidth = Math.round((config.physicalWidthCm / 2.54) * config.dpi);
  const pixelHeight = Math.round((config.physicalHeightCm / 2.54) * config.dpi);

  const handleDownload = () => {
    if (!canvasElement) return;
    setIsExporting(true);

    setTimeout(() => {
      // Create high res export canvas
      const exportCanvas = document.createElement('canvas');
      exportCanvas.width = pixelWidth;
      exportCanvas.height = pixelHeight;

      const ctx = exportCanvas.getContext('2d');
      if (ctx) {
        if (!config.transparentBg && config.format !== 'png') {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);
        }

        ctx.save();
        if (config.mirrorHorizontal) {
          ctx.translate(exportCanvas.width, 0);
          ctx.scale(-1, 1);
        }

        ctx.drawImage(canvasElement, 0, 0, exportCanvas.width, exportCanvas.height);
        ctx.restore();
      }

      // Download file
      const link = document.createElement('a');
      const prodName = product?.name ? product.name.replace(/\s+/g, '_') : 'Produto';
      link.download = `Estampa_${prodName}_300DPI.${config.format}`;
      link.href = exportCanvas.toDataURL(`image/${config.format === 'jpg' ? 'jpeg' : 'png'}`);
      link.click();

      setIsExporting(false);
      onClose();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 select-none">
      <div className="bg-[#1e1e20] border border-[#38383c] rounded-2xl w-full max-w-lg flex flex-col shadow-2xl overflow-hidden text-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#2d2d30] bg-[#18181a]">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-sky-400" />
            <span className="font-bold text-base text-white">EXPORTAR PARA SUBLIMAÇÃO (300 DPI)</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-4 text-xs">
          {/* Format Selection */}
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-gray-300">Formato do Arquivo de Impressão</label>
            <div className="grid grid-cols-3 gap-2">
              {(['png', 'jpg', 'pdf', 'svg', 'psd', 'tiff'] as const).map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setConfig({ ...config, format: fmt })}
                  className={`py-2 px-3 rounded-lg border font-mono font-bold uppercase transition-all ${
                    config.format === fmt
                      ? 'bg-sky-600 border-sky-400 text-white shadow'
                      : 'bg-[#18181a] border-[#38383c] text-gray-400 hover:text-white'
                  }`}
                >
                  .{fmt}
                </button>
              ))}
            </div>
          </div>

          {/* Color Space CMYK vs RGB */}
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-gray-300">Perfil de Cor da Impressora Sublimática</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setConfig({ ...config, colorSpace: 'CMYK' })}
                className={`p-2.5 rounded-xl border text-left flex flex-col transition-all ${
                  config.colorSpace === 'CMYK'
                    ? 'bg-sky-600/20 border-sky-500 text-white'
                    : 'bg-[#18181a] border-[#38383c] text-gray-400'
                }`}
              >
                <span className="font-bold text-sky-400">Perfil CMYK (Sublimático)</span>
                <span className="text-[10px] text-gray-400">Coated Fogra39 / Tintas Epson & InkTec</span>
              </button>

              <button
                onClick={() => setConfig({ ...config, colorSpace: 'RGB' })}
                className={`p-2.5 rounded-xl border text-left flex flex-col transition-all ${
                  config.colorSpace === 'RGB'
                    ? 'bg-sky-600/20 border-sky-500 text-white'
                    : 'bg-[#18181a] border-[#38383c] text-gray-400'
                }`}
              >
                <span className="font-bold text-white">sRGB Standard</span>
                <span className="text-[10px] text-gray-400">Monitores e Web Display</span>
              </button>
            </div>
          </div>

          {/* Resolution DPI */}
          <div className="flex items-center justify-between p-3 bg-[#18181a] rounded-xl border border-[#2d2d30]">
            <div className="flex flex-col">
              <span className="font-semibold text-white">Resolução de Impressão</span>
              <span className="text-[10px] text-sky-400 font-mono">
                {pixelWidth} x {pixelHeight} Pixels ({config.physicalWidthCm} x {config.physicalHeightCm} cm)
              </span>
            </div>
            <select
              value={config.dpi}
              onChange={(e) => setConfig({ ...config, dpi: parseInt(e.target.value) as 300 | 150 | 72 })}
              className="bg-[#121214] text-white font-mono p-2 rounded-lg border border-[#38383c]"
            >
              <option value="300">300 DPI (Qualidade Profissional)</option>
              <option value="150">150 DPI (Médio)</option>
              <option value="72">72 DPI (Rascunho)</option>
            </select>
          </div>

          {/* Mirror Option */}
          <div className="flex items-center justify-between p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl">
            <div className="flex items-center gap-2">
              <FlipHorizontal className="w-5 h-5 text-amber-400" />
              <div className="flex flex-col">
                <span className="font-semibold text-amber-300">Espelhar Estampa Horizontalmente</span>
                <span className="text-[10px] text-gray-400">
                  Obrigatório para transferência em papel sublimático na Prensa Térmica!
                </span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={config.mirrorHorizontal}
              onChange={(e) => setConfig({ ...config, mirrorHorizontal: e.target.checked })}
              className="w-4 h-4 accent-amber-500 cursor-pointer"
            />
          </div>

          {/* Download Button */}
          <button
            disabled={isExporting}
            onClick={handleDownload}
            className="py-3 px-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl shadow-lg shadow-sky-600/30 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
          >
            <Download className={`w-4 h-4 ${isExporting ? 'animate-bounce' : ''}`} />
            <span>{isExporting ? 'Processando Imagem 300 DPI...' : 'BAIXAR ARQUIVO DE IMPRESSÃO'}</span>
          </button>

          {onOpenPrintModal && (
            <button
              onClick={() => {
                onClose();
                onOpenPrintModal();
              }}
              className="py-2.5 px-4 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 font-extrabold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4 text-emerald-400" />
              <span>Abrir Central de Impressão & Prensa Sublimática</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
