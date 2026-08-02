import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  RotateCcw,
  RotateCw,
  CheckCircle2,
  Share2,
  Box,
  Columns,
  Square,
  Wand2,
  ChevronDown,
  FlipHorizontal,
  Sun,
  HelpCircle,
  Info,
  Moon,
  Smartphone,
  Printer,
} from 'lucide-react';
import { SublimationProduct, WorkspaceViewMode } from '../types';
import { AppMenu } from './AppMenu';
import { ProductIcon } from './ProductIcon';

interface TopBarProps {
  currentProduct?: SublimationProduct;
  onOpenProductLibrary: () => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  onOpenExportModal: () => void;
  onOpenPrintModal?: () => void;
  onOpenAIPanel: () => void;
  onOpenAndroidModal?: () => void;
  onOpenHelp?: () => void;
  onOpenAbout?: () => void;
  mirrorSublimation: boolean;
  onToggleMirrorSublimation: () => void;
  showGrid: boolean;
  onToggleGrid: () => void;
  showRulers: boolean;
  onToggleRulers: () => void;
  zoomLevel: number;
  onZoomChange: (zoom: number) => void;
  workspaceViewMode: WorkspaceViewMode;
  onChangeWorkspaceViewMode: (mode: WorkspaceViewMode) => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
  onNewProject?: () => void;
  onOpenProject?: () => void;
  onIncludeStamp?: () => void;
  onSaveLayout?: () => void;
  onOpenSettings?: () => void;
  onOpenPrinterSettings?: () => void;
  projectName?: string;
  onChangeProjectName?: (name: string) => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentProduct,
  onOpenProductLibrary,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  onOpenExportModal,
  onOpenPrintModal,
  onOpenAIPanel,
  onOpenAndroidModal,
  onOpenHelp,
  onOpenAbout,
  mirrorSublimation,
  onToggleMirrorSublimation,
  workspaceViewMode,
  onChangeWorkspaceViewMode,
  theme = 'dark',
  onToggleTheme,
  onNewProject,
  onOpenProject,
  onIncludeStamp,
  onSaveLayout,
  onOpenSettings,
  onOpenPrinterSettings,
  projectName = 'Arte Sublimação - Caneca 325ml',
  onChangeProjectName,
}) => {
  const [internalProjectName, setInternalProjectName] = useState<string>(projectName);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    setInternalProjectName(projectName);
  }, [projectName]);

  const handleNameChange = (newName: string) => {
    setInternalProjectName(newName);
    if (onChangeProjectName) {
      onChangeProjectName(newName);
    }
  };

  return (
    <header className={`h-12 border-b select-none text-xs z-40 shadow-md transition-colors relative overflow-x-auto no-scrollbar max-w-full shrink-0 touch-scroll-x px-2 sm:px-3 ${
      theme === 'light'
        ? 'bg-white border-slate-200 text-slate-800'
        : 'bg-[#0e0f14] border-[#23242c] text-gray-200'
    }`}>
      <div className="flex items-center justify-between min-w-max w-full h-full gap-2">
        {/* 1. Left Group: Logo, Menu, Undo/Redo, Project Name, Product Switcher, Cloud Status */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        {/* Brand Logo */}
        <div className="flex items-center gap-1.5 bg-slate-900/10 dark:bg-white/5 border border-purple-500/30 px-2 py-1 rounded-xl shadow-sm cursor-pointer hover:brightness-110 transition-all shrink-0 whitespace-nowrap">
          {!logoError ? (
            <img
              src="/favicon.svg"
              alt="Sublim Studio"
              className="w-5 h-5 object-contain rounded-md shrink-0"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith('.png')) {
                  target.src = '/favicon.png';
                } else {
                  setLogoError(true);
                }
              }}
            />
          ) : (
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          )}
          <div className="flex items-center gap-1 shrink-0 whitespace-nowrap">
            <span className="font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 text-xs">
              SublimStudio
            </span>
            <span className="px-1 py-0.2 text-[9px] font-black bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded font-mono">
              PRO
            </span>
          </div>
        </div>

        {/* Main Dropdown Menu */}
        <AppMenu
          theme={theme}
          onExport={onOpenExportModal}
          onOpenPrintModal={onOpenPrintModal}
          onNewProject={onNewProject}
          onOpenProject={onOpenProject}
          onIncludeStamp={onIncludeStamp}
          onSaveLayout={onSaveLayout}
          onOpenSettings={onOpenSettings}
          onOpenPrinterSettings={onOpenPrinterSettings}
          onOpenAndroidModal={onOpenAndroidModal}
          onOpenHelp={onOpenHelp}
          onOpenAbout={onOpenAbout}
          onToggleTheme={onToggleTheme}
        />

        {/* Undo / Redo */}
        <div className={`flex items-center rounded-xl p-0.5 border shrink-0 ${
          theme === 'light' ? 'bg-slate-100 border-slate-300' : 'bg-[#181920] border-[#2b2c36]'
        }`}>
          <button
            onClick={onUndo}
            disabled={!canUndo}
            className={`p-1 disabled:opacity-30 rounded-lg transition-colors cursor-pointer ${
              theme === 'light' ? 'text-slate-700 hover:text-black hover:bg-slate-200' : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
            title="Desfazer (Ctrl+Z)"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onRedo}
            disabled={!canRedo}
            className={`p-1 disabled:opacity-30 rounded-lg transition-colors cursor-pointer ${
              theme === 'light' ? 'text-slate-700 hover:text-black hover:bg-slate-200' : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
            title="Refazer (Ctrl+Y)"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Editable Project Name */}
        <input
          type="text"
          value={internalProjectName}
          onChange={(e) => handleNameChange(e.target.value)}
          className={`hidden xl:block bg-transparent px-2 py-0.5 rounded-lg text-xs font-semibold border border-transparent focus:border-purple-500 focus:outline-none transition-all max-w-[110px] xl:max-w-[140px] truncate shrink-1 ${
            theme === 'light'
              ? 'text-slate-900 hover:bg-slate-100 hover:border-slate-300 focus:bg-white'
              : 'text-white hover:bg-[#1a1b22] hover:border-[#30313c] focus:bg-[#1a1b22]'
          }`}
          title="Clique para renomear este projeto"
        />

        {/* Product Switcher Badge */}
        <button
          onClick={onOpenProductLibrary}
          className={`hidden lg:flex items-center gap-1.5 px-2 py-1 rounded-xl border text-[11px] font-medium transition-all group cursor-pointer shrink-0 ${
            theme === 'light'
              ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
              : 'bg-[#181920] hover:bg-[#20212b] border-[#2b2c36] text-gray-300'
          }`}
          title="Trocar Produto / Redimensionar Caneca, Squeeze, Almofada..."
        >
          <ProductIcon product={currentProduct} className="w-3.5 h-3.5 text-purple-500 shrink-0" />
          <span className={`font-semibold max-w-[90px] truncate ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
            {currentProduct?.name || 'Caneca'}
          </span>
          <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-purple-500 shrink-0" />
        </button>

        {/* Cloud Saved Indicator */}
        <div className={`hidden 2xl:flex items-center gap-1 text-[11px] font-medium shrink-0 ${
          theme === 'light' ? 'text-slate-500' : 'text-gray-400'
        }`} title="Todas as alterações são salvas automaticamente">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span>Salvo</span>
        </div>
      </div>

      {/* 2. Middle Group: Workspace View Modes & Sublimation Mirror */}
      <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
        <div className={`flex items-center p-0.5 rounded-xl border shrink-0 ${
          theme === 'light' ? 'bg-slate-100 border-slate-300' : 'bg-[#181920] border-[#2b2c36]'
        }`}>
          <button
            onClick={() => onChangeWorkspaceViewMode('canvas')}
            className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              workspaceViewMode === 'canvas'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : theme === 'light' ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
            title="Modo Foco 2D Canva"
          >
            <Square className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden md:inline">2D</span>
          </button>

          <button
            onClick={() => onChangeWorkspaceViewMode('split')}
            className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              workspaceViewMode === 'split'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : theme === 'light' ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
            title="Modo Tela Dividida (2D + 3D)"
          >
            <Columns className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden md:inline">Dividida</span>
          </button>

          <button
            onClick={() => onChangeWorkspaceViewMode('mockup')}
            className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              workspaceViewMode === 'mockup'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : theme === 'light' ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
            title="Simulador 3D HD em Tela Cheia"
          >
            <Box className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden md:inline">3D</span>
          </button>
        </div>

        {/* Sublimation Mirror Toggle */}
        <button
          onClick={onToggleMirrorSublimation}
          className={`flex items-center gap-1 px-2 py-1 rounded-xl border text-[11px] font-semibold transition-all cursor-pointer shrink-0 ${
            mirrorSublimation
              ? 'bg-amber-500/20 text-amber-500 border-amber-500/40'
              : theme === 'light' ? 'bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-900' : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
          }`}
          title="Espelhamento de estampa para papel sublimático (Ativar / Desativar)"
        >
          <FlipHorizontal className="w-3.5 h-3.5 shrink-0" />
          <span className="hidden sm:inline">ESPELHAR:</span>
          <span>{mirrorSublimation ? 'SIM' : 'NÃO'}</span>
        </button>
      </div>

      {/* 3. Right Group: Theme, Android, IA Studio, Export, Help, About */}
      <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
        {/* Light / Dark Theme Toggle Button */}
        {onToggleTheme && (
          <button
            onClick={onToggleTheme}
            className={`flex items-center gap-1 px-2 py-1 rounded-xl border transition-all cursor-pointer font-bold shrink-0 shadow-sm ${
              theme === 'light'
                ? 'bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200'
                : 'bg-purple-950/40 text-purple-300 border-purple-500/40 hover:bg-purple-900/60 hover:text-white'
            }`}
            title={`Alternar para Tema ${theme === 'light' ? 'Escuro' : 'Claro'}`}
          >
            {theme === 'light' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="hidden lg:inline text-[11px]">Claro</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span className="hidden lg:inline text-[11px]">Escuro</span>
              </>
            )}
          </button>
        )}

        {/* Android App Button */}
        {onOpenAndroidModal && (
          <button
            onClick={onOpenAndroidModal}
            className="flex items-center gap-1 px-2 py-1 font-bold rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-400 hover:text-emerald-300 transition-all cursor-pointer shadow-sm shrink-0"
            title="Abrir versão App Android (Instalação PWA & APK)"
          >
            <Smartphone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="hidden xl:inline text-[11px]">App Android</span>
          </button>
        )}

        {/* AI Studio Assistant Launcher */}
        <button
          onClick={onOpenAIPanel}
          className={`flex items-center gap-1 px-2 py-1 font-bold rounded-xl transition-all shadow-sm cursor-pointer shrink-0 ${
            theme === 'light'
              ? 'bg-purple-50 hover:bg-purple-100 border border-purple-300 text-purple-700'
              : 'bg-[#181920] hover:bg-[#20212b] border border-purple-500/40 text-purple-300 hover:text-purple-200'
          }`}
          title="Assistente IA Studio — Gerador de Artes e Ideias"
        >
          <Wand2 className="w-3.5 h-3.5 text-purple-500 shrink-0" />
          <span className="hidden lg:inline text-[11px]">IA Studio</span>
        </button>

        {/* Ergonomic Illuminated LED Print Button */}
        {onOpenPrinterSettings || onOpenPrintModal ? (
          <button
            onClick={() => {
              if (onOpenPrinterSettings) {
                onOpenPrinterSettings();
              } else if (onOpenPrintModal) {
                onOpenPrintModal();
              }
            }}
            className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:brightness-110 text-slate-950 font-black rounded-xl shadow-md shadow-emerald-500/25 transition-all cursor-pointer active:scale-95 shrink-0 text-xs uppercase tracking-wide border border-emerald-400/50"
            title="Central Unificada de Impressão e Configurações (RIP 1200 DPI, Perfis ICC, Spooler)"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-950 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-950"></span>
            </span>
            <Printer className="w-3.5 h-3.5 text-slate-950 shrink-0" />
            <span>Imprimir / Configurações</span>
          </button>
        ) : (
          <button
            onClick={onOpenExportModal}
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 hover:brightness-110 text-white font-extrabold rounded-xl shadow-md shadow-purple-600/20 transition-all cursor-pointer active:scale-95 shrink-0 text-xs"
            title="Baixar e Exportar Estampa em Alta Resolução"
          >
            <Share2 className="w-3.5 h-3.5 shrink-0" />
            <span>Exportar</span>
          </button>
        )}

        {/* Help Button */}
        {onOpenHelp && (
          <button
            onClick={onOpenHelp}
            className={`p-1.5 sm:px-2 py-1 rounded-xl flex items-center gap-1 text-xs font-bold transition-all cursor-pointer border shrink-0 ${
              theme === 'light'
                ? 'bg-amber-50 hover:bg-amber-100 text-amber-800 border-amber-300'
                : 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border-amber-500/30'
            }`}
            title="Ajuda — Tutorial Completo em 7 Passos"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="hidden xl:inline">Ajuda</span>
          </button>
        )}

        {/* About Button */}
        {onOpenAbout && (
          <button
            onClick={onOpenAbout}
            className={`p-1.5 sm:px-2 py-1 rounded-xl flex items-center gap-1 text-xs font-bold transition-all cursor-pointer border shrink-0 ${
              theme === 'light'
                ? 'bg-purple-50 hover:bg-purple-100 text-purple-800 border-purple-300'
                : 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border-purple-500/30'
            }`}
            title="Sobre o Sublim Studio"
          >
            <Info className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span className="hidden xl:inline">Sobre</span>
          </button>
        )}
      </div>
    </div>
  </header>
);
};
