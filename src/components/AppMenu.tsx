import React, { useState, useRef, useEffect } from 'react';
import { Menu as MenuIcon, FolderPlus, FolderOpen, ImagePlus, Save, Settings, Download, Smartphone, HelpCircle, Info, Sun, Moon, Printer } from 'lucide-react';

interface AppMenuProps {
  theme?: 'light' | 'dark' | string;
  onExport: () => void;
  onOpenPrintModal?: () => void;
  onNewProject?: () => void;
  onOpenProject?: () => void;
  onIncludeStamp?: () => void;
  onSaveLayout?: () => void;
  onOpenSettings?: () => void;
  onOpenPrinterSettings?: () => void;
  onOpenAndroidModal?: () => void;
  onOpenHelp?: () => void;
  onOpenAbout?: () => void;
  onToggleTheme?: () => void;
}

export function AppMenu({
  theme = 'dark',
  onExport,
  onOpenPrintModal,
  onNewProject,
  onOpenProject,
  onIncludeStamp,
  onSaveLayout,
  onOpenSettings,
  onOpenPrinterSettings,
  onOpenAndroidModal,
  onOpenHelp,
  onOpenAbout,
  onToggleTheme,
}: AppMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fecha o menu ao clicar/tocar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-50 shrink-0" ref={menuRef}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        className={`px-2.5 py-1 rounded-xl border transition-all flex items-center gap-1.5 font-extrabold cursor-pointer shadow-sm ${
          theme === 'light' 
            ? 'bg-slate-100 border-slate-300 hover:bg-purple-50 hover:border-purple-300 text-slate-800' 
            : 'bg-[#181920] border-[#2b2c36] hover:bg-[#22232e] hover:border-purple-500/50 text-gray-200'
        }`}
        title="Menu Principal (Arquivo)"
      >
        <MenuIcon className="w-4 h-4 text-purple-400 shrink-0" />
        <span className="font-extrabold text-xs">Arquivo</span>
      </button>

      {isOpen && (
        <div className={`fixed top-12 left-2 sm:left-28 mt-1 w-64 rounded-2xl shadow-2xl border overflow-hidden z-[100] transition-all touch-scroll-y max-h-[calc(100dvh-3.5rem)] ${
          theme === 'light' 
            ? 'bg-white border-slate-200 text-slate-800 shadow-slate-300/50' 
            : 'bg-[#161720] border-[#2d2f3e] text-gray-200 shadow-black/80'
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
              Salvar Projeto
            </button>

            <button 
              onClick={() => {
                setIsOpen(false);
                onExport();
              }}
              className="flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer"
            >
              <Download className="w-4 h-4 text-indigo-400 group-hover:text-white" />
              <span>Exportar Imagem PNG</span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenPrinterSettings ? onOpenPrinterSettings() : onOpenSettings?.();
              }}
              className="flex items-center justify-between px-4 py-2.5 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer font-extrabold bg-purple-500/15 text-purple-300 my-0.5"
            >
              <div className="flex items-center gap-3">
                <Printer className="w-4 h-4 text-purple-400 group-hover:text-white shrink-0" />
                <div className="flex flex-col">
                  <span className="font-extrabold text-xs">Impressão & Impressoras</span>
                  <span className="text-[10px] text-purple-300/80 font-normal group-hover:text-white/90">Central RIP • Perfis ICC • Spooler</span>
                </div>
              </div>
              <span className="text-[10px] bg-purple-500/20 px-1.5 py-0.5 rounded text-purple-200 font-mono border border-purple-500/30">Ctrl+P</span>
            </button>

            {onOpenAndroidModal && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenAndroidModal();
                }}
                className="flex items-center gap-3 px-4 py-2 hover:bg-emerald-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer bg-emerald-500/10"
              >
                <Smartphone className="w-4 h-4 text-emerald-400 group-hover:text-white" />
                Versão App Android (PWA/APK)
              </button>
            )}

            <hr className={`my-1 ${theme === 'light' ? 'border-slate-200' : 'border-[#2d2d30]'}`} />

            {onOpenHelp && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenHelp();
                }}
                className="flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-amber-400 group-hover:text-white" />
                Ajuda (Tutorial Completo)
              </button>
            )}

            {onOpenAbout && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenAbout();
                }}
                className="flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer"
              >
                <Info className="w-4 h-4 text-purple-400 group-hover:text-white" />
                Sobre o Sublim Studio
              </button>
            )}

            {onToggleTheme && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onToggleTheme();
                }}
                className="flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer font-semibold"
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="w-4 h-4 text-purple-400 group-hover:text-white" />
                    <span>Mudar para Tema Escuro</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4 text-amber-400 group-hover:text-white" />
                    <span>Mudar para Tema Claro</span>
                  </>
                )}
              </button>
            )}

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenSettings?.();
              }}
              className="flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors text-sm text-left w-full cursor-pointer"
            >
              <Settings className="w-4 h-4 text-slate-400 group-hover:text-white" />
              Configurações Gerais
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

