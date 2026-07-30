import React, { useState, useRef, useEffect } from 'react';
import { Menu as MenuIcon, FolderPlus, FolderOpen, ImagePlus, Save, Settings, Download } from 'lucide-react';

interface AppMenuProps {
  theme?: 'light' | 'dark' | string;
  onExport: () => void;
  onNewProject?: () => void;
  onOpenProject?: () => void;
  onIncludeStamp?: () => void;
  onSaveLayout?: () => void;
  onOpenSettings?: () => void;
}

export function AppMenu({
  theme = 'dark',
  onExport,
  onNewProject,
  onOpenProject,
  onIncludeStamp,
  onSaveLayout,
  onOpenSettings,
}: AppMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-lg transition-colors flex items-center gap-2 cursor-pointer ${
          theme === 'light' 
            ? 'hover:bg-slate-200 text-slate-700' 
            : 'hover:bg-white/10 text-gray-200'
        }`}
        title="Menu Principal"
      >
        <MenuIcon className="w-5 h-5" />
        <span className="font-medium hidden md:block text-sm">Arquivo</span>
      </button>

      {isOpen && (
        <div className={`absolute top-full left-0 mt-2 w-60 rounded-xl shadow-xl border overflow-hidden z-50 transition-all ${
          theme === 'light' 
            ? 'bg-white border-slate-200 text-slate-800' 
            : 'bg-[#1e1e20] border-[#2d2d30] text-gray-200'
        }`}>
          <div className="flex flex-col py-1">
            <button
              onClick={() => {
                setIsOpen(false);
                onNewProject?.();
              }}
              className="flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer"
            >
              <FolderPlus className="w-4 h-4 text-purple-400 group-hover:text-white" />
              Novo Projeto
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenProject?.();
              }}
              className="flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer"
            >
              <FolderOpen className="w-4 h-4 text-sky-400 group-hover:text-white" />
              Abrir Projeto...
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                onIncludeStamp?.();
              }}
              className="flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer"
            >
              <ImagePlus className="w-4 h-4 text-emerald-400 group-hover:text-white" />
              Incluir Estampa (Imagem)
            </button>

            <hr className={`my-1 ${theme === 'light' ? 'border-slate-200' : 'border-[#2d2d30]'}`} />

            <button
              onClick={() => {
                setIsOpen(false);
                onSaveLayout?.();
              }}
              className="flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer"
            >
              <Save className="w-4 h-4 text-amber-400 group-hover:text-white" />
              Salvar Layout
            </button>

            <button 
              onClick={() => {
                setIsOpen(false);
                onExport();
              }}
              className="flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer"
            >
              <Download className="w-4 h-4 text-indigo-400 group-hover:text-white" />
              Exportar Sublimação
            </button>

            <hr className={`my-1 ${theme === 'light' ? 'border-slate-200' : 'border-[#2d2d30]'}`} />

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenSettings?.();
              }}
              className="flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer"
            >
              <Settings className="w-4 h-4 text-slate-400 group-hover:text-white" />
              Configurações
            </button>
          </div>
        </div>
      )}
    </div>
  );
}