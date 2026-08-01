import React from 'react';
import { Printer } from '../../services/printer/PrinterTypes';
import { PrinterCard } from './PrinterCard';
import { RefreshCw, Search } from 'lucide-react';

interface PrinterListProps {
  printers: Printer[];
  selectedPrinter: Printer | null;
  isLoading: boolean;
  onRefresh: () => void;
  onSelect: (printerId: string) => void;
  onSetAppDefault: (printerId: string) => void;
  onOpenNativeProperties: (printerId: string) => void;
  onRunTest: (printer: Printer) => void;
}

export const PrinterList: React.FC<PrinterListProps> = ({
  printers,
  selectedPrinter,
  isLoading,
  onRefresh,
  onSelect,
  onSetAppDefault,
  onOpenNativeProperties,
  onRunTest,
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredPrinters = printers.filter((p) =>
    p.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.manufacturer?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Search & Refresh Toolbar */}
      <div className="flex items-center justify-between gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar impressora por nome ou modelo..."
            className="w-full bg-[#0a0b10] border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        <button
          disabled={isLoading}
          onClick={onRefresh}
          className="py-2 px-3.5 bg-slate-800 hover:bg-slate-700 text-gray-200 border border-slate-700 font-bold rounded-xl text-xs flex items-center gap-2 cursor-pointer active:scale-95 transition-all disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
          <span>{isLoading ? 'Atualizando...' : 'Atualizar Lista'}</span>
        </button>
      </div>

      {/* Grid of Printers */}
      {filteredPrinters.length === 0 ? (
        <div className="p-8 text-center rounded-2xl bg-[#0a0b10] border border-slate-800 text-gray-400 text-xs">
          Nenhuma impressora encontrada. Verifique a conexão do cabo USB ou Wi-Fi Direct.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPrinters.map((printer) => (
            <PrinterCard
              key={printer.id}
              printer={printer}
              isSelected={selectedPrinter?.id === printer.id}
              onSelect={() => onSelect(printer.id)}
              onSetAppDefault={() => onSetAppDefault(printer.id)}
              onOpenNativeProperties={() => onOpenNativeProperties(printer.id)}
              onRunTest={() => onRunTest(printer)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
