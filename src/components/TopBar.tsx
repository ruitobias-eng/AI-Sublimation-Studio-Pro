import React, { useState } from 'react';
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
  Moon,
} from 'lucide-react';
import { SublimationProduct, WorkspaceViewMode } from '../types';

interface TopBarProps {
  currentProduct: SublimationProduct;
  onOpenProductLibrary: () => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  onOpenExportModal: () => void;
  onOpenAIPanel: () => void;
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
}

export const TopBar: React.FC<TopBarProps> = ({
  currentProduct,
  onOpenProductLibrary,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  onOpenExportModal,
  onOpenAIPanel,
  mirrorSublimation,
  onToggleMirrorSublimation,
  workspaceViewMode,
  onChangeWorkspaceViewMode,
  theme = 'dark',
  onToggleTheme,
}) => {
  const [projectName, setProjectName] = useState<string>('Arte Sublimação - Caneca 325ml');

  return (
    <header className={`h-12 border-b flex items-center justify-between px-3 select-none text-xs z-40 shadow-md transition-colors ${
      theme === 'light'
        ? 'bg-white border-slate-200 text-slate-800'
        : 'bg-[#0e0f14] border-[#23242c] text-gray-200'
    }`}>
      {/* 1. Canva Logo & Project Title */}
      <div className="flex items-center gap-3">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 px-2.5 py-1 rounded-xl shadow-md cursor-pointer hover:brightness-110 transition-all">
          <Sparkles className="w-4 h-4 text-white animate-pulse" />
          <span className="font-extrabold tracking-wide text-white text-xs">
            CANVA STUDIO
          </span>
        </div>

        {/* Undo / Redo */}
        <div className={`flex items-center rounded-xl p-0.5 border ${
          theme === 'light' ? 'bg-slate-100 border-slate-300' : 'bg-[#181920] border-[#2b2c36]'
        }`}>
          <button
            onClick={onUndo}
            disabled={!canUndo}
            className={`p-1.5 disabled:opacity-30 rounded-lg transition-colors cursor-pointer ${
              theme === 'light' ? 'text-slate-700 hover:text-black hover:bg-slate-200' : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
            title="Desfazer (Ctrl+Z)"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onRedo}
            disabled={!canRedo}
            className={`p-1.5 disabled:opacity-30 rounded-lg transition-colors cursor-pointer ${
              theme === 'light' ? 'text-slate-700 hover:text-black hover:bg-slate-200' : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
            title="Refazer (Ctrl+Y)"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Cloud Saved Indicator */}
        <div className={`hidden sm:flex items-center gap-1.5 text-[11px] font-medium ${
          theme === 'light' ? 'text-slate-500' : 'text-gray-400'
        }`}>
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          <span>Salvo nas nuvens</span>
        </div>

        <div className={`hidden md:block w-[1px] h-4 ${theme === 'light' ? 'bg-slate-200' : 'bg-[#23242c]'}`}></div>

        {/* Project Name Editable Input */}
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className={`bg-transparent px-2 py-1 rounded-lg text-xs font-semibold border border-transparent focus:border-purple-500 focus:outline-none transition-all max-w-[180px] sm:max-w-[240px] truncate ${
            theme === 'light'
              ? 'text-slate-900 hover:bg-slate-100 hover:border-slate-300 focus:bg-white'
              : 'text-white hover:bg-[#1a1b22] hover:border-[#30313c] focus:bg-[#1a1b22]'
          }`}
          title="Clique para renomear este projeto"
        />

        {/* Product Resize Badge */}
        <button
          onClick={onOpenProductLibrary}
          className={`hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-xl border text-[11px] font-medium transition-all group cursor-pointer ${
            theme === 'light'
              ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
              : 'bg-[#181920] hover:bg-[#20212b] border-[#2b2c36] text-gray-300'
          }`}
          title="Trocar Produto / Redimensionar"
        >
          <span className="text-purple-600 font-bold">Redimensionar:</span>
          <span className={`font-semibold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{currentProduct.name}</span>
          <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-purple-600" />
        </button>
      </div>

      {/* 2. Middle Workspace View Mode Controls */}
      <div className="flex items-center gap-2">
        <div className={`flex items-center p-0.5 rounded-xl border ${
          theme === 'light' ? 'bg-slate-100 border-slate-300' : 'bg-[#181920] border-[#2b2c36]'
        }`}>
          <button
            onClick={() => onChangeWorkspaceViewMode('canvas')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              workspaceViewMode === 'canvas'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : theme === 'light' ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
            title="Modo Foco 2D Canva"
          >
            <Square className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Design 2D</span>
          </button>

          <button
            onClick={() => onChangeWorkspaceViewMode('split')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              workspaceViewMode === 'split'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : theme === 'light' ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
            title="Modo Tela Dividida (2D + 3D)"
          >
            <Columns className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Tela Dividida</span>
          </button>

          <button
            onClick={() => onChangeWorkspaceViewMode('mockup')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              workspaceViewMode === 'mockup'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : theme === 'light' ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
            title="Simulador 3D HD em Tela Cheia"
          >
            <Box className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Simulador 3D</span>
          </button>
        </div>

        {/* Sublimation Mirror Badge */}
        <button
          onClick={onToggleMirrorSublimation}
          className={`hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-xl border text-[11px] font-semibold transition-all cursor-pointer ${
            mirrorSublimation
              ? 'bg-amber-500/20 text-amber-600 border-amber-500/40'
              : theme === 'light' ? 'bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-900' : 'bg-white/5 border-white/10 text-gray-400 hover:text-gray-200'
          }`}
          title="Espelhamento de estampa para papel sublimático"
        >
          <FlipHorizontal className="w-3.5 h-3.5" />
          <span>ESPELHAR: {mirrorSublimation ? 'SIM' : 'NÃO'}</span>
        </button>
      </div>

      {/* 3. Canva Theme, Share & Download Buttons */}
      <div className="flex items-center gap-2">
        {/* Light / Dark Theme Toggle Button */}
        {onToggleTheme && (
          <button
            onClick={onToggleTheme}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border transition-all cursor-pointer font-semibold ${
              theme === 'light'
                ? 'bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100'
                : 'bg-[#181920] text-purple-300 border-[#2b2c36] hover:bg-[#20212b] hover:text-purple-200'
            }`}
            title={`Alternar para Tema ${theme === 'light' ? 'Escuro' : 'Claro'}`}
          >
            {theme === 'light' ? (
              <>
                <Sun className="w-4 h-4 text-amber-500" />
                <span className="hidden lg:inline text-[11px]">Tema Claro</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-purple-400" />
                <span className="hidden lg:inline text-[11px]">Tema Escuro</span>
              </>
            )}
          </button>
        )}

        {/* AI Studio Assistant Launcher */}
        <button
          onClick={onOpenAIPanel}
          className={`flex items-center gap-1.5 px-3 py-1.5 font-bold rounded-xl transition-all shadow-sm cursor-pointer ${
            theme === 'light'
              ? 'bg-purple-50 hover:bg-purple-100 border border-purple-300 text-purple-700'
              : 'bg-[#181920] hover:bg-[#20212b] border border-purple-500/40 text-purple-300 hover:text-purple-200'
          }`}
        >
          <Wand2 className="w-3.5 h-3.5 text-purple-500" />
          <span className="hidden sm:inline">IA Studio</span>
        </button>

        {/* Canva Primary Action Button */}
        <button
          onClick={onOpenExportModal}
          className="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 hover:brightness-110 text-white font-extrabold rounded-xl shadow-lg shadow-purple-600/25 transition-all cursor-pointer active:scale-95"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Baixar / Exportar</span>
        </button>
      </div>
    </header>
  );
};
