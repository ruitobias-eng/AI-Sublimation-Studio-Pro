import React from 'react';
import { Printer } from '../../services/printer/PrinterTypes';
import { Printer as PrinterIcon } from 'lucide-react';

interface PrinterSelectorProps {
  printers: Printer[];
  selectedPrinterId: string;
  onSelectPrinter: (printerId: string) => void;
}

export const PrinterSelector: React.FC<PrinterSelectorProps> = ({
  printers,
  selectedPrinterId,
  onSelectPrinter,
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold text-purple-300 flex items-center gap-1.5 uppercase tracking-wider">
        <PrinterIcon className="w-3.5 h-3.5 text-purple-400" />
        Impressora Ativa no Sublim Studio
      </label>
      <select
        value={selectedPrinterId}
        onChange={(e) => onSelectPrinter(e.target.value)}
        className="w-full bg-[#0a0b10] border border-slate-700 focus:border-purple-500 rounded-xl p-2.5 text-xs text-white font-medium focus:outline-none"
      >
        {printers.map((p) => (
          <option key={p.id} value={p.id}>
            {p.displayName} {p.isAppDefault ? '(Padrão do App)' : p.isSystemDefault ? '(Padrão do Windows)' : ''}
          </option>
        ))}
      </select>
    </div>
  );
};
