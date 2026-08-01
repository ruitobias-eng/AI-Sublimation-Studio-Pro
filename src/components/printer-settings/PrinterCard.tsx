import React from 'react';
import { Printer } from '../../services/printer/PrinterTypes';
import { Printer as PrinterIcon, CheckCircle2, Star, Settings2, TestTube2, Cpu } from 'lucide-react';

interface PrinterCardProps {
  printer: Printer;
  isSelected: boolean;
  onSelect: () => void;
  onSetAppDefault: () => void;
  onOpenNativeProperties: () => void;
  onRunTest: () => void;
}

export const PrinterCard: React.FC<PrinterCardProps> = ({
  printer,
  isSelected,
  onSelect,
  onSetAppDefault,
  onOpenNativeProperties,
  onRunTest,
}) => {
  return (
    <div
      className={`p-4 rounded-2xl border transition-all flex flex-col justify-between gap-3 ${
        isSelected
          ? 'bg-purple-950/20 border-purple-500 shadow-lg shadow-purple-500/10'
          : 'bg-[#12131b] border-slate-800 hover:border-slate-700'
      }`}
    >
      {/* Top Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <div
            className={`p-2.5 rounded-xl border ${
              isSelected ? 'bg-purple-500/20 text-purple-400 border-purple-500/40' : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            <PrinterIcon className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm flex items-center gap-1.5">
              {printer.displayName}
            </h4>
            <span className="text-[11px] text-gray-400 block font-mono">
              {printer.manufacturer || 'Fabricante Desconhecido'} {printer.model ? `• ${printer.model}` : ''}
            </span>
          </div>
        </div>

        {/* Status indicator */}
        <span
          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border flex items-center gap-1 ${
            printer.status === 'idle'
              ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
              : printer.status === 'printing'
              ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
              : 'bg-red-500/20 text-red-400 border-red-500/30'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {printer.status === 'idle' ? 'Disponível' : printer.status === 'printing' ? 'Imprimindo' : 'Offline / Erro'}
        </span>
      </div>

      {/* Defaults Flags */}
      <div className="grid grid-cols-2 gap-2 text-[11px] bg-[#0a0b10] p-2.5 rounded-xl border border-slate-800/80">
        <div className="flex items-center gap-1.5 text-gray-300">
          <Star className={`w-3.5 h-3.5 ${printer.isSystemDefault ? 'text-amber-400 fill-amber-400' : 'text-gray-500'}`} />
          <span>Sistema: {printer.isSystemDefault ? '★ Padrão do OS' : 'Secundária'}</span>
        </div>

        <div className="flex items-center gap-1.5 text-gray-300">
          <CheckCircle2 className={`w-3.5 h-3.5 ${printer.isAppDefault ? 'text-emerald-400' : 'text-gray-500'}`} />
          <span>App: {printer.isAppDefault ? '✓ Selecionada no Sublima' : 'Secundária'}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-1 border-t border-slate-800/60">
        <button
          onClick={onSelect}
          className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            isSelected
              ? 'bg-purple-600 text-white shadow'
              : 'bg-slate-800 hover:bg-slate-700 text-gray-200 border border-slate-700'
          }`}
        >
          {isSelected ? 'Selecionada' : 'Selecionar'}
        </button>

        {!printer.isAppDefault && (
          <button
            onClick={onSetAppDefault}
            className="py-1.5 px-2.5 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 rounded-xl text-xs font-bold transition-all cursor-pointer"
            title="Tornar impressora padrão do Sublima Studio"
          >
            Tornar Padrão
          </button>
        )}

        <button
          onClick={onOpenNativeProperties}
          className="p-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-gray-300 hover:text-white rounded-xl cursor-pointer"
          title="Propriedades do Sistema"
        >
          <Settings2 className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={onRunTest}
          className="p-2 bg-indigo-950/60 hover:bg-indigo-900/80 border border-indigo-500/40 text-indigo-300 rounded-xl cursor-pointer"
          title="Imprimir Teste de Calibração"
        >
          <TestTube2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
