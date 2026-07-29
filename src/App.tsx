import React, { useState, useRef, useEffect } from 'react';
import {
  Layer,
  ToolType,
  ShapeType,
  SublimationProduct,
  HistoryStep,
  WorkspaceViewMode,
} from './types';
import { PRODUCTS_LIBRARY } from './data/products';
import { TopBar } from './components/TopBar';
import { LeftToolbar } from './components/LeftToolbar';
import { CanvasArea } from './components/CanvasArea';
import { ThreeDViewport } from './components/ThreeDViewport';
import { LayerPanel } from './components/LayerPanel';
import { HistoryPanel } from './components/HistoryPanel';
import { RightPropertiesPanel } from './components/RightPropertiesPanel';
import { AIPanel } from './components/AIPanel';
import { ProductLibrary } from './components/ProductLibrary';
import { ExportModal } from './components/ExportModal';

import {
  Layers,
  History,
  Sliders,
  Sparkles,
  Box,
  ChevronRight,
  ChevronLeft,
  X
} from 'lucide-react';

export default function App() {
  // 1. Current Sublimation Product
  const [currentProduct, setCurrentProduct] = useState<SublimationProduct>(PRODUCTS_LIBRARY[0]);

  // Workspace View Mode: 'split' | 'canvas' | 'mockup'
  const [workspaceViewMode, setWorkspaceViewMode] = useState<WorkspaceViewMode>('split');
  const [show3DPip, setShow3DPip] = useState<boolean>(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // 2. Layers State Initialization
  const [layers, setLayers] = useState<Layer[]>([
    {
      id: 'layer-bg-sample',
      name: 'Fundo Sublimático Tropical',
      type: 'image',
      visible: true,
      locked: false,
      opacity: 100,
      blendMode: 'normal',
      x: 0,
      y: 0,
      width: 1180,
      height: 560,
      rotation: 0,
      content: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=1200&auto=format&fit=crop&q=80',
    },
    {
      id: 'layer-text-title',
      name: 'Texto Personalizado',
      type: 'text',
      visible: true,
      locked: false,
      opacity: 100,
      blendMode: 'normal',
      x: 290,
      y: 180,
      width: 600,
      height: 120,
      rotation: 0,
      content: 'MELHOR MÃE DO MUNDO',
      color: '#0f172a',
      fontSize: 48,
      fontFamily: 'Impact',
      fontWeight: 'bold',
      textAlign: 'center',
      textCurved: true,
      curveRadius: 140,
    },
    {
      id: 'layer-badge-shape',
      name: 'Selo de Qualidade',
      type: 'shape',
      shapeType: 'star',
      visible: true,
      locked: false,
      opacity: 90,
      blendMode: 'normal',
      x: 920,
      y: 120,
      width: 160,
      height: 160,
      rotation: 12,
      content: '',
      color: '#f59e0b',
    },
  ]);

  const [activeLayerId, setActiveLayerId] = useState<string | null>('layer-text-title');

  // 3. Tool & Properties State
  const [activeTool, setActiveTool] = useState<ToolType>('select');
  const [selectedShape, setSelectedShape] = useState<ShapeType>('rectangle');
  const [activeColor, setActiveColor] = useState<string>('#38bdf8');
  const [brushSize, setBrushSize] = useState<number>(12);

  // 4. Studio Settings
  const [mirrorSublimation, setMirrorSublimation] = useState<boolean>(false);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [showRulers, setShowRulers] = useState<boolean>(true);
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);

  // 5. Right Sidebar Tab state
  const [activeRightTab, setActiveRightTab] = useState<'3d' | 'properties' | 'layers' | 'history' | 'ai'>('3d');
  const [isRightSidebarCollapsed, setIsRightSidebarCollapsed] = useState(false);

  // 6. Modals Open State
  const [isProductLibraryOpen, setIsProductLibraryOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  // 7. Canvas element ref for 3D mapping & export
  const [renderedCanvas, setRenderedCanvas] = useState<HTMLCanvasElement | null>(null);
  const [canvasVersion, setCanvasVersion] = useState<number>(0);

  // 8. Undo/Redo History Stack
  const [historySteps, setHistorySteps] = useState<HistoryStep[]>([
    {
      id: 'hist-init',
      description: 'Criado Projeto ' + PRODUCTS_LIBRARY[0].name,
      toolName: 'Novo Projeto',
      timestamp: new Date(),
      layers: [...layers],
    },
  ]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);

  // Helper to record history step
  const pushHistoryStep = (description: string, toolName: string, updatedLayers: Layer[]) => {
    const newStep: HistoryStep = {
      id: 'hist-' + Date.now(),
      description,
      toolName,
      timestamp: new Date(),
      layers: [...updatedLayers],
    };

    const newHistory = [...historySteps.slice(0, currentHistoryIndex + 1), newStep];
    setHistorySteps(newHistory);
    setCurrentHistoryIndex(newHistory.length - 1);
  };

  const handleUndo = () => {
    if (currentHistoryIndex > 0) {
      const prevIdx = currentHistoryIndex - 1;
      setCurrentHistoryIndex(prevIdx);
      setLayers([...historySteps[prevIdx].layers]);
      setCanvasVersion((v) => v + 1);
    }
  };

  const handleRedo = () => {
    if (currentHistoryIndex < historySteps.length - 1) {
      const nextIdx = currentHistoryIndex + 1;
      setCurrentHistoryIndex(nextIdx);
      setLayers([...historySteps[nextIdx].layers]);
      setCanvasVersion((v) => v + 1);
    }
  };

  const jumpToHistoryStep = (index: number) => {
    setCurrentHistoryIndex(index);
    setLayers([...historySteps[index].layers]);
    setCanvasVersion((v) => v + 1);
  };

  // Layer Mutations
  const handleUpdateLayer = (updatedLayer: Layer) => {
    const newLayers = layers.map((l) => (l.id === updatedLayer.id ? updatedLayer : l));
    setLayers(newLayers);
    setCanvasVersion((v) => v + 1);
  };

  const handleAddLayer = (type: 'text' | 'shape' | 'image', customShape?: ShapeType) => {
    const shapeToUse = customShape || selectedShape;
    const newId = 'layer-' + Date.now();
    const newLayer: Layer = {
      id: newId,
      name:
        type === 'text'
          ? 'Novo Texto'
          : type === 'shape'
          ? `Forma ${shapeToUse}`
          : 'Nova Imagem',
      type: type,
      visible: true,
      locked: false,
      opacity: 100,
      blendMode: 'normal',
      x: 320,
      y: 180,
      width: type === 'text' ? 380 : 200,
      height: type === 'text' ? 80 : 200,
      rotation: 0,
      content: type === 'text' ? 'SEU TEXTO AQUI' : '',
      color: activeColor,
      shapeType: shapeToUse,
      fontSize: 36,
      fontFamily: 'Impact',
      fontWeight: 'bold',
    };

    const updatedLayers = [...layers, newLayer];
    setLayers(updatedLayers);
    setActiveLayerId(newId);
    pushHistoryStep(`Adicionou ${newLayer.name}`, type, updatedLayers);
    setCanvasVersion((v) => v + 1);
  };

  const handleSelectTool = (tool: ToolType) => {
    setActiveTool(tool);

    // If user clicked AI tools on lateral sidebar
    if (['vectorize', 'remove_bg', 'upscale', 'generative_fill', 'object_replace'].includes(tool)) {
      setActiveRightTab('ai');
      setIsRightSidebarCollapsed(false);
      if (activeLayerId && ['remove_bg', 'vectorize', 'upscale'].includes(tool)) {
        handleApplyAIToolToActiveLayer(tool as any);
      }
      return;
    }

    // If user clicked Text tool on lateral sidebar
    if (tool === 'text') {
      handleAddLayer('text');
      return;
    }

    // If user clicked Shapes tool on lateral sidebar
    if (tool === 'shapes') {
      handleAddLayer('shape', selectedShape);
      return;
    }

    // Stamp duplicates active layer
    if (tool === 'stamp') {
      if (activeLayerId) {
        handleDuplicateLayer(activeLayerId);
      }
      return;
    }

    // Crop toggles grid & rulers
    if (tool === 'crop') {
      setShowGrid((prev) => !prev);
      setShowRulers((prev) => !prev);
      return;
    }

    // Masks toggles text curvature or mask
    if (tool === 'masks') {
      if (activeLayerId) {
        const activeL = layers.find((l) => l.id === activeLayerId);
        if (activeL && activeL.type === 'text') {
          handleUpdateLayer({
            ...activeL,
            isCurved: !activeL.isCurved,
            curveRadius: activeL.curveRadius || 120,
          });
        }
      }
      return;
    }

    // Smart object adds a branded badge
    if (tool === 'smart_object') {
      handleAddLayer('shape', 'badge');
      return;
    }
  };

  const handleSelectShape = (shape: ShapeType) => {
    setSelectedShape(shape);
    handleAddLayer('shape', shape);
  };

  const handleDeleteLayer = (id: string) => {
    const updatedLayers = layers.filter((l) => l.id !== id);
    setLayers(updatedLayers);
    if (activeLayerId === id) setActiveLayerId(null);
    pushHistoryStep('Excluiu camada', 'Excluir', updatedLayers);
    setCanvasVersion((v) => v + 1);
  };

  // Keyboard Shortcuts: Delete/Backspace key deletes the selected layer/image
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement as HTMLElement | null;
      if (
        activeEl &&
        (activeEl.tagName === 'INPUT' ||
          activeEl.tagName === 'TEXTAREA' ||
          activeEl.tagName === 'SELECT' ||
          activeEl.isContentEditable)
      ) {
        return;
      }

      if ((e.key === 'Delete' || e.key === 'Backspace') && activeLayerId) {
        e.preventDefault();
        handleDeleteLayer(activeLayerId);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLayerId, layers]);

  const handleDuplicateLayer = (id: string) => {
    const target = layers.find((l) => l.id === id);
    if (!target) return;

    const dupLayer: Layer = {
      ...target,
      id: 'layer-' + Date.now(),
      name: target.name + ' (Cópia)',
      x: target.x + 20,
      y: target.y + 20,
    };

    const updatedLayers = [...layers, dupLayer];
    setLayers(updatedLayers);
    setActiveLayerId(dupLayer.id);
    pushHistoryStep('Duplicou camada ' + target.name, 'Duplicar', updatedLayers);
    setCanvasVersion((v) => v + 1);
  };

  const handleToggleVisibility = (id: string) => {
    const updatedLayers = layers.map((l) => (l.id === id ? { ...l, visible: !l.visible } : l));
    setLayers(updatedLayers);
    setCanvasVersion((v) => v + 1);
  };

  const handleToggleLock = (id: string) => {
    const updatedLayers = layers.map((l) => (l.id === id ? { ...l, locked: !l.locked } : l));
    setLayers(updatedLayers);
  };

  // AI Add Image to Canvas
  const handleAddAIGeneratedImageToCanvas = (imageUrl: string, title: string) => {
    const newId = 'layer-ai-' + Date.now();
    const newLayer: Layer = {
      id: newId,
      name: 'Estampa IA: ' + title,
      type: 'image',
      visible: true,
      locked: false,
      opacity: 100,
      blendMode: 'normal',
      x: 100,
      y: 50,
      width: 600,
      height: 400,
      rotation: 0,
      content: imageUrl,
    };

    const updated = [...layers, newLayer];
    setLayers(updated);
    setActiveLayerId(newId);
    pushHistoryStep('Gerou estampa por IA: ' + title, 'IA Studio', updated);
    setCanvasVersion((v) => v + 1);
  };

  // Apply AI Edit Tool (Background Remover, Vectorize, Upscale) to active layer
  const parseJsonResponse = async (response: Response) => {
    const text = await response.text();
    try {
      return JSON.parse(text);
    } catch {
      throw new Error(`Resposta inválida do servidor: ${text.substring(0, 300)}`);
    }
  };

  const handleApplyAIToolToActiveLayer = async (action: 'remove_bg' | 'vectorize' | 'upscale' | 'color_replace') => {
    const activeLayer = layers.find((l) => l.id === activeLayerId);
    if (!activeLayer || !activeLayer.content) return;

    try {
      const res = await fetch('/api/gemini/edit-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageBase64: activeLayer.content,
          action,
        }),
      });

      const data = await parseJsonResponse(res);
      if (data.imageUrl) {
        const updated = layers.map((l) =>
          l.id === activeLayer.id ? { ...l, content: data.imageUrl } : l
        );
        setLayers(updated);
        pushHistoryStep(`Aplica IA (${action}) na camada`, 'IA Tool', updated);
        setCanvasVersion((v) => v + 1);
      }
    } catch (e) {
      console.error('Error applying AI tool:', e);
    }
  };

  // Quick Preset Layout Templates
  const handleApplyPresetTemplate = (templateType: 'centered_logo' | 'full_wrap' | 'name_badge') => {
    if (templateType === 'centered_logo') {
      const updated = layers.map((l) =>
        l.id === activeLayerId ? { ...l, x: 400, y: 150, width: 300, height: 300 } : l
      );
      setLayers(updated);
      setCanvasVersion((v) => v + 1);
    }
  };

  const activeLayerObj = layers.find((l) => l.id === activeLayerId) || null;

  return (
    <div className={`flex flex-col w-screen h-screen overflow-hidden select-none font-sans transition-colors ${
      theme === 'light' ? 'bg-slate-100 text-slate-900 light' : 'bg-[#141415] text-white dark'
    }`}>
      {/* Top Bar */}
      <TopBar
        currentProduct={currentProduct}
        onOpenProductLibrary={() => setIsProductLibraryOpen(true)}
        onUndo={handleUndo}
        onRedo={handleRedo}
        canUndo={currentHistoryIndex > 0}
        canRedo={currentHistoryIndex < historySteps.length - 1}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        onOpenAIPanel={() => {
          setActiveRightTab('ai');
          setIsRightSidebarCollapsed(false);
        }}
        mirrorSublimation={mirrorSublimation}
        onToggleMirrorSublimation={() => setMirrorSublimation(!mirrorSublimation)}
        showGrid={showGrid}
        onToggleGrid={() => setShowGrid(!showGrid)}
        showRulers={showRulers}
        onToggleRulers={() => setShowRulers(!showRulers)}
        zoomLevel={zoomLevel}
        onZoomChange={setZoomLevel}
        workspaceViewMode={workspaceViewMode}
        onChangeWorkspaceViewMode={setWorkspaceViewMode}
        theme={theme}
        onToggleTheme={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
      />

      {/* Main Workspace Grid (Left Toolbar | Central Canvas or 3D Stage | Right Sidepanels) */}
      <div className="flex flex-1 w-full h-[calc(100vh-2.75rem)] overflow-hidden relative">
        {/* Left Canva Rail and Side Drawer */}
        <LeftToolbar
          activeTool={activeTool}
          onSelectTool={handleSelectTool}
          selectedShape={selectedShape}
          onSelectShape={handleSelectShape}
          activeColor={activeColor}
          onChangeColor={setActiveColor}
          brushSize={brushSize}
          onChangeBrushSize={setBrushSize}
          onAddLayer={handleAddLayer}
          currentProduct={currentProduct}
          onSelectProduct={setCurrentProduct}
          layers={layers}
          activeLayerId={activeLayerId}
          onSelectLayer={setActiveLayerId}
          onUpdateLayer={handleUpdateLayer}
          onDeleteLayer={handleDeleteLayer}
          onDuplicateLayer={handleDuplicateLayer}
          onAddAIGeneratedImage={handleAddAIGeneratedImageToCanvas}
          onOpenAIPanel={() => {
            setActiveRightTab('ai');
            setIsRightSidebarCollapsed(false);
          }}
          theme={theme}
        />

        {/* Center Main Editing Area based on Workspace View Mode */}
        <div className="flex-1 h-full flex relative overflow-hidden">
          {workspaceViewMode === 'mockup' ? (
            /* Mode 1: Fullscreen 3D Mockup Hero Viewport */
            <div className={`w-full h-full p-3 transition-colors ${
              theme === 'light' ? 'bg-slate-200' : 'bg-[#121214]'
            }`}>
              <ThreeDViewport
                product={currentProduct}
                canvasElement={renderedCanvas}
                canvasVersion={canvasVersion}
              />
            </div>
          ) : (
            /* Mode 2 & 3: 2D Canvas Stage (Split or Canvas Focus) */
            <div className="relative w-full h-full flex-1 flex">
              <CanvasArea
                product={currentProduct}
                layers={layers}
                activeLayerId={activeLayerId}
                onSelectLayer={setActiveLayerId}
                onUpdateLayer={handleUpdateLayer}
                onDeleteLayer={handleDeleteLayer}
                onDuplicateLayer={handleDuplicateLayer}
                onChangeColor={setActiveColor}
                activeTool={activeTool}
                selectedShape={selectedShape}
                activeColor={activeColor}
                brushSize={brushSize}
                mirrorSublimation={mirrorSublimation}
                showGrid={showGrid}
                showRulers={showRulers}
                onCanvasRendered={(canvas) => setRenderedCanvas(canvas)}
                theme={theme}
              />

              {/* Optional Floating PIP 3D Thumbnail Card when in 'canvas' focus mode */}
              {workspaceViewMode === 'canvas' && show3DPip && (
                <div className={`absolute bottom-16 right-6 w-72 h-56 border rounded-2xl shadow-2xl overflow-hidden z-30 flex flex-col backdrop-blur-md transition-all hover:scale-105 group ${
                  theme === 'light'
                    ? 'bg-white/95 border-slate-300 text-slate-800'
                    : 'bg-[#18181c]/95 border-[#38383c] text-gray-300'
                }`}>
                  <div className={`flex items-center justify-between px-3 py-1.5 border-b text-[11px] ${
                    theme === 'light' ? 'bg-slate-100 border-slate-300 text-slate-700' : 'bg-[#222225] border-[#38383c] text-gray-300'
                  }`}>
                    <span className="font-semibold text-purple-600 flex items-center gap-1.5">
                      <Box className="w-3.5 h-3.5" />
                      Preview 3D
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setWorkspaceViewMode('split')}
                        className="px-2 py-0.5 text-[10px] bg-purple-600 hover:bg-purple-500 text-white rounded font-medium cursor-pointer"
                        title="Expandir para Visualização Dividida"
                      >
                        Expandir
                      </button>
                      <button
                        onClick={() => setShow3DPip(false)}
                        className={`p-1 rounded cursor-pointer ${
                          theme === 'light' ? 'hover:bg-slate-200 text-slate-500 hover:text-slate-900' : 'hover:bg-white/10 text-gray-400 hover:text-white'
                        }`}
                        title="Fechar / Remover Canvas 3D"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 w-full h-full">
                    <ThreeDViewport
                      product={currentProduct}
                      canvasElement={renderedCanvas}
                      canvasVersion={canvasVersion}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Collapsible Dockable Sidepanels (Shown in Split or Mockup mode) */}
        {workspaceViewMode !== 'canvas' && (
          <aside
            className={`flex border-l transition-all duration-300 z-30 ${
              theme === 'light'
                ? 'bg-white border-slate-200 text-slate-800'
                : 'bg-[#1e1e20] border-[#2d2d30] text-gray-200'
            } ${
              isRightSidebarCollapsed ? 'w-10' : 'w-80 md:w-96'
            }`}
          >
            {/* Vertical Dock Tab Strip */}
            <div className={`w-10 border-r flex flex-col items-center py-2 gap-2 shrink-0 ${
              theme === 'light' ? 'bg-slate-100 border-slate-200 text-slate-600' : 'bg-[#18181a] border-[#2d2d30] text-gray-400'
            }`}>
              {/* Collapse / Expand Toggle */}
              <button
                onClick={() => setIsRightSidebarCollapsed(!isRightSidebarCollapsed)}
                className={`p-2 rounded-lg mb-2 cursor-pointer ${
                  theme === 'light' ? 'hover:bg-slate-200 hover:text-slate-900' : 'hover:text-white hover:bg-white/5'
                }`}
                title={isRightSidebarCollapsed ? 'Expandir Painel' : 'Recolher Painel'}
              >
                {isRightSidebarCollapsed ? (
                  <ChevronLeft className="w-4 h-4 text-purple-600" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-purple-600" />
                )}
              </button>

              <button
                onClick={() => {
                  setActiveRightTab('3d');
                  setIsRightSidebarCollapsed(false);
                }}
                className={`p-2 rounded-lg transition-colors relative cursor-pointer ${
                  activeRightTab === '3d' && !isRightSidebarCollapsed
                    ? 'bg-purple-600 text-white shadow'
                    : theme === 'light' ? 'hover:text-slate-900 hover:bg-slate-200' : 'hover:text-white hover:bg-white/5'
                }`}
                title="Miniatura 3D Interativa"
              >
                <Box className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setActiveRightTab('properties');
                  setIsRightSidebarCollapsed(false);
                }}
                className={`p-2 rounded-lg transition-colors relative cursor-pointer ${
                  activeRightTab === 'properties' && !isRightSidebarCollapsed
                    ? 'bg-purple-600 text-white shadow'
                    : theme === 'light' ? 'hover:text-slate-900 hover:bg-slate-200' : 'hover:text-white hover:bg-white/5'
                }`}
                title="Propriedades do Elemento"
              >
                <Sliders className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setActiveRightTab('layers');
                  setIsRightSidebarCollapsed(false);
                }}
                className={`p-2 rounded-lg transition-colors relative cursor-pointer ${
                  activeRightTab === 'layers' && !isRightSidebarCollapsed
                    ? 'bg-purple-600 text-white shadow'
                    : theme === 'light' ? 'hover:text-slate-900 hover:bg-slate-200' : 'hover:text-white hover:bg-white/5'
                }`}
                title="Gerenciador de Camadas"
              >
                <Layers className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setActiveRightTab('history');
                  setIsRightSidebarCollapsed(false);
                }}
                className={`p-2 rounded-lg transition-colors relative cursor-pointer ${
                  activeRightTab === 'history' && !isRightSidebarCollapsed
                    ? 'bg-purple-600 text-white shadow'
                    : theme === 'light' ? 'hover:text-slate-900 hover:bg-slate-200' : 'hover:text-white hover:bg-white/5'
                }`}
                title="Histórico de Ações"
              >
                <History className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setActiveRightTab('ai');
                  setIsRightSidebarCollapsed(false);
                }}
                className={`p-2 rounded-lg transition-colors relative cursor-pointer ${
                  activeRightTab === 'ai' && !isRightSidebarCollapsed
                    ? 'bg-purple-600 text-white shadow'
                    : 'text-purple-600 hover:text-purple-800 hover:bg-purple-100'
                }`}
                title="Estúdio Generativo por IA"
              >
                <Sparkles className="w-4 h-4 animate-pulse" />
              </button>
            </div>

            {/* Expanded Panel Body Container */}
            {!isRightSidebarCollapsed && (
              <div className="flex-1 h-full overflow-hidden flex flex-col">
                {activeRightTab === '3d' && (
                  <div className="w-full h-full p-2 flex flex-col">
                    <ThreeDViewport
                      product={currentProduct}
                      canvasElement={renderedCanvas}
                      canvasVersion={canvasVersion}
                    />
                  </div>
                )}

                {activeRightTab === 'properties' && (
                  <RightPropertiesPanel
                    activeLayer={activeLayerObj}
                    onUpdateLayer={handleUpdateLayer}
                    product={currentProduct}
                    onApplyPresetTemplate={handleApplyPresetTemplate}
                    onDeleteLayer={handleDeleteLayer}
                    onDuplicateLayer={handleDuplicateLayer}
                    theme={theme}
                  />
                )}

                {activeRightTab === 'layers' && (
                  <LayerPanel
                    layers={layers}
                    activeLayerId={activeLayerId}
                    onSelectLayer={setActiveLayerId}
                    onAddLayer={handleAddLayer}
                    onDeleteLayer={handleDeleteLayer}
                    onDuplicateLayer={handleDuplicateLayer}
                    onToggleVisibility={handleToggleVisibility}
                    onToggleLock={handleToggleLock}
                    onUpdateLayer={handleUpdateLayer}
                    onReorderLayers={(reordered) => {
                      setLayers(reordered);
                      setCanvasVersion((v) => v + 1);
                    }}
                    theme={theme}
                  />
                )}

                {activeRightTab === 'history' && (
                  <HistoryPanel
                    historySteps={historySteps}
                    currentHistoryIndex={currentHistoryIndex}
                    onJumpToHistoryStep={jumpToHistoryStep}
                    theme={theme}
                  />
                )}

                {activeRightTab === 'ai' && (
                  <AIPanel
                    product={currentProduct}
                    onAddAIGeneratedImageToCanvas={handleAddAIGeneratedImageToCanvas}
                    onApplyAIToolToActiveLayer={handleApplyAIToolToActiveLayer}
                    activeLayer={activeLayerObj}
                    theme={theme}
                  />
                )}
              </div>
            )}
          </aside>
        )}
      </div>

      {/* Modals */}
      <ProductLibrary
        isOpen={isProductLibraryOpen}
        onClose={() => setIsProductLibraryOpen(false)}
        selectedProduct={currentProduct}
        onSelectProduct={(prod) => {
          setCurrentProduct(prod);
          pushHistoryStep('Alterou produto para ' + prod.name, 'Produto', layers);
          setCanvasVersion((v) => v + 1);
        }}
      />

      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        product={currentProduct}
        canvasElement={renderedCanvas}
        mirrorSublimation={mirrorSublimation}
      />
    </div>
  );
}
