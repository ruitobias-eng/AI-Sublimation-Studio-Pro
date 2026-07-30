export type WorkspaceViewMode = 'split' | 'canvas' | 'mockup';

export type ToolType = 
  | 'select'
  | 'move'
  | 'crop'
  | 'pen'
  | 'brush'
  | 'eraser'
  | 'stamp'
  | 'text'
  | 'shapes'
  | 'gradient'
  | 'eyedropper'
  | 'masks'
  | 'layers'
  | 'smart_object'
  | 'vectorize'
  | 'remove_bg'
  | 'upscale'
  | 'generative_fill'
  | 'object_replace';

export type ShapeType = 'rectangle' | 'circle' | 'polygon' | 'star' | 'badge' | 'heart';

export type BlendMode = 
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'soft-light'
  | 'hard-light'
  | 'color-burn'
  | 'color-dodge'
  | 'darken'
  | 'lighten'
  | 'difference';

export type TextWarpCategory = 'basics' | 'curves' | 'shapes' | 'perspective' | 'effects' | 'decorative';

export type TextWarpStyle =
  // Básicos
  | 'straight'
  | 'arc_upper'
  | 'arc_lower'
  | 'circle'
  | 'semi_circle'
  // Curvas
  | 'wave'
  | 'smile'
  | 'frown'
  | 's_curve'
  | 'spiral'
  // Formas
  | 'heart'
  | 'star'
  | 'oval'
  | 'vertical_ellipse'
  | 'diamond'
  // Perspectiva
  | 'trapezoid'
  | 'perspective_left'
  | 'perspective_right'
  | 'perspective_center'
  | 'arc_3d'
  // Efeitos
  | 'flag'
  | 'bulge'
  | 'pinch'
  | 'fish_eye'
  | 'flex_arc'
  // Texto Decorativo
  | 'logo_circle'
  | 'seal'
  | 'stamp_style'
  | 'emblem'
  | 'ribbon';

export type LayerType = 'image' | 'text' | 'shape' | 'brush' | 'smart' | 'group';

export interface LayerFilters {
  brightness: number; // -100 to 100
  contrast: number;   // -100 to 100
  saturation: number; // -100 to 100
  hue: number;        // -180 to 180
  blur: number;       // 0 to 20
  vibrance: number;   // -100 to 100
}

export interface Layer {
  id: string;
  name: string;
  type: LayerType;
  visible: boolean;
  locked: boolean;
  opacity: number; // 0 to 100
  blendMode: BlendMode;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  content: string; // Image src base64/url, text string, shape data, or SVG
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: string;
  textAlign?: 'left' | 'center' | 'right';
  textCurved?: boolean;
  curveRadius?: number;
  textWarpStyle?: TextWarpStyle;
  warpIntensity?: number;
  shapeType?: ShapeType;
  strokeColor?: string;
  strokeWidth?: number;
  shadowColor?: string;
  shadowBlur?: number;
  gradient?: {
    type: 'linear' | 'radial';
    colors: string[];
    angle: number;
  };
  maskUrl?: string;
  isSmartObject?: boolean;
  flipX?: boolean;
  flipY?: boolean;
  children?: Layer[];
  filters?: LayerFilters;
}

export interface SublimationProduct {
  id: string;
  name: string;
  category: string;
  defaultWidthCm: number;
  defaultHeightCm: number;
  printAspect: string; // e.g. "20 x 9.5 cm"
  model3D: 'mug' | 'tshirt' | 'bottle' | 'tumbler' | 'mousepad' | 'ecobag' | 'cap' | 'tile' | 'pillow' | 'puzzle' | 'phonecase' | 'coaster';
  description: string;
  bgColor: string;
  material: string;
  samplePrints: string[];
}

export interface AIPromptParams {
  prompt: string;
  negativePrompt: string;
  model: string;
  guidanceScale: number;
  seed: number;
  upscaleFactor: number;
  creativity: number;
  seamlessPattern: boolean;
  colorReplaceFrom?: string;
  colorReplaceTo?: string;
}

export interface HistoryStep {
  id: string;
  description: string;
  toolName: string;
  timestamp: Date;
  layers: Layer[];
}

export interface ExportConfig {
  format: 'png' | 'jpg' | 'pdf' | 'svg' | 'psd' | 'tiff';
  colorSpace: 'CMYK' | 'RGB';
  dpi: 300 | 150 | 72;
  transparentBg: boolean;
  mirrorHorizontal: boolean; // Essential for sublimation transfer paper
  physicalWidthCm: number;
  physicalHeightCm: number;
}

export interface Environment3DConfig {
  hdri: 'studio' | 'outdoor' | 'neon' | 'warm';
  showShadows: boolean;
  showReflections: boolean;
  ambientOcclusion: boolean;
  depthOfField: number;
  autoRotate: boolean;
  showBleedLine: boolean;
  roughness: number;
  metalness: number;
}
