import React, { useState, useRef, useEffect } from 'react';
import {
  Layer,
  ToolType,
  ShapeType,
  SublimationProduct,
  HistoryStep,
  WorkspaceViewMode,
  TextWarpStyle,
} from './types';
import { PRODUCTS_LIBRARY } from './data/products';
import { TopBar } from './components/TopBar';
import { LeftToolBar } from './components/LeftToolbar';
import { CanvasArea } from './components/CanvasArea';
import { ThreeDViewport } from './components/ThreeDViewport';
import { LayerPanel } from './components/LayerPanel';
import { HistoryPanel } from './components/HistoryPanel';
import { RightPropertiesPanel } from './components/RightPropertiesPanel';
import { AIPanel } from './components/AIPanel';
import { ProductLibrary } from './components/ProductLibrary';
import { ExportModal } from './components/ExportModal';
import { AndroidAppModal } from './components/AndroidAppModal';
import { HelpModal } from './components/HelpModal';
import { AboutModal } from './components/AboutModal';
import { PrintSublimationModal } from './components/PrintSublimationModal';
import { PrinterSettingsModal } from './components/printer-settings';
import { AndroidMobileNav } from './components/AndroidMobileNav';
import { MD3Snackbar, SnackbarMessage } from './components/MD3Snackbar';
import { MD3BottomSheet } from './components/MD3BottomSheet';
import { AuthModal, UserSession } from './components/AuthModal';

import {
  Layers,
  History,
  Sliders,
  Sparkles,
  Box,
  ChevronRight,
  ChevronLeft,
  X,
  FolderPlus,
  FileText,
  Save,
  Download,
  Settings as SettingsIcon,
  Check,
} from 'lucide-react';

export default function App() {
  // 1. Current Sublimation Product & Project Info
  const [currentProduct, setCurrentProduct] = useState<SublimationProduct>(PRODUCTS_LIBRARY[0]);
  const [projectName, setProjectName] = useState<string>('Arte Sublimação - Caneca 325ml');

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
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isPrinterSettingsOpen, setIsPrinterSettingsOpen] = useState(false);
  const [isAndroidModalOpen, setIsAndroidModalOpen] = useState(false);
  const [isAndroidSimulated, setIsAndroidSimulated] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserSession | null>(() => {
    try {
      const saved = localStorage.getItem('sublimstudio_user_session');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {
      name: 'Usuário',
      email: 'usuario@meudominio.com',
      isPro: true,
    };
  });

  const handleLogin = (user: UserSession) => {
    setCurrentUser(user);
    try {
      localStorage.setItem('sublimstudio_user_session', JSON.stringify(user));
    } catch (e) {}
    showSnackbar(`Bem-vindo, ${user.name}! Login efetuado com sucesso.`, 'success');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('sublimstudio_user_session');
    } catch (e) {}
    showSnackbar('Sua sessão foi encerrada com sucesso.', 'info');
  };
  const [deferredInstallPrompt, setDeferredInstallPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  // MD3 Snackbar & Mobile Bottom Sheet state
  const [snackbar, setSnackbar] = useState<SnackbarMessage | null>(null);
  const [mobileBottomSheetTab, setMobileBottomSheetTab] = useState<'layers' | 'properties' | 'ai' | null>(null);

  const showSnackbar = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setSnackbar({ id: 'sb-' + Date.now(), message, type });
    if ('vibrate' in navigator) {
      try {
        navigator.vibrate(15);
      } catch (e) {
        // ignore
      }
    }
  };

  // Android Camera Input Ref
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleTriggerCamera = () => {
    cameraInputRef.current?.click();
  };

  // Handlers for App Menu
  const handleConfirmNewProject = (type: 'blank' | 'sample' | 'restore') => {
    if (type === 'restore') {
      try {
        const savedRaw = localStorage.getItem('sublimstudio_saved_project');
        if (savedRaw) {
          const data = JSON.parse(savedRaw);
          if (data && Array.isArray(data.layers)) {
            setLayers(data.layers);
            if (data.projectName) setProjectName(data.projectName);
            if (data.product) {
              const foundProduct = PRODUCTS_LIBRARY.find((p) => p.id === data.product.id) || data.product;
              setCurrentProduct(foundProduct);
            }
            if (typeof data.mirrorSublimation === 'boolean') setMirrorSublimation(data.mirrorSublimation);
            if (typeof data.showGrid === 'boolean') setShowGrid(data.showGrid);
            if (typeof data.showRulers === 'boolean') setShowRulers(data.showRulers);
            setActiveLayerId(data.layers.length > 0 ? data.layers[data.layers.length - 1].id : null);

            const initStep: HistoryStep = {
              id: 'hist-restore-' + Date.now(),
              description: 'Restaurado do Backup Salvo',
              toolName: 'Restaurar Projeto',
              timestamp: new Date(),
              layers: data.layers,
            };
            setHistorySteps([initStep]);
            setCurrentHistoryIndex(0);
            setCanvasVersion((v) => v + 1);
            setIsNewProjectModalOpen(false);
            showSnackbar('Rascunho do projeto restaurado com sucesso!', 'success');
            return;
          }
        }
      } catch (e) {
        console.error('Erro ao restaurar rascunho:', e);
      }
    }

    let newLayers: Layer[] = [];

    if (type === 'sample') {
      newLayers = [
        {
          id: 'layer-bg-' + Date.now(),
          name: 'Fundo Neutro',
          type: 'shape',
          shapeType: 'rectangle',
          visible: true,
          locked: false,
          opacity: 100,
          blendMode: 'normal',
          x: 0,
          y: 0,
          width: currentProduct.printWidthMm ? currentProduct.printWidthMm * 5 : 1000,
          height: currentProduct.printHeightMm ? currentProduct.printHeightMm * 5 : 500,
          rotation: 0,
          content: '',
          color: '#f8fafc',
        },
        {
          id: 'layer-text-' + Date.now(),
          name: 'Texto do Projeto',
          type: 'text',
          visible: true,
          locked: false,
          opacity: 100,
          blendMode: 'normal',
          x: 200,
          y: 150,
          width: 500,
          height: 100,
          rotation: 0,
          content: 'MEU NOVO PROJETO',
          color: activeColor || '#38bdf8',
          fontSize: 44,
          fontFamily: 'Impact',
          fontWeight: 'bold',
          textAlign: 'center',
        },
      ];
    }

    setLayers(newLayers);
    setActiveLayerId(newLayers.length > 0 ? newLayers[newLayers.length - 1].id : null);
    const newName = 'Novo Projeto - ' + currentProduct.name;
    setProjectName(newName);

    const initStep: HistoryStep = {
      id: 'hist-new-' + Date.now(),
      description: 'Criado ' + (type === 'blank' ? 'Projeto Limpo' : 'Projeto com Modelo'),
      toolName: 'Novo Projeto',
      timestamp: new Date(),
      layers: newLayers,
    };
    setHistorySteps([initStep]);
    setCurrentHistoryIndex(0);
    setCanvasVersion((v) => v + 1);
    setIsNewProjectModalOpen(false);
    showSnackbar(`Novo projeto "${newName}" iniciado!`, 'success');
  };

  // File input refs for Abrir Projeto e Incluir Estampa
  const projectInputRef = useRef<HTMLInputElement>(null);
  const stampInputRef = useRef<HTMLInputElement>(null);

  const handleOpenProjectClick = () => {
    if (projectInputRef.current) {
      projectInputRef.current.value = '';
      projectInputRef.current.click();
    }
  };

  const handleIncludeStampClick = () => {
    if (stampInputRef.current) {
      stampInputRef.current.value = '';
      stampInputRef.current.click();
    }
  };

  const handleIncludeStampFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const resultUrl = event.target?.result as string;
      if (resultUrl) {
        const stampName = file.name.replace(/\.[^/.]+$/, '');
        const newId = 'layer-stamp-' + Date.now();
        const newLayer: Layer = {
          id: newId,
          name: 'Estampa: ' + stampName,
          type: 'image',
          visible: true,
          locked: false,
          opacity: 100,
          blendMode: 'normal',
          x: 100,
          y: 60,
          width: 500,
          height: 380,
          rotation: 0,
          content: resultUrl,
        };

        const updatedLayers = [...layers, newLayer];
        setLayers(updatedLayers);
        setActiveLayerId(newId);
        pushHistoryStep('Incluiu Estampa: ' + stampName, 'Incluir Estampa', updatedLayers);
        setCanvasVersion((v) => v + 1);
        showSnackbar(`Estampa "${stampName}" adicionada ao canvas!`, 'success');
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const handleOpenProjectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const filename = file.name.toLowerCase();

    // If file is an image, import as stamp/image layer directly
    if (filename.endsWith('.png') || filename.endsWith('.jpg') || filename.endsWith('.jpeg') || filename.endsWith('.webp') || filename.endsWith('.svg') || file.type.startsWith('image/')) {
      handleIncludeStampFile(e);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        const data = JSON.parse(content);
        if (data && (Array.isArray(data.layers) || Array.isArray(data))) {
          const loadedLayers: Layer[] = Array.isArray(data.layers) ? data.layers : data;
          setLayers(loadedLayers);

          const loadedName = data.projectName || file.name.replace(/\.[^/.]+$/, '');
          setProjectName(loadedName);

          if (data.product) {
            const foundProduct = PRODUCTS_LIBRARY.find((p) => p.id === data.product.id) || data.product;
            setCurrentProduct(foundProduct);
          }

          if (typeof data.mirrorSublimation === 'boolean') {
            setMirrorSublimation(data.mirrorSublimation);
          }
          if (typeof data.showGrid === 'boolean') {
            setShowGrid(data.showGrid);
          }
          if (typeof data.showRulers === 'boolean') {
            setShowRulers(data.showRulers);
          }

          setActiveLayerId(loadedLayers.length > 0 ? loadedLayers[loadedLayers.length - 1].id : null);

          // Reset history stack cleanly for the newly opened project
          const initStep: HistoryStep = {
            id: 'hist-open-' + Date.now(),
            description: 'Abriu Projeto: ' + loadedName,
            toolName: 'Abrir Projeto',
            timestamp: new Date(),
            layers: loadedLayers,
          };
          setHistorySteps([initStep]);
          setCurrentHistoryIndex(0);
          setCanvasVersion((v) => v + 1);

          // Local auto-save backup
          try {
            localStorage.setItem('sublimstudio_saved_project', JSON.stringify(data));
          } catch (err) {
            // ignore
          }

          showSnackbar(`Projeto "${loadedName}" aberto com sucesso!`, 'success');
        } else {
          showSnackbar('Formato de arquivo inválido. Selecione um arquivo .sublimation ou .json válido.', 'error');
        }
      } catch (err) {
        console.error('Erro ao abrir arquivo de projeto:', err);
        showSnackbar('Não foi possível ler o projeto. Verifique o arquivo selecionado.', 'error');
      }
    };

    reader.onerror = () => {
      showSnackbar('Erro ao ler arquivo do dispositivo.', 'error');
    };

    reader.readAsText(file);
    e.target.value = '';
  };

  const handleSaveLayout = () => {
    try {
      const projectData = {
        version: '1.0',
        projectName: projectName || 'Arte_Sublimacao',
        product: currentProduct,
        layers,
        mirrorSublimation,
        showGrid,
        showRulers,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const jsonString = JSON.stringify(projectData, null, 2);

      // Save to localStorage as quick auto-save draft
      try {
        localStorage.setItem('sublimstudio_saved_project', jsonString);
      } catch (e) {
        // quota exceeded
      }

      // Download .sublimation file using Blob and ObjectURL
      const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const downloadAnchor = document.createElement('a');
      downloadAnchor.href = url;
      const cleanFileName = (projectName || 'arte_sublimacao')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9_-]/gi, '_');
      downloadAnchor.download = `${cleanFileName}.sublimation`;
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      document.body.removeChild(downloadAnchor);

      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 2000);

      showSnackbar(`Projeto "${projectName}" salvo com sucesso! (.sublimation)`, 'success');
    } catch (err) {
      console.error('Erro ao salvar projeto:', err);
      showSnackbar('Erro ao gerar arquivo de salvamento do projeto.', 'error');
    }
  };

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

  const handleAddLayer = (
    type: 'text' | 'shape' | 'image',
    customShape?: ShapeType,
    defaultTextWarpStyle?: TextWarpStyle,
    customFontFamily?: string
  ) => {
    const shapeToUse = customShape || selectedShape;
    const newId = 'layer-' + Date.now();
    const isSpaciousStyle =
      defaultTextWarpStyle &&
      [
        'circle',
        'logo_circle',
        'seal',
        'heart',
        'emblem',
        'spiral',
        'star',
        'diamond',
        'oval',
        'vertical_ellipse',
        'stamp_style',
        'ribbon',
      ].includes(defaultTextWarpStyle);

    const isLineType =
      shapeToUse?.includes('line') ||
      shapeToUse?.includes('curve') ||
      shapeToUse?.includes('scribble') ||
      shapeToUse?.includes('connector') ||
      shapeToUse?.includes('elbow');

    const newLayer: Layer = {
      id: newId,
      name:
        type === 'text'
          ? defaultTextWarpStyle
            ? `Texto (${defaultTextWarpStyle})`
            : 'Novo Texto'
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
      width: type === 'text' ? (isSpaciousStyle ? 320 : 380) : 200,
      height: type === 'text' ? (isSpaciousStyle ? 260 : 120) : 200,
      rotation: 0,
      content: type === 'text' ? 'SUBLIMAÇÃO' : '',
      color: activeColor || '#38bdf8',
      strokeColor: activeColor || '#38bdf8',
      strokeWidth: type === 'shape' ? (isLineType ? 6 : 2) : 0,
      shapeType: shapeToUse,
      fontSize: 36,
      fontFamily: customFontFamily || 'Impact',
      fontWeight: 'bold',
      textWarpStyle: defaultTextWarpStyle || 'straight',
      textCurved: defaultTextWarpStyle ? defaultTextWarpStyle !== 'straight' : false,
      warpIntensity: 50,
      curveRadius: 120,
    };

    const updatedLayers = [...layers, newLayer];
    setLayers(updatedLayers);
    setActiveLayerId(newId);
    pushHistoryStep(`Adicionou ${newLayer.name}`, type, updatedLayers);
    setCanvasVersion((v) => v + 1);
  };

  const handleAddVectorTextPreset = (preset: {
    title: string;
    content: string;
    fontFamily: string;
    warpStyle: TextWarpStyle;
    warpIntensity: number;
    color: string;
    strokeColor?: string;
    strokeWidth?: number;
    shadowColor?: string;
    shadowBlur?: number;
    width?: number;
    height?: number;
    fontSize?: number;
  }) => {
    const newId = 'layer-' + Date.now();
    const newLayer: Layer = {
      id: newId,
      name: `Vetor: ${preset.title}`,
      type: 'text',
      visible: true,
      locked: false,
      opacity: 100,
      blendMode: 'normal',
      x: 300,
      y: 180,
      width: preset.width || 360,
      height: preset.height || 220,
      rotation: 0,
      content: preset.content,
      color: preset.color,
      strokeColor: preset.strokeColor,
      strokeWidth: preset.strokeWidth || 0,
      shadowColor: preset.shadowColor,
      shadowBlur: preset.shadowBlur || 0,
      fontSize: preset.fontSize || 38,
      fontFamily: preset.fontFamily,
      fontWeight: 'bold',
      textWarpStyle: preset.warpStyle,
      textCurved: preset.warpStyle !== 'straight',
      warpIntensity: preset.warpIntensity,
      curveRadius: 120,
    };

    const updatedLayers = [...layers, newLayer];
    setLayers(updatedLayers);
    setActiveLayerId(newId);
    pushHistoryStep(`Adicionou Vetor ${preset.title}`, 'text', updatedLayers);
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

  const handleChangeColor = (newColor: string) => {
    setActiveColor(newColor);
    if (activeLayerId) {
      const activeL = layers.find((l) => l.id === activeLayerId);
      if (activeL) {
        handleUpdateLayer({
          ...activeL,
          color: newColor,
          strokeColor: activeL.type === 'shape' ? (activeL.strokeColor || newColor) : activeL.strokeColor,
        });
      }
    }
  };

  const handleSelectShape = (shape: ShapeType) => {
    setSelectedShape(shape);
    const activeL = layers.find((l) => l.id === activeLayerId);
    if (activeL && activeL.type === 'shape') {
      const isLineType =
        shape?.includes('line') ||
        shape?.includes('curve') ||
        shape?.includes('scribble') ||
        shape?.includes('connector') ||
        shape?.includes('elbow');
      handleUpdateLayer({
        ...activeL,
        shapeType: shape,
        name: `Forma ${shape}`,
        strokeWidth: isLineType ? (activeL.strokeWidth || 6) : (activeL.strokeWidth ?? 2),
      });
    } else {
      handleAddLayer('shape', shape);
    }
  };

  const handleDeleteLayer = (id: string) => {
    const updatedLayers = layers.filter((l) => l.id !== id);
    setLayers(updatedLayers);
    if (activeLayerId === id) setActiveLayerId(null);
    pushHistoryStep('Excluiu camada', 'Excluir', updatedLayers);
    setCanvasVersion((v) => v + 1);
  };

  // Global Keyboard Shortcuts: Ctrl+P (Print RIP), Ctrl+E (Export), Ctrl+N (New), Ctrl+O (Open), Ctrl+S (Save), Ctrl+Z/Y (Undo/Redo), Delete, Arrow Keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement as HTMLElement | null;
      const isInput =
        activeEl &&
        (activeEl.tagName === 'INPUT' ||
          activeEl.tagName === 'TEXTAREA' ||
          activeEl.tagName === 'SELECT' ||
          activeEl.isContentEditable);

      const isCtrlOrCmd = e.ctrlKey || e.metaKey;

      if (isInput) {
        // Allow default input typing behavior; only catch Ctrl+S / Ctrl+P if desired
        if (isCtrlOrCmd) {
          const keyLower = e.key.toLowerCase();
          if (keyLower === 's') {
            e.preventDefault();
            handleSaveLayout();
          } else if (keyLower === 'p') {
            e.preventDefault();
            setIsPrintModalOpen(true);
          }
        }
        return;
      }

      if (isCtrlOrCmd) {
        const keyLower = e.key.toLowerCase();
        if (keyLower === 'p') {
          e.preventDefault();
          setIsPrintModalOpen(true);
          return;
        }
        if (keyLower === 'e') {
          e.preventDefault();
          setIsExportModalOpen(true);
          return;
        }
        if (keyLower === 'n') {
          e.preventDefault();
          setIsNewProjectModalOpen(true);
          return;
        }
        if (keyLower === 'o') {
          e.preventDefault();
          handleOpenProjectClick();
          return;
        }
        if (keyLower === 's') {
          e.preventDefault();
          handleSaveLayout();
          return;
        }
        if (keyLower === 'z') {
          e.preventDefault();
          if (e.shiftKey) {
            handleRedo();
          } else {
            handleUndo();
          }
          return;
        }
        if (keyLower === 'y') {
          e.preventDefault();
          handleRedo();
          return;
        }
      }

      if (isInput) return;

      if ((e.key === 'Delete' || e.key === 'Backspace') && activeLayerId) {
        e.preventDefault();
        handleDeleteLayer(activeLayerId);
        return;
      }

      // Arrow keys nudge active layer
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key) && activeLayerId) {
        const activeLayer = layers.find((l) => l.id === activeLayerId);
        if (activeLayer && !activeLayer.locked) {
          e.preventDefault();
          const step = e.shiftKey ? 10 : 1;
          let dx = 0;
          let dy = 0;
          if (e.key === 'ArrowLeft') dx = -step;
          if (e.key === 'ArrowRight') dx = step;
          if (e.key === 'ArrowUp') dy = -step;
          if (e.key === 'ArrowDown') dy = step;

          handleUpdateLayer({
            ...activeLayer,
            x: activeLayer.x + dx,
            y: activeLayer.y + dy,
          });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLayerId, layers, currentHistoryIndex, historySteps]);

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

      const data = await res.json();
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
    <div className={`flex flex-col w-full h-screen h-[100dvh] overflow-hidden select-none font-sans transition-colors ${
      theme === 'light' ? 'bg-slate-100 text-slate-900 light' : 'bg-[#141415] text-white dark'
    }`}>
      {/* Hidden file inputs for opening projects, including stamps, and camera capture */}
      <input
        ref={projectInputRef}
        type="file"
        accept=".sublimation,.json,image/*"
        onChange={handleOpenProjectFile}
        className="hidden"
      />
      <input
        ref={stampInputRef}
        type="file"
        accept="image/*,.svg"
        onChange={handleIncludeStampFile}
        className="hidden"
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleIncludeStampFile}
        className="hidden"
      />

      {/* Top Bar */}
      <TopBar
        currentProduct={currentProduct}
        onOpenProductLibrary={() => setIsProductLibraryOpen(true)}
        onUndo={handleUndo}
        onRedo={handleRedo}
        canUndo={currentHistoryIndex > 0}
        canRedo={currentHistoryIndex < historySteps.length - 1}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        onOpenPrintModal={() => setIsPrintModalOpen(true)}
        onOpenAIPanel={() => {
          setActiveRightTab('ai');
          setIsRightSidebarCollapsed(false);
        }}
        onOpenAndroidModal={() => setIsAndroidModalOpen(true)}
        onOpenHelp={() => setIsHelpModalOpen(true)}
        onOpenAbout={() => setIsAboutModalOpen(true)}
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
        onNewProject={() => setIsNewProjectModalOpen(true)}
        onOpenProject={handleOpenProjectClick}
        onIncludeStamp={handleIncludeStampClick}
        onSaveLayout={handleSaveLayout}
        onOpenSettings={() => setIsSettingsModalOpen(true)}
        onOpenPrinterSettings={() => setIsPrinterSettingsOpen(true)}
        projectName={projectName}
        onChangeProjectName={setProjectName}
        currentUser={currentUser}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
      />

      {/* Main Workspace Grid (Left Toolbar | Central Canvas or 3D Stage | Right Sidepanels) */}
      <div className={`flex-1 w-full overflow-hidden relative transition-all duration-300 ${
        isAndroidSimulated
          ? 'max-w-[420px] max-h-[860px] mx-auto my-auto rounded-[40px] border-[10px] border-slate-900 ring-4 ring-slate-800 shadow-2xl shadow-emerald-500/10 flex flex-col bg-[#090d16] relative'
          : 'flex h-[calc(100dvh-3rem)] w-full max-w-full'
      }`}>
        {/* Android Notch & Status bar indicator when in simulated mode */}
        {isAndroidSimulated && (
          <div className="w-full bg-slate-950 px-6 py-2.5 flex items-center justify-between text-[10px] text-slate-400 border-b border-slate-800/80 shrink-0">
            <span className="font-bold text-slate-200">14:59</span>
            {/* Camera Hole Notch */}
            <div className="w-4 h-4 bg-black rounded-full ring-2 ring-slate-800"></div>
            <div className="flex items-center gap-1.5 font-medium">
              <span>5G</span>
              <span>100%</span>
            </div>
          </div>
        )}
        {/* Left Canva Rail and Side Drawer */}
        <LeftToolBar
          activeTool={activeTool}
          onSelectTool={handleSelectTool}
          selectedShape={selectedShape}
          onSelectShape={handleSelectShape}
          activeColor={activeColor}
          onChangeColor={handleChangeColor}
          brushSize={brushSize}
          onChangeBrushSize={setBrushSize}
          onAddLayer={handleAddLayer}
          onAddVectorTextPreset={handleAddVectorTextPreset}
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
          currentUser={currentUser}
          onOpenAuthModal={() => setIsAuthModalOpen(true)}
          onLogout={handleLogout}
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
                onReorderLayers={(reordered) => {
                  setLayers(reordered);
                  setCanvasVersion((v) => v + 1);
                }}
                onToggleLock={handleToggleLock}
                onToggleVisibility={handleToggleVisibility}
                onChangeColor={handleChangeColor}
                onUndo={handleUndo}
                onRedo={handleRedo}
                pushHistoryStep={pushHistoryStep}
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

      <PrintSublimationModal
        isOpen={isPrintModalOpen || isExportModalOpen}
        onClose={() => {
          setIsPrintModalOpen(false);
          setIsExportModalOpen(false);
        }}
        currentProduct={currentProduct}
        darkMode={theme === 'dark'}
        canvasElement={renderedCanvas}
        mirrorSublimation={mirrorSublimation}
        onShowSnackbar={(msg, type) => showSnackbar(msg, type)}
        onOpenPrinterSettings={() => setIsPrinterSettingsOpen(true)}
      />

      <PrinterSettingsModal
        isOpen={isPrinterSettingsOpen}
        onClose={() => setIsPrinterSettingsOpen(false)}
        theme={theme}
        canvasElement={renderedCanvas}
        onShowSnackbar={(msg, type) => showSnackbar(msg, type)}
        onOpenPrintModal={() => setIsPrintModalOpen(true)}
      />

      {/* Novo Projeto Modal */}
      {isNewProjectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
          <div className={`w-full max-w-lg rounded-2xl border p-6 shadow-2xl relative transition-all ${
            theme === 'light' ? 'bg-white border-slate-200 text-slate-800' : 'bg-[#18181b] border-[#2e2e33] text-gray-100'
          }`}>
            <button
              onClick={() => setIsNewProjectModalOpen(false)}
              className={`absolute top-4 right-4 p-1.5 rounded-lg cursor-pointer ${
                theme === 'light' ? 'hover:bg-slate-100 text-slate-500' : 'hover:bg-white/10 text-gray-400'
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-600/20 text-purple-600 rounded-xl">
                <FolderPlus className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Criar Novo Projeto</h3>
                <p className={`text-xs ${theme === 'light' ? 'text-slate-500' : 'text-gray-400'}`}>
                  Escolha como deseja iniciar sua nova estampa sublimática.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
              <button
                onClick={() => handleConfirmNewProject('blank')}
                className={`p-4 rounded-xl border text-left flex flex-col gap-2 transition-all cursor-pointer hover:border-purple-500 group ${
                  theme === 'light'
                    ? 'bg-slate-50 border-slate-200 hover:bg-purple-50'
                    : 'bg-[#222226] border-[#303036] hover:bg-[#282338]'
                }`}
              >
                <div className="p-2 rounded-lg bg-purple-600 text-white w-fit group-hover:scale-110 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="font-semibold text-sm">Projeto em Branco</span>
                <span className={`text-xs ${theme === 'light' ? 'text-slate-500' : 'text-gray-400'}`}>
                  Canvas completamente limpo para você criar do zero.
                </span>
              </button>

              <button
                onClick={() => handleConfirmNewProject('sample')}
                className={`p-4 rounded-xl border text-left flex flex-col gap-2 transition-all cursor-pointer hover:border-purple-500 group ${
                  theme === 'light'
                    ? 'bg-slate-50 border-slate-200 hover:bg-purple-50'
                    : 'bg-[#222226] border-[#303036] hover:bg-[#282338]'
                }`}
              >
                <div className="p-2 rounded-lg bg-indigo-600 text-white w-fit group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="font-semibold text-sm">Com Modelo Base</span>
                <span className={`text-xs ${theme === 'light' ? 'text-slate-500' : 'text-gray-400'}`}>
                  Inclui fundo guia e camada de texto inicial para personalizar.
                </span>
              </button>

              {localStorage.getItem('sublimstudio_saved_project') && (
                <button
                  onClick={() => handleConfirmNewProject('restore')}
                  className={`sm:col-span-2 p-4 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer hover:border-emerald-500 group ${
                    theme === 'light'
                      ? 'bg-emerald-50/60 border-emerald-300 hover:bg-emerald-100/80 text-emerald-950'
                      : 'bg-emerald-950/20 border-emerald-500/40 hover:bg-emerald-900/30 text-emerald-100'
                  }`}
                >
                  <div className="p-2.5 rounded-lg bg-emerald-600 text-white shrink-0 group-hover:scale-110 transition-transform shadow-md">
                    <Save className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-sm block">Restaurar Rascunho Salvo</span>
                    <span className={`text-xs ${theme === 'light' ? 'text-emerald-800' : 'text-emerald-300/80'}`}>
                      Carregar as camadas e configurações do último projeto salvo neste dispositivo.
                    </span>
                  </div>
                </button>
              )}
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-200 dark:border-[#2e2e33]">
              <button
                onClick={() => setIsNewProjectModalOpen(false)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer ${
                  theme === 'light' ? 'bg-slate-200 hover:bg-slate-300 text-slate-700' : 'bg-[#28282d] hover:bg-[#34343a] text-gray-300'
                }`}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Configurações Modal */}
      {isSettingsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
          <div className={`w-full max-w-md rounded-2xl border p-6 shadow-2xl relative transition-all ${
            theme === 'light' ? 'bg-white border-slate-200 text-slate-800' : 'bg-[#18181b] border-[#2e2e33] text-gray-100'
          }`}>
            <button
              onClick={() => setIsSettingsModalOpen(false)}
              className={`absolute top-4 right-4 p-1.5 rounded-lg cursor-pointer ${
                theme === 'light' ? 'hover:bg-slate-100 text-slate-500' : 'hover:bg-white/10 text-gray-400'
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 bg-purple-600/20 text-purple-600 rounded-xl">
                <SettingsIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Configurações do Estúdio</h3>
                <p className={`text-xs ${theme === 'light' ? 'text-slate-500' : 'text-gray-400'}`}>
                  Ajuste as preferências de trabalho e visualização.
                </p>
              </div>
            </div>

            <div className="space-y-4 my-4">
              <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-[#2e2e33]">
                <div>
                  <div className="font-semibold text-xs">Espelhamento Sublimático</div>
                  <div className={`text-[11px] ${theme === 'light' ? 'text-slate-500' : 'text-gray-400'}`}>
                    Inverter horizontalmente para transferência em papel
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={mirrorSublimation}
                  onChange={(e) => setMirrorSublimation(e.target.checked)}
                  className="w-4 h-4 accent-purple-600 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-[#2e2e33]">
                <div>
                  <div className="font-semibold text-xs">Exibir Grade de Alinhamento</div>
                  <div className={`text-[11px] ${theme === 'light' ? 'text-slate-500' : 'text-gray-400'}`}>
                    Linhas de auxílio no canvas 2D
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={showGrid}
                  onChange={(e) => setShowGrid(e.target.checked)}
                  className="w-4 h-4 accent-purple-600 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-[#2e2e33]">
                <div>
                  <div className="font-semibold text-xs">Exibir Réguas em Milímetros</div>
                  <div className={`text-[11px] ${theme === 'light' ? 'text-slate-500' : 'text-gray-400'}`}>
                    Réguas graduadas nas bordas do editor
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={showRulers}
                  onChange={(e) => setShowRulers(e.target.checked)}
                  className="w-4 h-4 accent-purple-600 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-[#2e2e33]">
                <div>
                  <div className="font-semibold text-xs">Tema da Interface</div>
                  <div className={`text-[11px] ${theme === 'light' ? 'text-slate-500' : 'text-gray-400'}`}>
                    Alternar entre modo escuro e claro
                  </div>
                </div>
                <button
                  onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-purple-600 text-white cursor-pointer hover:bg-purple-500"
                >
                  {theme === 'dark' ? 'Modo Escuro' : 'Modo Claro'}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end pt-3 border-t border-slate-200 dark:border-[#2e2e33]">
              <button
                onClick={() => setIsSettingsModalOpen(false)}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-purple-600 text-white cursor-pointer hover:bg-purple-500"
              >
                Concluído
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Android Bottom Navigation Bar */}
      <AndroidMobileNav
        workspaceViewMode={workspaceViewMode}
        setWorkspaceViewMode={setWorkspaceViewMode}
        activeRightTab={activeRightTab}
        setActiveRightTab={setActiveRightTab}
        setIsRightSidebarCollapsed={setIsRightSidebarCollapsed}
        onOpenProductLibrary={() => setIsProductLibraryOpen(true)}
        onOpenAndroidModal={() => setIsAndroidModalOpen(true)}
        onTriggerCameraCapture={() => {
          handleTriggerCamera();
          showSnackbar('Câmera ativada para captura', 'info');
        }}
        onIncludeStamp={() => {
          handleIncludeStampClick();
          showSnackbar('Selecione uma estampa ou foto', 'info');
        }}
        onAddTextLayer={() => {
          handleAddLayer('text');
          showSnackbar('Novo texto adicionado!', 'success');
        }}
        onAddShapeLayer={(shape) => {
          handleAddLayer('shape', shape);
          showSnackbar(`Forma ${shape} adicionada!`, 'success');
        }}
        onOpenMobileBottomSheet={(tab) => {
          setMobileBottomSheetTab(tab);
        }}
      />

      {/* Material 3 Android Mobile Bottom Sheet */}
      <MD3BottomSheet
        isOpen={mobileBottomSheetTab !== null}
        onClose={() => setMobileBottomSheetTab(null)}
        title={
          mobileBottomSheetTab === 'layers'
            ? 'Gerenciador de Camadas'
            : mobileBottomSheetTab === 'properties'
            ? 'Ajustes e Propriedades'
            : 'IA Studio - Gerar Estampa'
        }
        subtitle={
          mobileBottomSheetTab === 'layers'
            ? 'Organize, bloqueie e ajuste a opacidade dos elementos'
            : mobileBottomSheetTab === 'properties'
            ? 'Ajuste cores, tamanho, fonte e curva do objeto'
            : 'Crie artes e fundos automáticos com IA'
        }
      >
        {mobileBottomSheetTab === 'layers' && (
          <LayerPanel
            layers={layers}
            activeLayerId={activeLayerId}
            onSelectLayer={setActiveLayerId}
            onAddLayer={(type) => {
              handleAddLayer(type);
              showSnackbar(`Camada ${type} criada!`, 'success');
            }}
            onDeleteLayer={(id) => {
              handleDeleteLayer(id);
              showSnackbar('Camada removida', 'info');
            }}
            onDuplicateLayer={(id) => {
              handleDuplicateLayer(id);
              showSnackbar('Camada duplicada', 'success');
            }}
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

        {mobileBottomSheetTab === 'properties' && (
          <RightPropertiesPanel
            activeLayer={activeLayerObj}
            onUpdateLayer={handleUpdateLayer}
            product={currentProduct}
            onApplyPresetTemplate={handleApplyPresetTemplate}
            onDeleteLayer={(id) => {
              handleDeleteLayer(id);
              setMobileBottomSheetTab(null);
              showSnackbar('Camada removida', 'info');
            }}
            onDuplicateLayer={(id) => {
              handleDuplicateLayer(id);
              showSnackbar('Camada duplicada', 'success');
            }}
            theme={theme}
          />
        )}

        {mobileBottomSheetTab === 'ai' && (
          <AIPanel
            product={currentProduct}
            onAddAIGeneratedImageToCanvas={(url, title) => {
              handleAddAIGeneratedImageToCanvas(url, title);
              setMobileBottomSheetTab(null);
              showSnackbar('Arte IA adicionada à tela!', 'success');
            }}
            onApplyAIToolToActiveLayer={(action) => {
              handleApplyAIToolToActiveLayer(action);
              showSnackbar(`Efeito IA (${action}) aplicado!`, 'success');
            }}
            activeLayer={activeLayerObj}
            theme={theme}
          />
        )}
      </MD3BottomSheet>

      {/* Material Design 3 Toast / Snackbar System */}
      <MD3Snackbar
        snackbar={snackbar}
        onClose={() => setSnackbar(null)}
      />

      {/* Android App APK & PWA Modal */}
      <AndroidAppModal
        isOpen={isAndroidModalOpen}
        onClose={() => setIsAndroidModalOpen(false)}
        isAndroidSimulated={isAndroidSimulated}
        setIsAndroidSimulated={setIsAndroidSimulated}
        deferredInstallPrompt={deferredInstallPrompt}
        onShowSnackbar={(msg, type) => showSnackbar(msg, type)}
        theme={theme}
      />

      {/* Tutorial Completo & Ajuda Modal */}
      <HelpModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
        theme={theme}
      />

      {/* Sobre o Sublim Studio Modal */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        theme={theme}
        onOpenHelp={() => setIsHelpModalOpen(true)}
      />

      {/* Login / Logout Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        currentUser={currentUser}
        onLogin={handleLogin}
        onLogout={handleLogout}
        darkMode={theme === 'dark'}
      />
    </div>
  );
}
