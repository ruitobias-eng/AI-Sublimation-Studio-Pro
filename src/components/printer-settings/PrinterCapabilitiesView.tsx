import React from 'react';
import { PrinterCapabilities } from '../../services/printer/PrinterTypes';
import { Sliders, Maximize2, Layers, Check, X } from 'lucide-react';

interface PrinterCapabilitiesViewProps {
  capabilities: PrinterCapabilities | null;
}

export const PrinterCapabilitiesView: React.FC<PrinterCapabilitiesViewProps> = ({ capabilities }) => {
  if (!capabilities) {
    return (
      <div className="p-4 bg-[#0a0b10] border border-slate-800 rounded-xl text-xs text-gray-400">
        Nenhuma capacidade detectada.
      </div>
    );
  }

  return (
    <div className="bg-[#0a0b10] border border-slate-800 rounded-2xl p-4 space-y-3">
      <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-2">
        <Sliders className="w-3.5 h-3.5 text-purple-400" />
        Capacidades de Hardware Detectadas
      </h4>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
        <div className="p-2.5 bg-[#12131b] rounded-xl border border-slate-800">
          <span className="text-[10px] text-gray-400 block font-semibold">Resolução Máxima</span>
          <span className="font-bold text-purple-300 font-mono">{capabilities.maxResolutionDpi} DPI</span>
        </div>

        <div className="p-2.5 bg-[#12131b] rounded-xl border border-slate-800">
          <span className="text-[10px] text-gray-400 block font-semibold">Sem Bordas (Borderless)</span>
          <span className="font-bold flex items-center gap-1 text-emerald-400">
            {capabilities.supportsBorderless ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5 text-red-400" />}
            {capabilities.supportsBorderless ? 'Suportado' : 'Não'}
          </span>
        </div>

        <div className="p-2.5 bg-[#12131b] rounded-xl border border-slate-800">
          <span className="text-[10px] text-gray-400 block font-semibold">Impressão Duplex</span>
          <span className="font-bold text-gray-300">
            {capabilities.supportsDuplex ? 'Automático' : 'Manual'}
          </span>
        </div>

        <div className="p-2.5 bg-[#12131b] rounded-xl border border-slate-800">
          <span className="text-[10px] text-gray-400 block font-semibold">Suporte a Cores</span>
          <span className="font-bold text-emerald-400">
            {capabilities.supportsColor ? 'CMYK / Sublimação' : 'Monocromático'}
          </span>
        </div>
      </div>

      {/* Supported Papers */}
      <div>
        <span className="text-[11px] font-bold text-gray-400 block mb-1.5">Tamanhos de Papel Cadastrados:</span>
        <div className="flex flex-wrap gap-1.5">
          {capabilities.supportedPaperSizes.map((paper) => (
            <span
              key={paper.id}
              className="text-[10px] font-mono bg-slate-800 border border-slate-700 text-gray-200 px-2.5 py-1 rounded-lg"
            >
              {paper.name} ({paper.widthMm}x{paper.heightMm}mm)
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
