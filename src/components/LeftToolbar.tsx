import React, { useState } from 'react';
import {
  LayoutTemplate,
  Shapes,
  Type,
  ImagePlus,
  Coffee,
  Sparkles,
  Layers,
  Search,
  ChevronLeft,
  ChevronRight,
  PanelLeftClose,
  PanelLeftOpen,
  Square,
  Circle,
  Hexagon,
  Star,
  Award,
  Heart,
  Wand2,
  Maximize2,
  Trash2,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Plus,
  Upload,
  User,
  LogIn,
  LogOut,
  UserCheck,
  FileType
} from 'lucide-react';
import { setAsset } from '../lib/imageAssetStore';
import { ToolType, ShapeType, SublimationProduct, Layer, TextWarpStyle } from '../types';
import { PRODUCTS_LIBRARY } from '../data/products';
import { ALL_VECTOR_SHAPES, SHAPE_CATEGORIES } from '../utils/shapeDrawer';
import { ShapePreviewCanvas } from './ShapePreviewCanvas';
import { VECTOR_FONTS, FontDefinition } from '../data/fonts';
import { VECTOR_TEXT_PRESETS, VectorTextPreset } from '../data/vectorTextPresets';
import { ProductIcon } from './ProductIcon';

export type SidebarTabType = 'templates' | 'elements' | 'text' | 'uploads' | 'products' | 'ai' | 'layers' | 'history' | 'presets' | 'vector';

export interface LeftToolbarProps {
  activeTool?: ToolType;
  setActiveTool?: (tool: ToolType) => void;
  onSelectTool?: (tool: ToolType) => void;
  activeSidebarTab?: SidebarTabType | null;
  setActiveSidebarTab?: (tab: SidebarTabType | null) => void;
  selectedShape?: ShapeType;
  onSelectShape?: (shape: ShapeType) => void;
  activeColor?: string;
  onChangeColor?: (color: string) => void;
  fillColor?: string;
  setFillColor?: (color: string) => void;
  strokeColor?: string;
  setStrokeColor?: (color: string) => void;
  onOpenColorPicker?: (type: 'fill' | 'stroke') => void;
  brushSize?: number;
  onChangeBrushSize?: (size: number) => void;
  onAddLayer?: (
    type: 'text' | 'shape' | 'image',
    customShape?: ShapeType,
    defaultWarpStyle?: TextWarpStyle,
    customFontFamily?: string
  ) => void;
  onAddVectorTextPreset?: (preset: VectorTextPreset) => void;
  currentProduct?: SublimationProduct;
  onSelectProduct?: (product: SublimationProduct) => void;
  layers?: Layer[];
  activeLayerId?: string | null;
  onSelectLayer?: (id: string | null) => void;
  onUpdateLayer?: (layer: Layer) => void;
  onDeleteLayer?: (id: string) => void;
  onDuplicateLayer?: (id: string) => void;
  onAddAIGeneratedImage?: (url: string, title: string) => void;
  onOpenAIPanel?: () => void;
  onOpenWordArtModal?: () => void;
  // New: open WordArt2 specifically
  onOpenWordArt2?: () => void;
  darkMode?: boolean;
  theme?: 'dark' | 'light';
  currentUser?: { name: string; email: string; isPro?: boolean } | null;
  onOpenAuthModal?: () => void;
  onLogout?: () => void;
}

export const LeftToolbar: React.FC<LeftToolbarProps> = ({
  activeTool = 'select',
  setActiveTool,
  onSelectTool,
  activeSidebarTab: externalActiveSidebarTab,
  setActiveSidebarTab: externalSetActiveSidebarTab,
  selectedShape = 'rectangle',
  onSelectShape,
  activeColor: externalActiveColor,
  onChangeColor,
  fillColor = '#00D9FF',
  setFillColor,
  strokeColor = '#0F172A',
  setStrokeColor,
  onOpenColorPicker,
  brushSize = 5,
  onChangeBrushSize,
  onAddLayer,
  onAddVectorTextPreset,
  currentProduct,
  onSelectProduct,
  layers = [],
  activeLayerId = null,
  onSelectLayer,
  onUpdateLayer,
  onDeleteLayer,
  onDuplicateLayer,
  onAddAIGeneratedImage,
  onOpenAIPanel,
  onOpenWordArtModal,
  onOpenWordArt2,
  darkMode = true,
  theme = darkMode ? 'dark' : 'light',
  currentUser = null,
  onOpenAuthModal,
  onLogout,
}) => {
  // Active Color
  const activeColor = externalActiveColor || fillColor;

  // Canva Active Drawer Tab
  const [internalActiveTab, setInternalActiveTab] = useState<SidebarTabType | null>('templates');
  const [internalIsDrawerOpen, setInternalIsDrawerOpen] = useState<boolean>(true);
  const [isRailCollapsed, setIsRailCollapsed] = useState<boolean>(false);

  const activeTab = externalActiveSidebarTab !== undefined ? externalActiveSidebarTab : internalActiveTab;
  const isDrawerOpen = externalActiveSidebarTab !== undefined ? Boolean(externalActiveSidebarTab) : internalIsDrawerOpen;

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedShapeCategory, setSelectedShapeCategory] = useState<string>('all');
  const [shapeSearchQuery, setShapeSearchQuery] = useState<string>('');

  // Vector Fonts & Typography State
  const [textSubTab, setTextSubTab] = useState<'presets' | 'fonts' | 'warp' | 'quick'>('presets');
  const [fontSearchQuery, setFontSearchQuery] = useState<string>('');
  const [selectedFontCategory, setSelectedFontCategory] = useState<string>('all');
  const [presetSearchQuery, setPresetSearchQuery] = useState<string>('');
  const [selectedPresetCategory, setSelectedPresetCategory] = useState<string>('all');

  const [recentlyUsedShapes, setRecentlyUsedShapes] = useState<string[]>([
    'line',
    'line_arrow',
    'rectangle',
    'circle',
    'rounded_rectangle',
    'triangle',
    'elbow_connector',
    'arrow_right',
    'star_5',
    'heart',
  ]);

  const handleSelectShapeWithRecent = (shapeId: string) => {
    if (onSelectShape) onSelectShape(shapeId);
    setRecentlyUsedShapes((prev) => [shapeId, ...prev.filter((id) => id !== shapeId)].slice(0, 16));
  };

  const handleApplyTextWarp = (warpStyle: TextWarpStyle) => {
    const activeL = layers.find((l) => l.id === activeLayerId);
    if (activeL && activeL.type === 'text' && onUpdateLayer) {
      const isSpaciousStyle = [
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
      ].includes(warpStyle);

      onUpdateLayer({
        ...activeL,
        textWarpStyle: warpStyle,
        textCurved: warpStyle !== 'straight',
        warpIntensity: activeL.warpIntensity ?? 50,
        curveRadius: activeL.curveRadius || 120,
        width: isSpaciousStyle ? Math.max(activeL.width, 320) : activeL.width,
        height: isSpaciousStyle ? Math.max(activeL.height, 220) : activeL.height,
      });
    } else if (onAddLayer) {
      onAddLayer('text', undefined, warpStyle);
    }
  };

  // Sample Sublimation Template Presets for Mugs, Shirts, Cushions
  const templatePresets = [
    {
      id: 'tropical-vibes',
      title: 'Tropical Sublimação',
      category: 'Floral & Natureza',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: 'mother-day',
      title: 'Melhor Mãe do Mundo',
      category: 'Datas Especiais',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: 'cyberpunk-neon',
      title: 'Cyberpunk Neon',
      category: 'Geométrico / Moderno',
      imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: 'watercolor-gold',
      title: 'Aquarela Ouro Rosa',
      category: 'Elegante',
      imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: 'vintage-coffee',
      title: 'Café Vintage Premium',
      category: 'Canecas & Bar',
      imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
    },
  ];

  // Stock Sublimation Background Photos
  const stockPhotos = [
    { id: 'p1', url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80', tag: 'Floral' },
    { id: 'p2', url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&auto=format&fit=crop&q=80', tag: 'Neon' },
    { id: 'p3', url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&auto=format&fit=crop&q=80', tag: 'Aquarela' },
    { id: 'p4', url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80', tag: 'Marmorizado' },
    { id: 'p5', url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80', tag: 'Arte Moderna' },
    { id: 'p6', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80', tag: 'Praia Tropical' },
  ];

  const shapesList: { id: ShapeType; label: string; icon: React.ReactNode }[] = [
    { id: 'rectangle', label: 'Retângulo', icon: <Square className="w-5 h-5" /> },
    { id: 'circle', label: 'Círculo', icon: <Circle className="w-5 h-5" /> },
    { id: 'polygon', label: 'Hexágono', icon: <Hexagon className="w-5 h-5" /> },
    { id: 'star', label: 'Estrela', icon: <Star className="w-5 h-5" /> },
    { id: 'badge', label: 'Selo de Qualidade', icon: <Award className="w-5 h-5" /> },
    { id: 'heart', label: 'Coração', icon: <Heart className="w-5 h-5" /> },
  ];

  // Handle Tab Click
  const handleTabClick = (tab: SidebarTabType) => {
    if (externalSetActiveSidebarTab) {
      if (externalActiveSidebarTab === tab) {
        externalSetActiveSidebarTab(null);
      } else {
        externalSetActiveSidebarTab(tab);
      }
    } else {
      if (internalActiveTab === tab && internalIsDrawerOpen) {
        setInternalIsDrawerOpen(false);
      } else {
        setInternalActiveTab(tab);
        setInternalIsDrawerOpen(true);
      }
    }
  };

  // Image File Upload Handler (prefer Blob/objectURL + imageAssetStore)
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    try {
      const bitmap = await createImageBitmap(file);
      setAsset(objectUrl, { blob: file, url: objectUrl, bitmap });
    } catch (err) {
      setAsset(objectUrl, { blob: file, url: objectUrl });
    }

    if (onAddAIGeneratedImage) {
      onAddAIGeneratedImage(objectUrl, file.name.replace(/\.[^/.]+$/, ''));
    }

    e.target.value = '';
  };

  return (
    <div className="flex h-full select-none z-30 relative">
      {/* 1. Canva Left Icon Rail with Scrollbar & Collapse Toggle */}
      <aside className={`border-r flex flex-col items-center py-2.5 gap-2 select-none z-40 transition-all duration-300 overflow-y-auto custom-scrollbar touch-scroll-y shrink-0 ${
        isRailCollapsed ? 'w-12' : 'w-18'
      } ${
        theme === 'light'
          ? 'bg-slate-100 border-slate-300 text-slate-600'
          : 'bg-[#0d0e12] border-[#23242a] text-gray-400'
      }`}>
        {/* Rail Collapse / Expand Toggle Button */}
        <button
          onClick={() => setIsRailCollapsed(!isRailCollapsed)}
          className={`flex flex-col items-center justify-center rounded-xl transition-all cursor-pointer ${
            isRailCollapsed ? 'w-9 h-9 my-1' : 'w-14 h-8 mb-1 border border-dashed'
          } ${
            theme === 'light'
              ? 'border-slate-300 hover:bg-slate-200 text-slate-600 hover:text-purple-600'
              : 'border-slate-700 hover:bg-white/10 text-gray-400 hover:text-purple-400'
          }`}
          title={isRailCollapsed ? "Expandir Barra Lateral" : "Recolher Barra Lateral"}
        >
          {isRailCollapsed ? (
            <PanelLeftOpen className="w-5 h-5 text-purple-500" />
          ) : (
            <div className="flex items-center gap-1">
              <PanelLeftClose className="w-3.5 h-3.5" />
              <span className="text-[8px] font-bold uppercase">Recolher</span>
            </div>
          )}
        </button>

        {!isRailCollapsed && (
          <>
            {/* Templates */}
            <button
              onClick={() => handleTabClick('templates')}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer ${
                activeTab === 'templates' && isDrawerOpen
                  ? 'bg-purple-600/20 text-purple-600 border border-purple-500/40 shadow-lg'
                  : theme === 'light' ? 'hover:bg-slate-200 hover:text-slate-900' : 'hover:bg-white/5 hover:text-white'
              }`}
              title="Modelos de Estampa"
            >
              <LayoutTemplate className="w-5 h-5 mb-1" />
              <span className="text-[10px] font-medium">Modelos</span>
            </button>

            {/* Elements / Shapes */}
            <button
              onClick={() => handleTabClick('elements')}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer ${
                activeTab === 'elements' && isDrawerOpen
                  ? 'bg-purple-600/20 text-purple-600 border border-purple-500/40 shadow-lg'
                  : theme === 'light' ? 'hover:bg-slate-200 hover:text-slate-900' : 'hover:bg-white/5 hover:text-white'
              }`}
              title="Elementos & Formas"
            >
              <Shapes className="w-5 h-5 mb-1" />
              <span className="text-[10px] font-medium">Elementos</span>
            </button>

            {/* Text */}
            <button
              onClick={() => handleTabClick('text')}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer ${
                activeTab === 'text' && isDrawerOpen
                  ? 'bg-purple-600/20 text-purple-600 border border-purple-500/40 shadow-lg'
                  : theme === 'light' ? 'hover:bg-slate-200 hover:text-slate-900' : 'hover:bg-white/5 hover:text-white'
              }`}
              title="Inserir Texto & Arco"
            >
              <Type className="w-5 h-5 mb-1" />
              <span className="text-[10px] font-medium">Texto</span>
            </button>

            {/* WordArt */}
            <button
              onClick={() => {
                if (onOpenWordArtModal) {
                  onOpenWordArtModal();
                } else {
                  handleTabClick('text');
                }
              }}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer relative group ${
                theme === 'light'
                  ? 'text-rose-600 hover:bg-rose-100'
                  : 'text-rose-400 hover:bg-rose-950/40 hover:text-rose-300'
              }`}
              title="WordArt & Nuvem de Palavras Tipográficas"
            >
              <Wand2 className="w-5 h-5 mb-1 text-rose-500" />
              <span className="text-[10px] font-bold">WordArt</span>
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            </button>

            {/* WordArt 2 (Dedicated Icon) */}
            <button
              onClick={() => {
                if (onOpenWordArt2) {
                  onOpenWordArt2();
                } else if (onOpenWordArtModal) {
                  onOpenWordArtModal();
                } else {
                  handleTabClick('text');
                }
              }}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer relative group ${
                theme === 'light'
                  ? 'text-amber-600 hover:bg-amber-100'
                  : 'text-amber-400 hover:bg-amber-950/30 hover:text-amber-300'
              }`}
              title="WordArt Studio 2"
              aria-label="Abrir WordArt Studio 2"
            >
              <FileType className="w-5 h-5 mb-1 text-amber-500" />
              <span className="text-[10px] font-bold">WordArt 2</span>
            </button>

            {/* Uploads / Photos */}
            <button
              onClick={() => handleTabClick('uploads')}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer ${
                activeTab === 'uploads' && isDrawerOpen
                  ? 'bg-purple-600/20 text-purple-600 border border-purple-500/40 shadow-lg'
                  : theme === 'light' ? 'hover:bg-slate-200 hover:text-slate-900' : 'hover:bg-white/5 hover:text-white'
              }`}
              title="Minhas Imagens & Galeria"
            >
              <ImagePlus className="w-5 h-5 mb-1" />
              <span className="text-[10px] font-medium">Uploads</span>
            </button>

            {/* Products */}
            <button
              onClick={() => handleTabClick('products')}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer ${
                activeTab === 'products' && isDrawerOpen
                  ? 'bg-purple-600/20 text-purple-600 border border-purple-500/40 shadow-lg'
                  : theme === 'light' ? 'hover:bg-slate-200 hover:text-slate-900' : 'hover:bg-white/5 hover:text-white'
              }`}
              title="Produtos Sublimáveis"
            >
              <ProductIcon product={currentProduct} className="w-5 h-5 mb-1" />
              <span className="text-[10px] font-medium">Produtos</span>
            </button>

            {/* AI Studio */}
            <button
              onClick={() => handleTabClick('ai')}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer relative ${
                activeTab === 'ai' && isDrawerOpen
                  ? 'bg-gradient-to-tr from-purple-600/30 to-indigo-600/30 text-purple-600 border border-purple-500/50 shadow-lg'
                  : theme === 'light' ? 'text-purple-600 hover:bg-purple-100 hover:text-purple-700' : 'text-purple-400 hover:bg-purple-950/30 hover:text-purple-200'
              }`}
              title="Estúdio IA Generativo"
            >
              <Sparkles className="w-5 h-5 mb-1 text-purple-600" />
              <span className="text-[10px] font-semibold">Estúdio IA</span>
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            </button>

            {/* Layers */}
            <button
              onClick={() => handleTabClick('layers')}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer ${
                activeTab === 'layers' && isDrawerOpen
                  ? 'bg-purple-600/20 text-purple-600 border border-purple-500/40 shadow-lg'
                  : theme === 'light' ? 'hover:bg-slate-200 hover:text-slate-900' : 'hover:bg-white/5 hover:text-white'
              }`}
              title="Camadas & Z-Index"
            >
              <Layers className="w-5 h-5 mb-1" />
              <span className="text-[10px] font-medium">Camadas</span>
            </button>

            <div className={`mt-auto w-10 h-[1px] ${theme === 'light' ? 'bg-slate-300' : 'bg-[#23242a]'}`}></div>

            {/* Account / Login Button */}
            <div className="flex flex-col items-center gap-2 my-1">
              {currentUser ? (
                <button
                  onClick={onOpenAuthModal}
                  className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all cursor-pointer relative group ${
                    theme === 'light'
                      ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                      : 'bg-purple-950/40 text-purple-300 border border-purple-500/30 hover:bg-purple-900/50'
                  }`}
                  title={`Conta: ${currentUser.name} (${currentUser.email}) - Clique para ver/sair`}
                >
                  <div className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-black uppercase shadow">
                    {currentUser.name.charAt(0)}
                  </div>
                  <span className="text-[9px] font-bold mt-0.5 text-purple-400">Perfil</span>
                </button>
              ) : (
                <button
                  onClick={onOpenAuthModal}
                  className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all cursor-pointer ${
                    theme === 'light'
                      ? 'bg-slate-200 text-slate-700 hover:bg-purple-600 hover:text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-purple-600 hover:text-white border border-slate-700'
                  }`}
                  title="Fazer Login / Criar Conta"
                >
                  <LogIn className="w-4 h-4 mb-0.5 text-purple-400" />
                  <span className="text-[9px] font-bold">Login</span>
                </button>
              )}
            </div>
          </>
        )}
      </aside>

      {/* 2. Canva Sliding Side Drawer Panel */}
      {isDrawerOpen && !externalSetActiveSidebarTab && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-20 sm:hidden backdrop-blur-[1px]"
            onClick={() => {
              if (externalSetActiveSidebarTab) {
                externalSetActiveSidebarTab(null);
              } else {
                setInternalIsDrawerOpen(false);
              }
            }}
          />
          <div className={`w-[calc(100vw-4.5rem)] sm:w-80 border-r flex flex-col h-full text-xs z-30 shadow-2xl relative animate-in slide-in-from-left duration-200 transition-colors ${
            theme === 'light'
              ? 'bg-white border-slate-200 text-slate-800'
              : 'bg-[#16171d] border-[#26272e] text-gray-200'
          }`}>
          {/* Drawer Close Button Header */}
          <div className={`p-3.5 border-b flex items-center justify-between ${
            theme === 'light' ? 'border-slate-200' : 'border-[#26272e]'
          }`}>
            <h2 className={`font-bold text-sm capitalize flex items-center gap-2 ${
              theme === 'light' ? 'text-slate-900' : 'text-white'
            }`}>
              {activeTab === 'templates' && <>🎨 Modelos de Estampa</>}
              {activeTab === 'elements' && <>📐 Elementos & Formas</>}
              {activeTab === 'text' && <>🔤 Adicionar Texto</>}
              {activeTab === 'uploads' && <>🖼️ Fotos e Uploads</>}
              {activeTab === 'products' && (
                <span className="flex items-center gap-1.5">
                  <ProductIcon product={currentProduct} className="w-4 h-4 text-purple-400" />
                  Produtos Sublimáveis
                </span>
              )}
              {activeTab === 'ai' && <>✨ Estúdio IA Generativo</>}
              {activeTab === 'layers' && <>🥞 Painel de Camadas</>}
            </h2>

            <button
              onClick={() => {
                if (externalSetActiveSidebarTab) {
                  externalSetActiveSidebarTab(null);
                } else {
                  setInternalIsDrawerOpen(false);
                }
              }}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-semibold cursor-pointer border border-purple-500/30 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 transition-all shadow-sm"
              title="Recolher Painel Lateral"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Recolher</span>
            </button>
          </div>

          {/* Search Input Box */}
          {activeTab !== 'layers' && activeTab !== 'elements' && activeTab !== 'text' && (
            <div className="px-4 pt-3 pb-2">
              <div className="relative">
                <Search className={`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 ${
                  theme === 'light' ? 'text-slate-400' : 'text-gray-400'
                }`} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Buscar em ${activeTab}...`}
                  className={`w-full rounded-xl pl-9 pr-3 py-2 text-xs border focus:outline-none focus:border-purple-500 transition-colors ${
                    theme === 'light'
                      ? 'bg-slate-100 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white'
                      : 'bg-[#202127] border-[#30313a] text-white placeholder-gray-500'
                  }`}
                />
              </div>
            </div>
          )}

          {/* Drawer Body Content based on Active Tab */}
          <div className="flex-1 overflow-y-auto custom-scrollbar touch-scroll-y p-4 space-y-4 min-h-0">
            {/* TAB 1: TEMPLATES */}
            {activeTab === 'templates' && (
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                  Estampas Prontas Recomendadas
                </span>

                <div className="grid grid-cols-1 gap-3">
                  {templatePresets
                    .filter((t) => t.title.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((tpl) => (
                      <div
                        key={tpl.id}
                        onClick={() => {
                          if (onAddAIGeneratedImage) {
                            onAddAIGeneratedImage(tpl.imageUrl, tpl.title);
                          }
                        }}
                        className="group relative rounded-2xl overflow-hidden border border-[#2d2e36] hover:border-purple-500/80 cursor-pointer shadow-md transition-all hover:scale-[1.02]"
                      >
                        <img
                          src={tpl.imageUrl}
                          alt={tpl.title}
                          className="w-full h-28 object-cover group-hover:brightness-110 transition-all"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 flex flex-col justify-end">
                          <span className="text-white font-bold text-xs group-hover:text-purple-300 transition-colors">
                            {tpl.title}
                          </span>
                          <span className="text-[10px] text-gray-300 font-medium">
                            {tpl.category}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* TAB 2: ELEMENTS / SHAPES */}
            {activeTab === 'elements' && (
              <div className="space-y-4">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar forma (ex: seta, balão, estrela)..."
                    value={shapeSearchQuery}
                    onChange={(e) => setShapeSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 bg-[#202127] border border-[#30313a] focus:border-purple-500 rounded-xl text-xs text-white placeholder-gray-500 outline-none transition-all"
                  />
                  {shapeSearchQuery && (
                    <button
                      onClick={() => setShapeSearchQuery('')}
                      className="absolute right-2.5 top-2 text-xs text-gray-400 hover:text-white"
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Category Pills Filter */}
                <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar text-[10px]">
                  <button
                    onClick={() => setSelectedShapeCategory('all')}
                    className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-all cursor-pointer font-medium ${
                      selectedShapeCategory === 'all'
                        ? 'bg-purple-600 text-white font-bold'
                        : 'bg-[#202127] text-gray-400 hover:text-white border border-[#30313a]'
                    }`}
                  >
                    Todas
                  </button>
                  {SHAPE_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedShapeCategory(cat.id)}
                      className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-all cursor-pointer font-medium ${
                        selectedShapeCategory === cat.id
                          ? 'bg-purple-600 text-white font-bold'
                          : 'bg-[#202127] text-gray-400 hover:text-white border border-[#30313a]'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>

                {/* SECTION 1: Formas Usadas Recentemente */}
                {!shapeSearchQuery && selectedShapeCategory === 'all' && (
                  <div className="bg-[#18191f] p-3 rounded-2xl border border-[#2d2e36]">
                    <span className="text-[11px] font-bold text-purple-300 block mb-2 flex items-center justify-between">
                      <span>Formas Usadas Recentemente</span>
                      <span className="text-[9px] text-gray-500 font-normal">Auto-salvo</span>
                    </span>
                    <div className="grid grid-cols-5 gap-1.5">
                      {recentlyUsedShapes.map((shapeId) => {
                        const shapeDef = ALL_VECTOR_SHAPES.find((s) => s.id === shapeId);
                        return (
                          <button
                            key={'recent-' + shapeId}
                            onClick={() => handleSelectShapeWithRecent(shapeId)}
                            title={shapeDef?.name || shapeId}
                            className="flex items-center justify-center p-1.5 bg-[#202127] hover:bg-purple-900/30 border border-[#30313a] hover:border-purple-500 rounded-lg transition-all hover:scale-110 cursor-pointer group"
                          >
                            <ShapePreviewCanvas shapeId={shapeId} size={24} color="#c084fc" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* CATEGORIZED SHAPES CATALOG */}
                <div className="space-y-4">
                  {SHAPE_CATEGORIES.filter(
                    (cat) => selectedShapeCategory === 'all' || selectedShapeCategory === cat.id
                  ).map((cat) => {
                    const categoryShapes = ALL_VECTOR_SHAPES.filter(
                      (s) =>
                        s.category === cat.id &&
                        (!shapeSearchQuery ||
                          s.name.toLowerCase().includes(shapeSearchQuery.toLowerCase()) ||
                          s.id.toLowerCase().includes(shapeSearchQuery.toLowerCase()))
                    );

                    if (categoryShapes.length === 0) return null;

                    return (
                      <div key={cat.id} className="space-y-2">
                        <span className="text-[11px] font-bold text-gray-300 block uppercase tracking-wider border-b border-[#2d2e36] pb-1">
                          {cat.name}
                        </span>
                        <div className="grid grid-cols-4 gap-1.5">
                          {categoryShapes.map((shape) => (
                            <button
                              key={shape.id}
                              onClick={() => handleSelectShapeWithRecent(shape.id)}
                              title={shape.name}
                              className="flex flex-col items-center justify-center p-2 bg-[#202127] hover:bg-[#2a2b38] border border-[#30313a] hover:border-purple-500 rounded-xl transition-all hover:scale-105 cursor-pointer group text-gray-300 hover:text-white"
                            >
                              <div className="group-hover:scale-110 transition-transform">
                                <ShapePreviewCanvas shapeId={shape.id} size={28} color="#c084fc" />
                              </div>
                              <span className="text-[9px] font-medium text-center truncate w-full mt-1 text-gray-400 group-hover:text-purple-300">
                                {shape.name}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 3: TEXT & VECTOR TYPOGRAPHY */}
            {activeTab === 'text' && (
              <div className="space-y-3">
                {/* Featured WordArt Studio Launch Banner */}
                {onOpenWordArtModal && (
                  <button
                    onClick={onOpenWordArtModal}
                    className="w-full p-3 bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 hover:from-rose-500 hover:via-purple-500 hover:to-indigo-500 text-white rounded-2xl shadow-lg border border-purple-400/30 flex items-center justify-between cursor-pointer group transition-all transform hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-bold">
                        <Wand2 className="w-4 h-4 text-amber-300" />
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-black block leading-tight">WordArt & Nuvem de Palavras</span>
                        <span className="text-[9px] text-purple-200 font-medium">Silhuetas para Canecas, Camisetas...</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full border border-white/30">
                      Abrir
                    </span>
                  </button>
                )}

                {/* Sub-tab Pills Switcher */}
                <div className="grid grid-cols-4 gap-1 p-1 bg-[#18191f] rounded-xl border border-[#2d2e36] text-[10px] font-bold">
                  <button
                    onClick={() => setTextSubTab('presets')}
                    className={`py-1.5 px-1 rounded-lg transition-all text-center cursor-pointer ${
                      textSubTab === 'presets'
                        ? 'bg-purple-600 text-white shadow'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Estampas
                  </button>
                  <button
                    onClick={() => setTextSubTab('fonts')}
                    className={`py-1.5 px-1 rounded-lg transition-all text-center cursor-pointer ${
                      textSubTab === 'fonts'
                        ? 'bg-purple-600 text-white shadow'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Fontes
                  </button>
                  <button
                    onClick={() => setTextSubTab('quick')}
                    className={`py-1.5 px-1 rounded-lg transition-all text-center cursor-pointer ${
                      textSubTab === 'quick'
                        ? 'bg-purple-600 text-white shadow'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Texto
                  </button>
                  <button
                    onClick={() => setTextSubTab('warp')}
                    className={`py-1.5 px-1 rounded-lg transition-all text-center cursor-pointer ${
                      textSubTab === 'warp'
                        ? 'bg-purple-600 text-white shadow'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Efeitos
                  </button>
                </div>

                {/* SUB-TAB 1: ESTAMPAS & FRASES VETORIAIS PRONTAS */}
                {textSubTab === 'presets' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-purple-300 uppercase tracking-wider block">
                        Estampas Tipográficas Vetoriais
                      </span>
                      <span className="text-[9px] text-gray-500 font-mono font-medium">1-Clique</span>
                    </div>

                    {/* Search & Category filter for presets */}
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Buscar frase (ex: Mãe, Pai, Gamer)..."
                        value={presetSearchQuery}
                        onChange={(e) => setPresetSearchQuery(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 bg-[#202127] border border-[#30313a] focus:border-purple-500 rounded-xl text-xs text-white placeholder-gray-500 outline-none transition-all"
                      />
                    </div>

                    {/* Presets List Grid */}
                    <div className="space-y-2">
                      {VECTOR_TEXT_PRESETS.filter(
                        (p) =>
                          !presetSearchQuery ||
                          p.title.toLowerCase().includes(presetSearchQuery.toLowerCase()) ||
                          p.content.toLowerCase().includes(presetSearchQuery.toLowerCase()) ||
                          p.categoryLabel.toLowerCase().includes(presetSearchQuery.toLowerCase())
                      ).map((preset) => (
                        <button
                          key={preset.id}
                          onClick={() => onAddVectorTextPreset && onAddVectorTextPreset(preset)}
                          className="w-full p-3 bg-gradient-to-r from-[#202128] to-[#282932] hover:from-[#2a2b38] hover:to-[#323445] border border-[#323440] hover:border-purple-500/60 rounded-2xl transition-all cursor-pointer text-left group flex flex-col justify-between gap-2 shadow-sm"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-purple-300 uppercase tracking-wider">
                              {preset.categoryLabel}
                            </span>
                            <span className="text-[9px] bg-purple-900/50 text-purple-300 px-2 py-0.5 rounded-full border border-purple-500/30">
                              Vetor
                            </span>
                          </div>

                          {/* Live Visual Typography Preview Box */}
                          <div
                            className="w-full h-16 bg-[#131316] rounded-xl flex items-center justify-center p-2 overflow-hidden border border-[#24252d] group-hover:border-purple-500/40 transition-all"
                            style={{
                              fontFamily: preset.fontFamily,
                              color: preset.color,
                              WebkitTextStroke: preset.strokeWidth
                                ? `${preset.strokeWidth / 2}px ${preset.strokeColor || '#fff'}`
                                : 'none',
                            }}
                          >
                            <span
                              className="text-lg font-bold text-center truncate max-w-full group-hover:scale-105 transition-transform"
                              style={{
                                filter: preset.shadowColor
                                  ? `drop-shadow(0px 2px 4px ${preset.shadowColor})`
                                  : 'none',
                              }}
                            >
                              {preset.content}
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-gray-400">
                            <span className="truncate font-medium">{preset.title}</span>
                            <span className="text-purple-400 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                              <span>Adicionar</span>
                              <Plus className="w-3 h-3" />
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* SUB-TAB 2: BIBLIOTECA DE FONTES VETORIAIS */}
                {textSubTab === 'fonts' && (
                  <div className="space-y-3">
                    <span className="text-[11px] font-bold text-purple-300 uppercase tracking-wider block">
                      Biblioteca de Fontes Google & Sublimação
                    </span>

                    {/* Font Search */}
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Buscar fonte (ex: Pacifico, Bebas, Lobster)..."
                        value={fontSearchQuery}
                        onChange={(e) => setFontSearchQuery(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 bg-[#202127] border border-[#30313a] focus:border-purple-500 rounded-xl text-xs text-white placeholder-gray-500 outline-none transition-all"
                      />
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex gap-1 overflow-x-auto pb-1 no-scrollbar text-[10px]">
                      <button
                        onClick={() => setSelectedFontCategory('all')}
                        className={`px-2 py-0.5 rounded-full whitespace-nowrap transition-all cursor-pointer font-medium ${
                          selectedFontCategory === 'all'
                            ? 'bg-purple-600 text-white font-bold'
                            : 'bg-[#202127] text-gray-400 hover:text-white border border-[#30313a]'
                        }`}
                      >
                        Todas
                      </button>
                      {[
                        { id: 'script', name: 'Caligrafia' },
                        { id: 'impact', name: 'Impacto' },
                        { id: 'vintage', name: 'Retro/Fun' },
                        { id: 'serif', name: 'Elegante' },
                        { id: 'clean', name: 'Clean' },
                      ].map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedFontCategory(cat.id)}
                          className={`px-2 py-0.5 rounded-full whitespace-nowrap transition-all cursor-pointer font-medium ${
                            selectedFontCategory === cat.id
                              ? 'bg-purple-600 text-white font-bold'
                              : 'bg-[#202127] text-gray-400 hover:text-white border border-[#30313a]'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>

                    {/* Font Cards List */}
                    <div className="space-y-2">
                      {VECTOR_FONTS.filter(
                        (f) =>
                          (selectedFontCategory === 'all' || f.category === selectedFontCategory) &&
                          (!fontSearchQuery ||
                            f.name.toLowerCase().includes(fontSearchQuery.toLowerCase()) ||
                            f.sampleText.toLowerCase().includes(fontSearchQuery.toLowerCase()))
                      ).map((font) => (
                        <div
                          key={font.id}
                          className="p-3 bg-[#1e1f26] border border-[#2d2e38] hover:border-purple-500/60 rounded-xl transition-all flex flex-col gap-2 group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-gray-200">{font.name}</span>
                            <span className="text-[9px] text-gray-400 bg-[#262732] px-2 py-0.5 rounded-full border border-[#343542]">
                              {font.categoryLabel}
                            </span>
                          </div>

                          {/* Typography Sample Render */}
                          <div
                            className="text-xl font-medium text-white py-2 px-3 bg-[#0d0e12] rounded-xl border border-[#2d2f40] truncate drop-shadow-sm tracking-wide"
                            style={{ fontFamily: font.fontFamily }}
                          >
                            {font.sampleText}
                          </div>

                          {/* Action Button */}
                          <button
                            onClick={() => {
                              const activeL = layers.find((l) => l.id === activeLayerId);
                              if (activeL && activeL.type === 'text') {
                                onUpdateLayer({ ...activeL, fontFamily: font.fontFamily });
                              } else {
                                onAddLayer('text', undefined, 'straight', font.fontFamily);
                              }
                            }}
                            className="w-full py-1.5 bg-purple-600/80 hover:bg-purple-600 text-white font-bold text-[10px] rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                            <span>
                              {activeLayerId && layers.find((l) => l.id === activeLayerId)?.type === 'text'
                                ? 'Aplicar Fonte ao Texto Selecionado'
                                : 'Inserir Texto com esta Fonte'}
                            </span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SUB-TAB 3: QUICK TEXT ADDITION */}
                {textSubTab === 'quick' && (
                  <div className="space-y-3">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                      Inserir Bloco de Texto Simples
                    </span>

                    {/* Add Heading Button */}
                    <button
                      onClick={() => onAddLayer('text')}
                      className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-lg rounded-xl shadow-lg transition-all text-left flex items-center justify-between cursor-pointer active:scale-95"
                    >
                      <span>Adicionar um título</span>
                      <Plus className="w-5 h-5" />
                    </button>

                    {/* Add Subheading Button */}
                    <button
                      onClick={() => onAddLayer('text')}
                      className="w-full py-2.5 px-4 bg-[#202127] hover:bg-[#2a2b33] border border-[#30313a] text-white font-bold text-sm rounded-xl transition-all text-left flex items-center justify-between cursor-pointer"
                    >
                      <span>Adicionar um subtítulo</span>
                      <Plus className="w-4 h-4 text-purple-400" />
                    </button>

                    {/* Add Body Text */}
                    <button
                      onClick={() => onAddLayer('text')}
                      className="w-full py-2 px-4 bg-[#202127] hover:bg-[#2a2b33] border border-[#30313a] text-gray-300 hover:text-white font-medium text-xs rounded-xl transition-all text-left flex items-center justify-between cursor-pointer"
                    >
                      <span>Adicionar um pouquinho de texto</span>
                      <Plus className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                )}

                {/* SUB-TAB 4: SUBLIMATION TEXT WARP & CURVED PRESETS */}
                {textSubTab === 'warp' && (
                  <div className="space-y-3">
                    <span className="text-[11px] font-bold text-purple-300 uppercase tracking-wider block">
                      Estilos e Deformações Sublimáticas
                    </span>

                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        onClick={() => handleApplyTextWarp('arc_upper')}
                        className="p-3 bg-[#181922] hover:bg-[#212330] border border-purple-500/40 hover:border-purple-400 rounded-xl text-left flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.02] group shadow-md"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-extrabold text-white text-xs tracking-wide group-hover:text-purple-300 transition-colors">
                            Arco de Caneca
                          </span>
                          <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded font-bold border border-purple-500/30">
                            Arco
                          </span>
                        </div>
                        <div className="my-1 py-1.5 px-2 bg-[#0d0e14] rounded-lg border border-[#2d2f42] text-center overflow-hidden">
                          <span className="text-sm font-black text-purple-300 inline-block transform -rotate-2 tracking-widest drop-shadow-sm">
                            CANECAS
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-300 font-medium mt-1">Curva Arco Superior</span>
                      </button>

                      <button
                        onClick={() => handleApplyTextWarp('wave')}
                        className="p-3 bg-[#181922] hover:bg-[#212330] border border-cyan-500/40 hover:border-cyan-400 rounded-xl text-left flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.02] group shadow-md"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-extrabold text-white text-xs tracking-wide group-hover:text-cyan-300 transition-colors">
                            Onda Senoidal
                          </span>
                          <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded font-bold border border-cyan-500/30">
                            Onda
                          </span>
                        </div>
                        <div className="my-1 py-1.5 px-2 bg-[#0d0e14] rounded-lg border border-[#2d2f42] text-center overflow-hidden">
                          <span className="text-sm font-black text-cyan-300 inline-block tracking-widest drop-shadow-sm">
                            W A V E
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-300 font-medium mt-1">Efeito Curva Mar</span>
                      </button>

                      <button
                        onClick={() => handleApplyTextWarp('logo_circle')}
                        className="p-3 bg-[#181922] hover:bg-[#212330] border border-amber-500/40 hover:border-amber-400 rounded-xl text-left flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.02] group shadow-md"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-extrabold text-white text-xs tracking-wide group-hover:text-amber-300 transition-colors">
                            Circular Logo
                          </span>
                          <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-bold border border-amber-500/30">
                            360°
                          </span>
                        </div>
                        <div className="my-1 py-1.5 px-2 bg-[#0d0e14] rounded-lg border border-[#2d2f42] text-center overflow-hidden">
                          <span className="text-sm font-black text-amber-300 inline-block tracking-widest drop-shadow-sm">
                            CIRCULAR
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-300 font-medium mt-1">Anel Guiado 360°</span>
                      </button>

                      <button
                        onClick={() => handleApplyTextWarp('stamp_style')}
                        className="p-3 bg-[#181922] hover:bg-[#212330] border border-emerald-500/40 hover:border-emerald-400 rounded-xl text-left flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.02] group shadow-md"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-extrabold text-white text-xs tracking-wide group-hover:text-emerald-300 transition-colors">
                            Selo & Carimbo
                          </span>
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold border border-emerald-500/30">
                            Selo
                          </span>
                        </div>
                        <div className="my-1 py-1.5 px-2 bg-[#0d0e14] rounded-lg border border-[#2d2f42] text-center overflow-hidden">
                          <span className="text-sm font-black text-emerald-300 inline-block tracking-widest uppercase drop-shadow-sm">
                            VINTAGE
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-300 font-medium mt-1">Moldura Vintage</span>
                      </button>

                      <button
                        onClick={() => handleApplyTextWarp('heart')}
                        className="p-3 bg-[#181922] hover:bg-[#212330] border border-rose-500/40 hover:border-rose-400 rounded-xl text-left flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.02] group shadow-md"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-extrabold text-white text-xs tracking-wide group-hover:text-rose-300 transition-colors">
                            Forma Coração
                          </span>
                          <span className="text-[10px] bg-rose-500/20 text-rose-300 px-1.5 py-0.5 rounded font-bold border border-rose-500/30">
                            Amor
                          </span>
                        </div>
                        <div className="my-1 py-1.5 px-2 bg-[#0d0e14] rounded-lg border border-[#2d2f42] text-center overflow-hidden">
                          <span className="text-sm font-black text-rose-300 inline-block tracking-widest drop-shadow-sm">
                            AMOR
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-300 font-medium mt-1">Especial Dia das Mães</span>
                      </button>

                      <button
                        onClick={() => handleApplyTextWarp('bulge')}
                        className="p-3 bg-[#181922] hover:bg-[#212330] border border-indigo-500/40 hover:border-indigo-400 rounded-xl text-left flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.02] group shadow-md"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-extrabold text-white text-xs tracking-wide group-hover:text-indigo-300 transition-colors">
                            Inflar (Bulge)
                          </span>
                          <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded font-bold border border-indigo-500/30">
                            3D
                          </span>
                        </div>
                        <div className="my-1 py-1.5 px-2 bg-[#0d0e14] rounded-lg border border-[#2d2f42] text-center overflow-hidden">
                          <span className="text-sm font-black text-indigo-300 inline-block tracking-widest scale-110 drop-shadow-sm">
                            INFLAR
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-300 font-medium mt-1">Volume 3D Centro</span>
                      </button>

                      <button
                        onClick={() => handleApplyTextWarp('emblem')}
                        className="p-3 bg-[#181922] hover:bg-[#212330] border border-yellow-500/40 hover:border-yellow-400 rounded-xl text-left flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.02] group shadow-md"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-extrabold text-white text-xs tracking-wide group-hover:text-yellow-300 transition-colors">
                            Emblema / Escudo
                          </span>
                          <span className="text-[10px] bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded font-bold border border-yellow-500/30">
                            Time
                          </span>
                        </div>
                        <div className="my-1 py-1.5 px-2 bg-[#0d0e14] rounded-lg border border-[#2d2f42] text-center overflow-hidden">
                          <span className="text-sm font-black text-yellow-300 inline-block tracking-widest drop-shadow-sm">
                            BRASÃO
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-300 font-medium mt-1">Brasão de Time</span>
                      </button>

                      <button
                        onClick={() => handleApplyTextWarp('ribbon')}
                        className="p-3 bg-[#181922] hover:bg-[#212330] border border-teal-500/40 hover:border-teal-400 rounded-xl text-left flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.02] group shadow-md"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-extrabold text-white text-xs tracking-wide group-hover:text-teal-300 transition-colors">
                            Faixa Ribbon
                          </span>
                          <span className="text-[10px] bg-teal-500/20 text-teal-300 px-1.5 py-0.5 rounded font-bold border border-teal-500/30">
                            Fita
                          </span>
                        </div>
                        <div className="my-1 py-1.5 px-2 bg-[#0d0e14] rounded-lg border border-[#2d2f42] text-center overflow-hidden">
                          <span className="text-sm font-black text-teal-300 inline-block tracking-widest drop-shadow-sm">
                            RIBBON
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-300 font-medium mt-1">Efeito Fita Curva</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 4: UPLOADS & PHOTOS */}
            {activeTab === 'uploads' && (
              <div className="space-y-4">
                {/* Upload Image Button */}
                <label className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <Upload className="w-4 h-4" />
                  <span>Fazer Upload de Imagem</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>

                <div className="border-t border-[#26272e] pt-3">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                    Galeria de Fundos Sublimáticos HD
                  </span>

                  <div className="grid grid-cols-2 gap-2">
                    {stockPhotos.map((photo) => (
                      <div
                        key={photo.id}
                        onClick={() => {
                          if (onAddAIGeneratedImage) {
                            onAddAIGeneratedImage(photo.url, photo.tag);
                          }
                        }}
                        className="group relative h-24 rounded-xl overflow-hidden border border-[#2d2e36] hover:border-purple-500 cursor-pointer shadow-sm transition-all hover:scale-105"
                      >
                        <img src={photo.url} alt={photo.tag} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors p-2 flex items-end">
                          <span className="text-white text-[10px] font-semibold">{photo.tag}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: PRODUCTS */}
            {activeTab === 'products' && (
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                  Escolha o Produto para Criar
                </span>

                <div className="grid grid-cols-1 gap-2">
                  {PRODUCTS_LIBRARY.map((prod) => {
                    const isSelected = currentProduct.id === prod.id;
                    return (
                      <div
                        key={prod.id}
                        onClick={() => onSelectProduct(prod)}
                        className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                          isSelected
                            ? 'bg-purple-600/20 border-purple-500 text-white shadow-lg shadow-purple-500/10'
                            : 'bg-[#202127] border-[#30313a] text-gray-300 hover:bg-[#2a2b33] hover:text-white'
                        }`}
                      >
                        <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 font-bold shrink-0">
                          <ProductIcon product={prod} className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs truncate">{prod.name}</span>
                            {isSelected && (
                              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            )}
                          </div>
                          <span className="text-[10px] text-gray-400 block font-mono">
                            {prod.printAspect}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 6: AI STUDIO */}
            {activeTab === 'ai' && (
              <div className="space-y-4">
                <div className="p-3 bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-sky-900/40 border border-purple-500/40 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-purple-300 font-bold text-xs">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span>Estúdio IA Generativo</span>
                  </div>
                  <p className="text-[11px] text-gray-300">
                    Crie estampas exclusivas em 300 DPI por comando de voz ou texto, remova fundos e vetorize.
                  </p>
                  <button
                    onClick={() => {
                      if (onOpenAIPanel) onOpenAIPanel();
                    }}
                    className="w-full py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Wand2 className="w-3.5 h-3.5" />
                    <span>Abrir Painel IA Completo</span>
                  </button>
                </div>

                <div className="space-y-2 border-t border-[#26272e] pt-3">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                    Ferramentas de Imagem IA
                  </span>

                  <button
                    onClick={() => onSelectTool('remove_bg')}
                    className="w-full p-2.5 bg-[#202127] hover:bg-[#2a2b33] border border-[#30313a] rounded-xl text-left flex items-center gap-2.5 transition-all text-xs font-semibold text-gray-200"
                  >
                    <Wand2 className="w-4 h-4 text-purple-400" />
                    <span>Remover Fundo da Imagem</span>
                  </button>

                  <button
                    onClick={() => onSelectTool('vectorize')}
                    className="w-full p-2.5 bg-[#202127] hover:bg-[#2a2b33] border border-[#30313a] rounded-xl text-left flex items-center gap-2.5 transition-all text-xs font-semibold text-gray-200"
                  >
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    <span>Vetorizar Imagem para Sublimação</span>
                  </button>

                  <button
                    onClick={() => onSelectTool('upscale')}
                    className="w-full p-2.5 bg-[#202127] hover:bg-[#2a2b33] border border-[#30313a] rounded-xl text-left flex items-center gap-2.5 transition-all text-xs font-semibold text-gray-200"
                  >
                    <Maximize2 className="w-4 h-4 text-amber-400" />
                    <span>Upscale IA 300 DPI Impressão</span>
                  </button>
                </div>
              </div>
            )}

            {/* TAB 7: LAYERS */}
            {activeTab === 'layers' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-[#26272e]">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    Camadas na Tela ({layers.length})
                  </span>
                  <button
                    onClick={() => onAddLayer('text')}
                    className="p-1 hover:bg-white/10 text-purple-400 rounded transition-colors"
                    title="Adicionar Nova Camada"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-1.5">
                  {layers.slice().reverse().map((layer) => {
                    const isSelected = activeLayerId === layer.id;
                    return (
                      <div
                        key={layer.id}
                        onClick={() => onSelectLayer(layer.id)}
                        className={`p-2.5 rounded-xl border flex items-center justify-between gap-2 cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-purple-600/20 border-purple-500 text-white shadow-md'
                            : 'bg-[#202127] border-[#30313a] text-gray-300 hover:bg-[#2a2b33]'
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-xs font-bold truncate max-w-[140px]">
                            {layer.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          {/* Visibility Toggle */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onUpdateLayer({ ...layer, visible: !layer.visible });
                            }}
                            className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white"
                          >
                            {layer.visible ? <Eye className="w-3.5 h-3.5 text-purple-400" /> : <EyeOff className="w-3.5 h-3.5 text-gray-600" />}
                          </button>

                          {/* Lock Toggle */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onUpdateLayer({ ...layer, locked: !layer.locked });
                            }}
                            className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white"
                          >
                            {layer.locked ? <Lock className="w-3.5 h-3.5 text-amber-400" /> : <Unlock className="w-3.5 h-3.5 text-gray-500" />}
                          </button>

                          {/* Delete */}
                          {onDeleteLayer && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onDeleteLayer(layer.id);
                              }}
                              className="p-1 hover:bg-red-500/20 text-gray-400 hover:text-red-300 rounded"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export const LeftToolBar = LeftToolbar;
export default LeftToolbar;
