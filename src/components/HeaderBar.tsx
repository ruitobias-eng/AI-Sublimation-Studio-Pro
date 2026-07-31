import React, { useState } from 'react';
import {
  Sparkles,
  RotateCcw,
  RotateCw,
  Share2,
  Printer,
  Keyboard,
  Sun,
  Moon,
  Box,
  Grid,
  Zap
} from 'lucide-react';
import { PrintableProduct } from '../types';
import { AppMenu } from './AppMenu';

interface HeaderBarProps {
  projectTitle: string;
  setProjectTitle: (title: string) => void;
  canvasWidth: number;
  canvasHeight: number;
  setCanvasSize: (w: number, h: number) => void;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onNewProject: () => void;
  onOpenTemplates: () => void;
  onExportPNG: () => void;
  onOpenAIConsole: () => void;
  onOpenShortcuts: () => void;
  onOpenPrintModal: () => void;
  onOpenGangModal: () => void;
  onOpenAndroidModal?: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  show3DViewport: boolean;
  setShow3DViewport: (val: boolean) => void;
  currentProduct: PrintableProduct;
  setProduct: (prod: PrintableProduct) => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  projectTitle,
  setProjectTitle,
  canvasWidth,
  canvasHeight,
  setCanvasSize,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onNewProject,
  onOpenTemplates,
  onExportPNG,
  onOpenAIConsole,
  onOpenShortcuts,
  onOpenPrintModal,
  onOpenGangModal,
  onOpenAndroidModal,
  darkMode,
  setDarkMode,
  show3DViewport,
  setShow3DViewport
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header
      className={`h-12 border-b px-3 flex items-center justify-between select-none z-40 text-xs shrink-0 shadow-md transition-colors ${
        darkMode ? 'bg-[#0B0F17] border-[#1F2937] text-slate-200' : 'bg-white border-slate-200 text-slate-800'
      }`}
    >
      {/* Left: Brand Logo & IDE Menus */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        {/* Logo Badge & Main Application Menu */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-slate-900/40 dark:bg-slate-800/80 border border-purple-500/40 px-2 py-1 rounded-xl shadow-md cursor-pointer hover:brightness-110 transition-all">
            <img src="/logo.png" alt="SublimStudio PRO" className="w-6 h-6 object-contain rounded-md" />
            <span className="text-[11px] sm:text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
              SublimStudio <span className="text-white bg-purple-600 px-1 py-0.5 rounded text-[9px] font-mono">PRO</span>
            </span>
          </div>

          <AppMenu
            theme={darkMode ? 'dark' : 'light'}
            onExport={onExportPNG}
            onNewProject={onNewProject}
            onOpenProject={() => {
              const input = document.createElement('input');
              input.type = 'file';
              input.accept = 'image/*,.json,.sublim';
              input.click();
            }}
            onIncludeStamp={() => {
              const input = document.createElement('input');
              input.type = 'file';
              input.accept = 'image/*';
              input.click();
            }}
            onSaveLayout={() => {
              const jsonStr = JSON.stringify({ title: projectTitle, date: new Date().toISOString() }, null, 2);
              const blob = new Blob([jsonStr], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `${projectTitle.replace(/\s+/g, '_')}.sublim`;
              a.click();
              URL.revokeObjectURL(url);
            }}
            onOpenSettings={onOpenShortcuts}
            onOpenAndroidModal={onOpenAndroidModal}
          />
        </div>

        {/* IDE Top Dropdown Menus */}
        <div
          className={`hidden lg:flex items-center gap-1 text-[11px] font-medium ${
            darkMode ? 'text-slate-300' : 'text-slate-700'
          }`}
        >
          {/* Menu: Exibir */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('exibir')}
              className={`px-2 py-1 rounded transition-colors ${
                darkMode ? 'hover:bg-[#1E293B]' : 'hover:bg-slate-100'
              }`}
            >
              Exibir
            </button>
            {activeDropdown === 'exibir' && (
              <div
                className={`absolute top-full left-0 mt-1 w-48 border rounded-xl shadow-2xl py-1 z-50 animate-fade-in ${
                  darkMode ? 'bg-[#161B26] border-[#2A3447]' : 'bg-white border-slate-200'
                }`}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => {
                    setShow3DViewport(!show3DViewport);
                    setActiveDropdown(null);
                  }}
                  className={`w-full text-left px-3 py-1.5 flex items-center justify-between ${
                    darkMode ? 'hover:bg-[#232D3F]' : 'hover:bg-slate-100'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Box className="w-3.5 h-3.5 text-purple-500" /> Simulador 3D HD
                  </span>
                  <span className="text-[10px] text-cyan-500 font-bold">{show3DViewport ? 'ON' : 'OFF'}</span>
                </button>
              </div>
            )}
          </div>

          {/* Menu: Pré-Prensa */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('prensa')}
              className={`px-2 py-1 rounded font-bold transition-colors ${
                darkMode ? 'hover:bg-[#1E293B] text-amber-400' : 'hover:bg-slate-100 text-amber-600'
              }`}
            >
              Pré-Prensa
            </button>
            {activeDropdown === 'prensa' && (
              <div
                className={`absolute top-full left-0 mt-1 w-56 border rounded-xl shadow-2xl py-1 z-50 animate-fade-in ${
                  darkMode ? 'bg-[#161B26] border-[#2A3447]' : 'bg-white border-slate-200'
                }`}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => {
                    onOpenPrintModal();
                    setActiveDropdown(null);
                  }}
                  className={`w-full text-left px-3 py-1.5 flex items-center gap-2 font-semibold ${
                    darkMode ? 'hover:bg-[#232D3F] text-amber-300' : 'hover:bg-slate-100 text-amber-600'
                  }`}
                >
                  <Printer className="w-3.5 h-3.5" /> Calculadora & Timer de Prensa
                </button>
                <button
                  onClick={() => {
                    onOpenGangModal();
                    setActiveDropdown(null);
                  }}
                  className={`w-full text-left px-3 py-1.5 flex items-center gap-2 font-semibold ${
                    darkMode ? 'hover:bg-[#232D3F] text-cyan-300' : 'hover:bg-slate-100 text-cyan-600'
                  }`}
                >
                  <Grid className="w-3.5 h-3.5" /> Nesting de Folhas (Gang Sheet)
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Undo / Redo */}
        <div
          className={`flex items-center border rounded-lg p-0.5 shrink-0 ${
            darkMode ? 'bg-[#131822] border-[#232D3F]' : 'bg-slate-100 border-slate-200'
          }`}
        >
          <button
            onClick={onUndo}
            disabled={!canUndo}
            className={`p-1.5 rounded disabled:opacity-30 cursor-pointer ${
              darkMode ? 'hover:bg-[#1E293B] text-slate-300' : 'hover:bg-slate-200 text-slate-700'
            }`}
            title="Desfazer (Ctrl+Z)"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onRedo}
            disabled={!canRedo}
            className={`p-1.5 rounded disabled:opacity-30 cursor-pointer ${
              darkMode ? 'hover:bg-[#1E293B] text-slate-300' : 'hover:bg-slate-200 text-slate-700'
            }`}
            title="Refazer (Ctrl+Y)"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Project Title Input */}
        <input
          type="text"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          className={`px-2 py-0.5 rounded text-xs font-bold border border-transparent focus:border-cyan-500/50 outline-none max-w-[130px] sm:max-w-[200px] truncate ${
            darkMode
              ? 'bg-transparent text-slate-100 hover:bg-[#131822] focus:bg-[#131822]'
              : 'bg-transparent text-slate-800 hover:bg-slate-100 focus:bg-slate-100'
          }`}
        />
      </div>

      {/* Right Controls: Presets, 3D Toggle, Shortcuts, Theme, Action Buttons */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        {/* Preset Selector */}
        <select
          value={`${canvasWidth}x${canvasHeight}`}
          onChange={(e) => {
            const [w, h] = e.target.value.split('x').map(Number);
            setCanvasSize(w, h);
          }}
          className={`border text-[11px] font-semibold rounded-lg px-2 py-1 outline-none hidden md:block ${
            darkMode ? 'bg-[#131822] border-[#232D3F] text-slate-300' : 'bg-slate-100 border-slate-300 text-slate-800'
          }`}
        >
          <option value="1080x1350">A3 Sublimático (1080x1350px)</option>
          <option value="1200x530">Caneca 11oz (204x90mm / 1200x530px)</option>
          <option value="1200x1600">Camiseta A3 (300x400mm / 1200x1600px)</option>
          <option value="1000x800">Squeeze Alumínio (200x160mm)</option>
          <option value="1200x1200">Almofada 40x40cm Quadrada</option>
        </select>

        {/* 3D Viewport Toggle */}
        <button
          onClick={() => setShow3DViewport(!show3DViewport)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-bold transition-all cursor-pointer ${
            show3DViewport
              ? 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-600/30'
              : darkMode
              ? 'bg-[#131822] border-[#232D3F] text-slate-400 hover:text-slate-200'
              : 'bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-900'
          }`}
          title="Alternar Visualizador 3D"
        >
          <Box className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Simulador 3D</span>
        </button>

        {/* AI Assistant Console Launch */}
        <button
          onClick={onOpenAIConsole}
          className="flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-white text-[11px] font-bold rounded-lg shadow-md cursor-pointer"
        >
          <Zap className="w-3.5 h-3.5 fill-current text-amber-300" />
          <span className="hidden sm:inline">IA Studio</span>
        </button>

        {/* Shortcuts Modal Button */}
        <button
          onClick={onOpenShortcuts}
          className={`p-1.5 border rounded-lg cursor-pointer hidden sm:block ${
            darkMode
              ? 'bg-[#131822] border-[#232D3F] hover:bg-[#1E293B] text-slate-400 hover:text-slate-200'
              : 'bg-slate-100 border-slate-300 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
          }`}
          title="Atalhos de Teclado"
        >
          <Keyboard className="w-4 h-4" />
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-1.5 border rounded-lg cursor-pointer hidden sm:block transition-all ${
            darkMode
              ? 'bg-[#131822] border-[#232D3F] hover:bg-[#1E293B] text-amber-400'
              : 'bg-amber-100 border-amber-300 hover:bg-amber-200 text-amber-600'
          }`}
          title="Alternar Tema Claro / Escuro"
        >
          {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Primary Sublimation / Export Button */}
        <button
          onClick={onExportPNG}
          className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:brightness-110 text-slate-950 font-black rounded-lg shadow-lg shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Exportar</span>
        </button>
      </div>
    </header>
  );
};
