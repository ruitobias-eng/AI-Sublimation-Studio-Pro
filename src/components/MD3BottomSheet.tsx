import React from 'react';
import { X, ChevronDown } from 'lucide-react';

interface MD3BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const MD3BottomSheet: React.FC<MD3BottomSheetProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-sm animate-fade-in lg:hidden">
      {/* Backdrop area to click-outside close */}
      <div className="flex-1 w-full" onClick={onClose} />

      {/* Sheet Container */}
      <div className="w-full bg-[#0f172a] border-t border-slate-700/80 rounded-t-[28px] shadow-2xl max-h-[85vh] flex flex-col overflow-hidden animate-slide-up">
        {/* Material 3 Drag Handle */}
        <div className="pt-3 pb-2 flex flex-col items-center justify-center shrink-0 cursor-grab active:cursor-grabbing" onClick={onClose}>
          <div className="w-12 h-1.5 bg-slate-600/80 hover:bg-slate-500 rounded-full transition-colors" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 pb-3 border-b border-slate-800/80 shrink-0">
          <div>
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">{title}</h3>
            {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-full transition-colors"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 overflow-y-auto flex-1 text-slate-200">
          {children}
        </div>
      </div>
    </div>
  );
};
