import React from 'react';
import { Printer } from '../../services/printer/PrinterTypes';

interface PrinterStatusProps {
  printer: Printer | null;
}

export const PrinterStatusView: React.FC<PrinterStatusProps> = ({ printer }) => {
  if (!printer) return null;

  return (
    <div className="p-3 rounded-xl bg-[#0d0e14] border border-slate-800 flex items-center justify-between text-xs">
      <div className="flex items-center gap-2">
        <span
          className={`w-2.5 h-2.5 rounded-full ${
            printer.status === 'idle'
              ? 'bg-emerald-400 animate-pulse'
              : printer.status === 'printing'
              ? 'bg-amber-400'
              : 'bg-red-400'
          }`}
        />
        <span className="font-bold text-gray-200">{printer.displayName}</span>
      </div>

      <span className="font-mono text-gray-400">
        Porta: {printer.port || 'USB/Local'} | Driver: {printer.driverVersion || 'WinSpooler'}
      </span>
    </div>
  );
};
