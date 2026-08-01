import React, { useRef, useEffect, useState } from 'react';
import { Layer, ToolType, ShapeType, SublimationProduct, LayerFilters } from '../types';
import { drawWarpedText } from '../utils/textWarp';
import { drawVectorShape } from '../utils/shapeDrawer';
import { ImageAdjustmentModal } from './ImageAdjustmentModal';
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Move,
  Grid,
  FlipHorizontal,
  FlipVertical,
  Eye,
  EyeOff,
  Trash2,
  Copy,
  RotateCw,
  ArrowUpToLine,
  ArrowDownToLine,
  ChevronUp,
  ChevronDown,
  Lock,
  Unlock,
  AlignCenter,
  Layers,
  Square,
  Sparkles,
  Maximize,
  Sliders,
  Crop,
  Wand2,
  Download,
  Scissors,
  Zap,
  RotateCcw,
  Tablet,
  Smartphone,
  Laptop,
  Monitor,
  Plus,
  Minus,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Target,
  X
} from 'lucide-react';

interface CanvasAreaProps {
  product: SublimationProduct;
  layers: Layer[];
  activeLayerId: string | null;
  onSelectLayer: (id: string | null) => void;
  onUpdateLayer: (updatedLayer: Layer) => void;
  onDeleteLayer?: (id: string) => void;
  onDuplicateLayer?: (id: string) => void;
  onReorderLayers?: (reorderedLayers: Layer[]) => void;
  onToggleLock?: (id: string) => void;
  onToggleVisibility?: (id: string) => void;
  onChangeColor?: (color: string) => void;
  onUndo?: () => void;
  onRedo?: () => void;
  pushHistoryStep?: (description: string, toolName: string, updatedLayers: Layer[]) => void;
  activeTool: ToolType;
  selectedShape: ShapeType;
  activeColor: string;
  brushSize: number;
  mirrorSublimation: boolean;
  showGrid: boolean;
  showRulers: boolean;
  onCanvasRendered: (canvas: HTMLCanvasElement) => void;
  theme?: 'dark' | 'light';
}

export const CanvasArea: React.FC<CanvasAreaProps> = ({
  product,
  layers,
  activeLayerId,
  onSelectLayer,
  onUpdateLayer,
  onDeleteLayer,
  onDuplicateLayer,
  onReorderLayers,
  onToggleLock,
  onToggleVisibility,
  onChangeColor,
  onUndo,
  onRedo,
  pushHistoryStep,
  activeTool,
  selectedShape,
  activeColor,
  brushSize,
  mirrorSublimation,
  showGrid,
  showRulers,
  onCanvasRendered,
  theme = 'dark',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Pan and Zoom infinite canvas transform states
  const [zoom, setZoom] = useState(1.0);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [showTouchPad, setShowTouchPad] = useState<boolean>(true);

  // Mouse interaction state
  const isPanningRef = useRef(false);
  const panStartRef = useRef({ x: 0, y: 0 });

  const isDrawingRef = useRef(false);
  const currentPathRef = useRef<{ x: number; y: number }[]>([]);

  // Dragging or Transforming an Active Layer
  const isDraggingLayerRef = useRef(false);
  const layerDragOffsetRef = useRef({ x: 0, y: 0 });
  const isResizingModeRef = useRef<'tl' | 'tr' | 'bl' | 'br' | 'tc' | 'bc' | 'lc' | 'rc' | 'rotate' | null>(null);
  const resizeStartRef = useRef<{ mouseX: number; mouseY: number; x: number; y: number; w: number; h: number; rot: number; aspect: number } | null>(null);

  // Smart Alignment Guides State
  const activeGuidesRef = useRef<{ x?: number; y?: number }>({});

  // Touch Gesture & Multi-Touch State
  const activeTouchesRef = useRef<{ id: number; x: number; y: number }[]>([]);
  const initialPinchDistRef = useRef<number | null>(null);
  const initialPinchAngleRef = useRef<number | null>(null);
  const initialTouchLayerRotRef = useRef<number | null>(null);
  const touchStartPosRef = useRef<{ x: number; y: number } | null>(null);
  const longPressTimerRef = useRef<any>(null);
  const lastTapTimeRef = useRef<number>(0);
  const lastTapLayerIdRef = useRef<string | null>(null);

  // Image Adjustment Modal State
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  const [modalDefaultTab, setModalDefaultTab] = useState<'adjustments' | 'crop' | 'filters' | 'smart'>('adjustments');

  // Dynamic Mouse Cursor State
  const [cursorStyle, setCursorStyle] = useState<string>('crosshair');

  // Context Menu State
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    layerId: string | null;
  } | null>(null);

  useEffect(() => {
    const handleGlobalClick = () => {
      if (contextMenu) {
        setContextMenu(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setContextMenu(null);
      }
    };

    window.addEventListener('click', handleGlobalClick);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [contextMenu]);

  // Context Menu Action Handlers
  const handleBringToFront = (id: string) => {
    if (!onReorderLayers) return;
    const index = layers.findIndex((l) => l.id === id);
    if (index === -1 || index === layers.length - 1) return;
    const newLayers = [...layers];
    const [removed] = newLayers.splice(index, 1);
    newLayers.push(removed);
    onReorderLayers(newLayers);
    setContextMenu(null);
  };

  const handleSendToBack = (id: string) => {
    if (!onReorderLayers) return;
    const index = layers.findIndex((l) => l.id === id);
    if (index === -1 || index === 0) return;
    const newLayers = [...layers];
    const [removed] = newLayers.splice(index, 1);
    newLayers.unshift(removed);
    onReorderLayers(newLayers);
    setContextMenu(null);
  };

  const handleBringForward = (id: string) => {
    if (!onReorderLayers) return;
    const index = layers.findIndex((l) => l.id === id);
    if (index === -1 || index === layers.length - 1) return;
    const newLayers = [...layers];
    const temp = newLayers[index];
    newLayers[index] = newLayers[index + 1];
    newLayers[index + 1] = temp;
    onReorderLayers(newLayers);
    setContextMenu(null);
  };

  const handleSendBackward = (id: string) => {
    if (!onReorderLayers) return;
    const index = layers.findIndex((l) => l.id === id);
    if (index === -1 || index === 0) return;
    const newLayers = [...layers];
    const temp = newLayers[index];
    newLayers[index] = newLayers[index - 1];
    newLayers[index - 1] = temp;
    onReorderLayers(newLayers);
    setContextMenu(null);
  };

  const handleCenterLayer = (id: string) => {
    const layer = layers.find((l) => l.id === id);
    if (!layer) return;
    const printWidth = Math.round((product.defaultWidthCm / 2.54) * 150);
    const printHeight = Math.round((product.defaultHeightCm / 2.54) * 150);
    onUpdateLayer({
      ...layer,
      x: Math.round((printWidth - layer.width) / 2),
      y: Math.round((printHeight - layer.height) / 2),
    });
    setContextMenu(null);
  };

  const handleFlipHorizontal = (id: string) => {
    const layer = layers.find((l) => l.id === id);
    if (!layer) return;
    onUpdateLayer({
      ...layer,
      flipX: !layer.flipX,
    });
    setContextMenu(null);
  };

  const handleFlipVertical = (id: string) => {
    const layer = layers.find((l) => l.id === id);
    if (!layer) return;
    onUpdateLayer({
      ...layer,
      flipY: !layer.flipY,
    });
    setContextMenu(null);
  };

  const handleFillPrintArea = (id: string) => {
    const layer = layers.find((l) => l.id === id);
    if (!layer) return;
    const printWidth = Math.round((product.defaultWidthCm / 2.54) * 150);
    const printHeight = Math.round((product.defaultHeightCm / 2.54) * 150);
    onUpdateLayer({
      ...layer,
      x: 0,
      y: 0,
      width: printWidth,
      height: printHeight,
    });
    setContextMenu(null);
  };

  // Device-Specific Image / Layer Resizing Handlers (Tablet, Android, macOS)
  const handleResizeForDevice = (id: string, device: 'tablet' | 'android' | 'macos' | 'fit') => {
    const layer = layers.find((l) => l.id === id);
    if (!layer) return;

    const printWidth = Math.round((product.defaultWidthCm / 2.54) * 150);
    const printHeight = Math.round((product.defaultHeightCm / 2.54) * 150);

    let targetW = layer.width;
    let targetH = layer.height;

    // Preserve aspect ratio if layer has valid dimensions
    const currentAspect = layer.width / (layer.height || 1);

    if (device === 'tablet') {
      // Tablet format (iPad / Android Tablet 4:3 target)
      targetW = Math.min(800, Math.round(printWidth * 0.65));
      targetH = Math.round(targetW / (currentAspect || (4 / 3)));
      if (targetH > printHeight * 0.8) {
        targetH = Math.round(printHeight * 0.8);
        targetW = Math.round(targetH * (currentAspect || (4 / 3)));
      }
    } else if (device === 'android') {
      // Android Mobile format (9:16 vertical ratio)
      targetW = Math.min(480, Math.round(printWidth * 0.45));
      targetH = Math.round(targetW / (currentAspect || (9 / 16)));
      if (targetH > printHeight * 0.85) {
        targetH = Math.round(printHeight * 0.85);
        targetW = Math.round(targetH * (currentAspect || (9 / 16)));
      }
    } else if (device === 'macos') {
      // macOS / Laptop Retina format (16:10 or desktop ratio)
      targetW = Math.min(1280, Math.round(printWidth * 0.90));
      targetH = Math.round(targetW / (currentAspect || (16 / 10)));
      if (targetH > printHeight * 0.9) {
        targetH = Math.round(printHeight * 0.9);
        targetW = Math.round(targetH * (currentAspect || (16 / 10)));
      }
    } else if (device === 'fit') {
      // Fit completely within print canvas
      targetW = printWidth;
      targetH = printHeight;
    }

    // Center resized layer in print canvas
    const newX = Math.round((printWidth - targetW) / 2);
    const newY = Math.round((printHeight - targetH) / 2);

    const updated = {
      ...layer,
      x: newX,
      y: newY,
      width: Math.max(50, targetW),
      height: Math.max(50, targetH),
    };

    onUpdateLayer(updated);
    if (pushHistoryStep) {
      const label = device === 'tablet' ? 'Tablet (iPad)' : device === 'android' ? 'Android Mobile' : device === 'macos' ? 'macOS Retina' : 'Área Total';
      const newLayers = layers.map((l) => (l.id === updated.id ? updated : l));
      pushHistoryStep(`Redimensionado para ${label}`, 'Redimensionar', newLayers);
    }
    setContextMenu(null);
  };

  // Incremental Scale Handler (+ and - buttons) for selected layer/element
  const handleScaleActiveLayer = (deltaPercent: number) => {
    if (!activeLayerId) return;
    const activeL = layers.find((l) => l.id === activeLayerId);
    if (!activeL) return;

    const factor = 1 + deltaPercent / 100;
    const newW = Math.max(20, Math.round(activeL.width * factor));
    const newH = Math.max(20, Math.round(activeL.height * factor));

    // Center expansion / contraction
    const dx = Math.round((newW - activeL.width) / 2);
    const dy = Math.round((newH - activeL.height) / 2);

    const updated: Layer = {
      ...activeL,
      width: newW,
      height: newH,
      x: Math.round(activeL.x - dx),
      y: Math.round(activeL.y - dy),
    };

    // Scale font size proportionally for text layers
    if (activeL.type === 'text' && activeL.fontSize) {
      updated.fontSize = Math.max(8, Math.round(activeL.fontSize * factor));
    }

    onUpdateLayer(updated);

    if (pushHistoryStep) {
      const direction = deltaPercent > 0 ? 'Aumentado (+10%)' : 'Diminuído (-10%)';
      const newLayers = layers.map((l) => (l.id === updated.id ? updated : l));
      pushHistoryStep(`Item ${direction}`, 'Redimensionar', newLayers);
    }
  };

  // Directional Position Nudge Handler for Mobile Touch / Arrow Buttons
  const handleMoveActiveLayer = (dx: number, dy: number) => {
    if (!activeLayerId) return;
    const activeL = layers.find((l) => l.id === activeLayerId);
    if (!activeL) return;

    const updated: Layer = {
      ...activeL,
      x: Math.round(activeL.x + dx),
      y: Math.round(activeL.y + dy),
    };

    onUpdateLayer(updated);

    if (pushHistoryStep) {
      const newLayers = layers.map((l) => (l.id === updated.id ? updated : l));
      pushHistoryStep('Item Movido', 'Mover', newLayers);
    }
  };

  // Export selected layer object as PNG
  const handleExportLayerAsImage = (id: string) => {
    const layer = layers.find((l) => l.id === id);
    if (!layer) return;

    const exportCanvas = document.createElement('canvas');
    exportCanvas.width = layer.width;
    exportCanvas.height = layer.height;
    const ctx = exportCanvas.getContext('2d');
    if (!ctx) return;

    if (layer.content && (layer.type === 'image' || layer.type === 'smart')) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = layer.content;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, layer.width, layer.height);
        const link = document.createElement('a');
        link.download = `${layer.name.toLowerCase().replace(/\s+/g, '_')}.png`;
        link.href = exportCanvas.toDataURL('image/png');
        link.click();
      };
    }
  };

  const handleContextMenu = (e: React.MouseEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    // Search top-to-bottom for layer clicked
    const clickedLayer = [...layers].reverse().find((layer) => {
      if (!layer.visible) return false;
      return (
        mouseX >= layer.x &&
        mouseX <= layer.x + layer.width &&
        mouseY >= layer.y &&
        mouseY <= layer.y + layer.height
      );
    });

    if (clickedLayer) {
      onSelectLayer(clickedLayer.id);
      setContextMenu({
        x: e.clientX,
        y: e.clientY,
        layerId: clickedLayer.id,
      });
    } else {
      setContextMenu({
        x: e.clientX,
        y: e.clientY,
        layerId: activeLayerId,
      });
    }
  };

  // Physical Printable Area Dimensions mapped to pixel canvas
  const baseCanvasWidth = Math.round((product.defaultWidthCm / 2.54) * 150); // High res canvas
  const baseCanvasHeight = Math.round((product.defaultHeightCm / 2.54) * 150);

  // Image cache to prevent recreating HTMLImageElement on every render
  const imageCacheRef = useRef<Map<string, HTMLImageElement>>(new Map());

  // Auto-Fit canvas to viewport container
  const fitToScreen = () => {
    if (!containerRef.current) return;
    const cWidth = containerRef.current.clientWidth - 80;
    const cHeight = containerRef.current.clientHeight - 80;
    if (cWidth <= 0 || cHeight <= 0) return;

    const scaleX = cWidth / baseCanvasWidth;
    const scaleY = cHeight / baseCanvasHeight;
    const fitZoom = Math.min(scaleX, scaleY, 1.2);

    setZoom(Math.max(0.15, Math.round(fitZoom * 100) / 100));
    setPan({ x: 0, y: 0 });
  };

  const handleWheelContainer = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.ctrlKey || e.metaKey || true) {
      const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
      setZoom((prev) => {
        const next = Math.min(4.0, Math.max(0.1, prev * zoomFactor));
        return Math.round(next * 100) / 100;
      });
    }
  };

  // TOUCH GESTURE HANDLERS (1, 2, 3 fingers)
  const handleTouchStartContainer = (e: React.TouchEvent<HTMLDivElement>) => {
    const touches = Array.from(e.touches) as React.Touch[];

    // 3 Finger Touch -> Undo or Reset Zoom
    if (touches.length === 3) {
      if (longPressTimerRef.current) clearTimeout(longPressTimerRef.current);
      if (onUndo) {
        onUndo();
      } else {
        fitToScreen();
      }
      if ('vibrate' in navigator) navigator.vibrate?.([30, 20, 30]);
      return;
    }

    // 2 Finger Touch -> Pinch Zoom + 2-Finger Pan + 2-Finger Layer Rotation
    if (touches.length === 2) {
      if (longPressTimerRef.current) clearTimeout(longPressTimerRef.current);

      const t1 = touches[0];
      const t2 = touches[1];

      const dist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
      const angle = Math.atan2(t2.clientY - t1.clientY, t2.clientX - t1.clientX) * (180 / Math.PI);

      initialPinchDistRef.current = dist;
      initialPinchAngleRef.current = angle;

      const activeL = layers.find((l) => l.id === activeLayerId);
      if (activeL) {
        initialTouchLayerRotRef.current = activeL.rotation;
      }
      return;
    }

    // 1 Finger Touch -> Selection, Dragging, Long-Press Timer, Double Tap Check
    if (touches.length === 1) {
      const touch = touches[0];
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      const touchX = (touch.clientX - rect.left) * scaleX;
      const touchY = (touch.clientY - rect.top) * scaleY;

      touchStartPosRef.current = { x: touch.clientX, y: touch.clientY };

      // Check handle hit on active layer first
      if (activeLayerId) {
        const activeL = layers.find((l) => l.id === activeLayerId);
        if (activeL && activeL.visible) {
          const centerX = activeL.x + activeL.width / 2;
          const centerY = activeL.y + activeL.height / 2;
          const rad = (-activeL.rotation * Math.PI) / 180;
          const dx = touchX - centerX;
          const dy = touchY - centerY;
          const localX = dx * Math.cos(rad) - dy * Math.sin(rad) + activeL.width / 2;
          const localY = dx * Math.sin(rad) + dy * Math.cos(rad) + activeL.height / 2;

          const hitHandle = getHandleAtLocalPos(localX, localY, activeL.width, activeL.height);
          if (hitHandle) {
            isResizingModeRef.current = hitHandle;
            resizeStartRef.current = {
              mouseX: touchX,
              mouseY: touchY,
              x: activeL.x,
              y: activeL.y,
              w: activeL.width,
              h: activeL.height,
              rot: activeL.rotation,
              aspect: activeL.width / (activeL.height || 1),
            };
            return;
          }
        }
      }

      // Find touched layer top-to-bottom
      const touchedLayer = [...layers].reverse().find((l) => {
        if (!l.visible) return false;
        return (
          touchX >= l.x &&
          touchX <= l.x + l.width &&
          touchY >= l.y &&
          touchY <= l.y + l.height
        );
      });

      if (touchedLayer) {
        onSelectLayer(touchedLayer.id);
        isDraggingLayerRef.current = true;
        layerDragOffsetRef.current = {
          x: touchX - touchedLayer.x,
          y: touchY - touchedLayer.y,
        };
      }

      // Start Long-Press Timer (500ms for Context Menu)
      if (longPressTimerRef.current) clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = setTimeout(() => {
        if ('vibrate' in navigator) navigator.vibrate?.(40);
        setContextMenu({
          x: touch.clientX,
          y: touch.clientY,
          layerId: touchedLayer ? touchedLayer.id : activeLayerId,
        });
      }, 500);

      // Check Double Tap (<300ms) for Image Editing Modal
      const now = Date.now();
      if (
        touchedLayer &&
        touchedLayer.id === lastTapLayerIdRef.current &&
        now - lastTapTimeRef.current < 300
      ) {
        if (longPressTimerRef.current) clearTimeout(longPressTimerRef.current);
        if (touchedLayer.type === 'image' || touchedLayer.type === 'smart') {
          onSelectLayer(touchedLayer.id);
          setModalDefaultTab('adjustments');
          setIsImageModalOpen(true);
          if ('vibrate' in navigator) navigator.vibrate?.(25);
        }
      }

      lastTapTimeRef.current = now;
      lastTapLayerIdRef.current = touchedLayer ? touchedLayer.id : null;
    }
  };

  const handleTouchMoveContainer = (e: React.TouchEvent<HTMLDivElement>) => {
    const touches = Array.from(e.touches) as React.Touch[];

    // If moved > 8px, cancel long press context menu
    if (touches.length === 1 && touchStartPosRef.current) {
      const touch = touches[0];
      const distMoved = Math.hypot(
        touch.clientX - touchStartPosRef.current.x,
        touch.clientY - touchStartPosRef.current.y
      );
      if (distMoved > 8 && longPressTimerRef.current) {
        clearTimeout(longPressTimerRef.current);
        longPressTimerRef.current = null;
      }
    }

    // 2 Finger Pinch / Pan / Rotate
    if (touches.length === 2 && initialPinchDistRef.current !== null) {
      const t1 = touches[0];
      const t2 = touches[1];

      const currentDist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
      const currentAngle = Math.atan2(t2.clientY - t1.clientY, t2.clientX - t1.clientX) * (180 / Math.PI);

      const deltaDist = currentDist - initialPinchDistRef.current;
      if (Math.abs(deltaDist) > 3) {
        const factor = deltaDist > 0 ? 1.025 : 0.975;
        setZoom((prev) => Math.min(4.0, Math.max(0.1, Math.round(prev * factor * 100) / 100)));
        initialPinchDistRef.current = currentDist;
      }

      // 2 Finger Active Layer Rotation
      if (activeLayerId && initialPinchAngleRef.current !== null && initialTouchLayerRotRef.current !== null) {
        const activeL = layers.find((l) => l.id === activeLayerId);
        if (activeL) {
          const angleDelta = currentAngle - initialPinchAngleRef.current;
          let newRot = Math.round(initialTouchLayerRotRef.current + angleDelta);
          if (newRot < 0) newRot += 360;
          onUpdateLayer({ ...activeL, rotation: newRot % 360 });
        }
      }
      return;
    }

    // 1 Finger Touch Move -> Resizing via Handle or Dragging Layer
    if (touches.length === 1) {
      const touch = touches[0];
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      const touchX = (touch.clientX - rect.left) * scaleX;
      const touchY = (touch.clientY - rect.top) * scaleY;

      // 1. Resizing active layer via touch handle
      if (isResizingModeRef.current && activeLayerId && resizeStartRef.current) {
        const activeLayer = layers.find((l) => l.id === activeLayerId);
        if (activeLayer) {
          const init = resizeStartRef.current;
          if (isResizingModeRef.current === 'rotate') {
            const centerX = init.x + init.w / 2;
            const centerY = init.y + init.h / 2;
            let angle = Math.atan2(touchY - centerY, touchX - centerX) * (180 / Math.PI) + 90;
            if (angle < 0) angle += 360;
            onUpdateLayer({ ...activeLayer, rotation: Math.round(angle) });
            return;
          }

          const handle = isResizingModeRef.current;
          const rad = (init.rot * Math.PI) / 180;
          const dx = touchX - init.mouseX;
          const dy = touchY - init.mouseY;

          const localDx = dx * Math.cos(-rad) - dy * Math.sin(-rad);
          const localDy = dx * Math.sin(-rad) + dy * Math.cos(-rad);

          let newW = init.w;
          let newH = init.h;
          let localOffsetX = 0;
          let localOffsetY = 0;

          const isImage = activeLayer.type === 'image' || activeLayer.type === 'smart';
          const keepAspect = isImage;

          switch (handle) {
            case 'br': {
              newW = Math.max(20, Math.round(init.w + localDx));
              newH = keepAspect ? Math.max(20, Math.round(newW / init.aspect)) : Math.max(20, Math.round(init.h + localDy));
              break;
            }
            case 'tl': {
              newW = Math.max(20, Math.round(init.w - localDx));
              newH = keepAspect ? Math.max(20, Math.round(newW / init.aspect)) : Math.max(20, Math.round(init.h - localDy));
              localOffsetX = -(newW - init.w);
              localOffsetY = -(newH - init.h);
              break;
            }
            case 'tr': {
              newW = Math.max(20, Math.round(init.w + localDx));
              newH = keepAspect ? Math.max(20, Math.round(newW / init.aspect)) : Math.max(20, Math.round(init.h - localDy));
              localOffsetX = 0;
              localOffsetY = -(newH - init.h);
              break;
            }
            case 'bl': {
              newW = Math.max(20, Math.round(init.w - localDx));
              newH = keepAspect ? Math.max(20, Math.round(newW / init.aspect)) : Math.max(20, Math.round(init.h + localDy));
              localOffsetX = -(newW - init.w);
              localOffsetY = 0;
              break;
            }
            case 'tc': {
              newH = Math.max(20, Math.round(init.h - localDy));
              localOffsetY = -(newH - init.h);
              break;
            }
            case 'bc': {
              newH = Math.max(20, Math.round(init.h + localDy));
              break;
            }
            case 'lc': {
              newW = Math.max(20, Math.round(init.w - localDx));
              localOffsetX = -(newW - init.w);
              break;
            }
            case 'rc': {
              newW = Math.max(20, Math.round(init.w + localDx));
              break;
            }
          }

          const worldDx = localOffsetX * Math.cos(rad) - localOffsetY * Math.sin(rad);
          const worldDy = localOffsetX * Math.sin(rad) + localOffsetY * Math.cos(rad);

          onUpdateLayer({
            ...activeLayer,
            x: Math.round(init.x + worldDx),
            y: Math.round(init.y + worldDy),
            width: newW,
            height: newH,
          });
          return;
        }
      }

      // 2. Dragging active layer on touch move
      if (isDraggingLayerRef.current && activeLayerId) {
        const activeLayer = layers.find((l) => l.id === activeLayerId);
        if (activeLayer) {
          let newX = Math.round(touchX - layerDragOffsetRef.current.x);
          let newY = Math.round(touchY - layerDragOffsetRef.current.y);

          // Snap guidelines
          const centerX = newX + activeLayer.width / 2;
          const centerY = newY + activeLayer.height / 2;
          const canvasCenterX = baseCanvasWidth / 2;
          const canvasCenterY = baseCanvasHeight / 2;

          const snapThreshold = 10;
          const guides: { x?: number; y?: number } = {};

          if (Math.abs(centerX - canvasCenterX) < snapThreshold) {
            newX = Math.round(canvasCenterX - activeLayer.width / 2);
            guides.x = canvasCenterX;
          }
          if (Math.abs(centerY - canvasCenterY) < snapThreshold) {
            newY = Math.round(canvasCenterY - activeLayer.height / 2);
            guides.y = canvasCenterY;
          }

          activeGuidesRef.current = guides;

          onUpdateLayer({
            ...activeLayer,
            x: newX,
            y: newY,
          });
        }
      }
    }
  };

  const handleTouchEndContainer = () => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
    isDraggingLayerRef.current = false;
    isResizingModeRef.current = null;
    resizeStartRef.current = null;
    activeGuidesRef.current = {};
    initialPinchDistRef.current = null;
    initialPinchAngleRef.current = null;
    initialTouchLayerRotRef.current = null;
    touchStartPosRef.current = null;
  };

  useEffect(() => {
    fitToScreen();
  }, [baseCanvasWidth, baseCanvasHeight, product.id]);

  // Render Canvas Layers & Graphics
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = baseCanvasWidth;
    canvas.height = baseCanvasHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear background
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Product Base background color
    ctx.fillStyle = product.bgColor || '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Apply Sublimation Mirroring if enabled
    ctx.save();
    if (mirrorSublimation) {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    }

    // Render layers from bottom to top
    const visibleLayers = layers.filter((l) => l.visible);

    visibleLayers.forEach((layer) => {
      ctx.save();

      // Opacity & Blend Mode
      ctx.globalAlpha = layer.opacity / 100;
      ctx.globalCompositeOperation = layer.blendMode as GlobalCompositeOperation;

      // Position & Rotation transform
      const centerX = layer.x + layer.width / 2;
      const centerY = layer.y + layer.height / 2;

      ctx.translate(centerX, centerY);
      ctx.rotate((layer.rotation * Math.PI) / 180);
      if (layer.flipX || layer.flipY) {
        ctx.scale(layer.flipX ? -1 : 1, layer.flipY ? -1 : 1);
      }
      ctx.translate(-layer.width / 2, -layer.height / 2);

      // Apply Real-time Image Adjustment Filters if present
      if ((layer.type === 'image' || layer.type === 'smart') && layer.filters) {
        const b = 100 + (layer.filters.brightness || 0) + (layer.filters.exposure || 0);
        const c = 100 + (layer.filters.contrast || 0);
        const s = 100 + (layer.filters.saturation || 0) + ((layer.filters.vibrance || 0) * 0.5);
        const h = layer.filters.hue || 0;
        const blur = layer.filters.blur || 0;
        const sepia = layer.filters.sepia || 0;
        const invert = layer.filters.invert ? 100 : 0;
        const grayscale = layer.filters.grayscale ? 100 : 0;

        let filterString = `brightness(${b}%) contrast(${c}%) saturate(${s}%) hue-rotate(${h}deg) blur(${blur}px) sepia(${sepia}%) invert(${invert}%) grayscale(${grayscale}%)`;

        if (layer.filters.presetFilter && layer.filters.presetFilter !== 'none') {
          const intensity = (layer.filters.filterIntensity ?? 100) / 100;
          switch (layer.filters.presetFilter) {
            case 'vintage': filterString += ` sepia(${50 * intensity}%) contrast(${120 * intensity}%)`; break;
            case 'hdr': filterString += ` contrast(${140 * intensity}%) saturate(${130 * intensity}%)`; break;
            case 'neon': filterString += ` saturate(${200 * intensity}%) contrast(${150 * intensity}%) hue-rotate(${90 * intensity}deg)`; break;
            case 'cinema': filterString += ` contrast(${130 * intensity}%) sepia(${20 * intensity}%) hue-rotate(${-10 * intensity}deg)`; break;
            case 'popart': filterString += ` saturate(${250 * intensity}%) contrast(${160 * intensity}%)`; break;
            case 'cool': filterString += ` hue-rotate(${180 * intensity}deg) saturate(${110 * intensity}%)`; break;
            case 'warm': filterString += ` sepia(${30 * intensity}%) saturate(${120 * intensity}%)`; break;
            case 'duotone': filterString += ` contrast(${180 * intensity}%) grayscale(${80 * intensity}%)`; break;
          }
        }

        try {
          ctx.filter = filterString;
        } catch (e) {
          // ignore
        }
      }

      // Render based on layer type
      if (layer.type === 'text') {
        drawWarpedText(ctx, layer, activeColor);
      } else if (layer.type === 'image' || layer.type === 'smart') {
        if (layer.content) {
          let img = imageCacheRef.current.get(layer.content);
          if (!img) {
            img = new Image();
            img.crossOrigin = 'anonymous';
            img.src = layer.content;
            imageCacheRef.current.set(layer.content, img);
            img.onload = () => {
              if (canvasRef.current) onCanvasRendered(canvasRef.current);
            };
            img.onerror = () => {
              // Fallback gradient pattern
              const fallbackCanvas = document.createElement('canvas');
              fallbackCanvas.width = 400;
              fallbackCanvas.height = 400;
              const fCtx = fallbackCanvas.getContext('2d');
              if (fCtx) {
                const grad = fCtx.createLinearGradient(0, 0, 400, 400);
                grad.addColorStop(0, '#0284c7');
                grad.addColorStop(1, '#7e22ce');
                fCtx.fillStyle = grad;
                fCtx.fillRect(0, 0, 400, 400);
                fCtx.fillStyle = '#ffffff';
                fCtx.font = 'bold 20px sans-serif';
                fCtx.textAlign = 'center';
                fCtx.fillText('Estampa Sublimática', 200, 200);
              }
              img!.src = fallbackCanvas.toDataURL();
            };
          }
          if (img.complete && img.naturalWidth > 0) {
            ctx.drawImage(img, 0, 0, layer.width, layer.height);
          }
        }
      } else if (layer.type === 'shape') {
        drawVectorShape(
          ctx,
          layer.shapeType || 'rectangle',
          layer.width,
          layer.height,
          layer.color || activeColor,
          layer.strokeColor,
          layer.strokeWidth
        );
      } else if (layer.type === 'brush') {
        ctx.fillStyle = layer.color || activeColor;
        ctx.strokeStyle = layer.color || activeColor;
        ctx.lineWidth = layer.strokeWidth || brushSize;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        try {
          const points: { x: number; y: number }[] = JSON.parse(layer.content || '[]');
          if (points.length > 0) {
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            points.forEach((pt) => ctx.lineTo(pt.x, pt.y));
            ctx.stroke();
          }
        } catch (e) {
          // Ignore
        }
      }

      ctx.filter = 'none';
      ctx.restore();
    });

    ctx.restore();

    // Snapshot artwork for 3D mapping
    const cleanCanvas = document.createElement('canvas');
    cleanCanvas.width = canvas.width;
    cleanCanvas.height = canvas.height;
    const cleanCtx = cleanCanvas.getContext('2d');
    if (cleanCtx) {
      cleanCtx.drawImage(canvas, 0, 0);
      onCanvasRendered(cleanCanvas);
    }

    // Render Smart Alignment Guides if active
    if (activeGuidesRef.current.x !== undefined) {
      ctx.save();
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(activeGuidesRef.current.x, 0);
      ctx.lineTo(activeGuidesRef.current.x, canvas.height);
      ctx.stroke();
      ctx.restore();
    }
    if (activeGuidesRef.current.y !== undefined) {
      ctx.save();
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, activeGuidesRef.current.y);
      ctx.lineTo(canvas.width, activeGuidesRef.current.y);
      ctx.stroke();
      ctx.restore();
    }

    // Render Bounding Box and Transform handles for active layer
    const activeLayer = layers.find((l) => l.id === activeLayerId);
    if (activeLayer && activeLayer.visible) {
      ctx.save();
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 4]);

      const centerX = activeLayer.x + activeLayer.width / 2;
      const centerY = activeLayer.y + activeLayer.height / 2;

      ctx.translate(centerX, centerY);
      ctx.rotate((activeLayer.rotation * Math.PI) / 180);
      ctx.translate(-activeLayer.width / 2, -activeLayer.height / 2);

      ctx.strokeRect(0, 0, activeLayer.width, activeLayer.height);

      // Corner & Side handles rendering for active layer
      ctx.setLineDash([]);
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 2;

      // Rotation top stem line & handle
      ctx.beginPath();
      ctx.moveTo(activeLayer.width / 2, 0);
      ctx.lineTo(activeLayer.width / 2, -24);
      ctx.stroke();

      ctx.fillStyle = '#8b5cf6';
      ctx.beginPath();
      ctx.arc(activeLayer.width / 2, -24, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Corner handles (Squares)
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 2;

      const cornerSize = 12;
      const corners = [
        { id: 'tl', x: 0, y: 0 },
        { id: 'tr', x: activeLayer.width, y: 0 },
        { id: 'bl', x: 0, y: activeLayer.height },
        { id: 'br', x: activeLayer.width, y: activeLayer.height },
      ];
      corners.forEach((c) => {
        ctx.fillRect(c.x - cornerSize / 2, c.y - cornerSize / 2, cornerSize, cornerSize);
        ctx.strokeRect(c.x - cornerSize / 2, c.y - cornerSize / 2, cornerSize, cornerSize);
      });

      // Side handles (Circles)
      const sideHandles = [
        { id: 'tc', x: activeLayer.width / 2, y: 0 },
        { id: 'bc', x: activeLayer.width / 2, y: activeLayer.height },
        { id: 'lc', x: 0, y: activeLayer.height / 2 },
        { id: 'rc', x: activeLayer.width, y: activeLayer.height / 2 },
      ];
      sideHandles.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, 5.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });

      ctx.restore();
    }
  }, [layers, activeLayerId, product, mirrorSublimation, baseCanvasWidth, baseCanvasHeight]);

  // Helper to detect handles at local coordinate position
  const getHandleAtLocalPos = (
    localX: number,
    localY: number,
    w: number,
    h: number
  ): 'tl' | 'tr' | 'bl' | 'br' | 'tc' | 'bc' | 'lc' | 'rc' | 'rotate' | null => {
    const r = 16; // Hit tolerance
    if (Math.hypot(localX - w / 2, localY - (-24)) <= r) return 'rotate';
    if (Math.hypot(localX - 0, localY - 0) <= r) return 'tl';
    if (Math.hypot(localX - w, localY - 0) <= r) return 'tr';
    if (Math.hypot(localX - 0, localY - h) <= r) return 'bl';
    if (Math.hypot(localX - w, localY - h) <= r) return 'br';

    if (Math.hypot(localX - w / 2, localY - 0) <= r) return 'tc';
    if (Math.hypot(localX - w / 2, localY - h) <= r) return 'bc';
    if (Math.hypot(localX - 0, localY - h / 2) <= r) return 'lc';
    if (Math.hypot(localX - w, localY - h / 2) <= r) return 'rc';

    return null;
  };

  // Helper to map handle type to cursor CSS
  const getCursorForHandle = (
    handle: 'tl' | 'tr' | 'bl' | 'br' | 'tc' | 'bc' | 'lc' | 'rc' | 'rotate' | null
  ): string => {
    switch (handle) {
      case 'tl':
      case 'br':
        return 'nwse-resize';
      case 'tr':
      case 'bl':
        return 'nesw-resize';
      case 'tc':
      case 'bc':
        return 'ns-resize';
      case 'lc':
      case 'rc':
        return 'ew-resize';
      case 'rotate':
        return 'grab';
      default:
        return 'default';
    }
  };

  // Canvas Mouse Down
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    if (activeTool === 'move' || e.spaceKey) {
      isPanningRef.current = true;
      panStartRef.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
      setCursorStyle('grabbing');
      return;
    }

    if (activeTool === 'brush') {
      isDrawingRef.current = true;
      currentPathRef.current = [{ x: mouseX, y: mouseY }];
      setCursorStyle('crosshair');
      return;
    }

    if (activeTool === 'eyedropper') {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const pixel = ctx.getImageData(Math.round(mouseX), Math.round(mouseY), 1, 1).data;
        const hex = `#${((1 << 24) + (pixel[0] << 16) + (pixel[1] << 8) + pixel[2]).toString(16).slice(1)}`;
        if (onChangeColor) onChangeColor(hex);
      }
      return;
    }

    if (activeTool === 'eraser') {
      const clickedLayer = [...layers].reverse().find((layer) => {
        return (
          mouseX >= layer.x &&
          mouseX <= layer.x + layer.width &&
          mouseY >= layer.y &&
          mouseY <= layer.y + layer.height
        );
      });
      if (clickedLayer && onDeleteLayer) {
        onDeleteLayer(clickedLayer.id);
      }
      return;
    }

    if (activeTool === 'text') {
      const newId = 'layer-' + Date.now();
      const newLayer: Layer = {
        id: newId,
        name: 'Texto ' + (layers.length + 1),
        type: 'text',
        visible: true,
        locked: false,
        opacity: 100,
        blendMode: 'normal',
        x: Math.max(20, mouseX - 150),
        y: Math.max(20, mouseY - 30),
        width: 350,
        height: 70,
        rotation: 0,
        content: 'TEXTO PERSONALIZADO',
        color: activeColor,
        fontSize: 36,
        fontFamily: 'Impact',
        fontWeight: 'bold',
      };
      onUpdateLayer(newLayer);
      onSelectLayer(newId);
      return;
    }

    if (activeTool === 'shapes') {
      const newId = 'layer-' + Date.now();
      const newLayer: Layer = {
        id: newId,
        name: 'Forma ' + selectedShape,
        type: 'shape',
        visible: true,
        locked: false,
        opacity: 100,
        blendMode: 'normal',
        x: Math.max(20, mouseX - 100),
        y: Math.max(20, mouseY - 100),
        width: 200,
        height: 200,
        rotation: 0,
        content: '',
        shapeType: selectedShape,
        color: activeColor,
      };
      onUpdateLayer(newLayer);
      onSelectLayer(newId);
      return;
    }

    // Check corner/side handles or top rotation handle on active layer
    if (activeLayerId) {
      const activeLayer = layers.find((l) => l.id === activeLayerId);
      if (activeLayer && activeLayer.visible) {
        const centerX = activeLayer.x + activeLayer.width / 2;
        const centerY = activeLayer.y + activeLayer.height / 2;

        const rad = (-activeLayer.rotation * Math.PI) / 180;
        const dx = mouseX - centerX;
        const dy = mouseY - centerY;
        const localX = dx * Math.cos(rad) - dy * Math.sin(rad) + activeLayer.width / 2;
        const localY = dx * Math.sin(rad) + dy * Math.cos(rad) + activeLayer.height / 2;

        const hitHandle = getHandleAtLocalPos(localX, localY, activeLayer.width, activeLayer.height);
        if (hitHandle) {
          isResizingModeRef.current = hitHandle;
          resizeStartRef.current = {
            mouseX,
            mouseY,
            x: activeLayer.x,
            y: activeLayer.y,
            w: activeLayer.width,
            h: activeLayer.height,
            rot: activeLayer.rotation,
            aspect: activeLayer.width / (activeLayer.height || 1),
          };
          setCursorStyle(getCursorForHandle(hitHandle));
          return;
        }
      }
    }

    // Default 'select' tool or click interaction
    const clickedLayer = [...layers].reverse().find((layer) => {
      return (
        mouseX >= layer.x &&
        mouseX <= layer.x + layer.width &&
        mouseY >= layer.y &&
        mouseY <= layer.y + layer.height
      );
    });

    if (clickedLayer) {
      onSelectLayer(clickedLayer.id);
      isDraggingLayerRef.current = true;
      layerDragOffsetRef.current = {
        x: mouseX - clickedLayer.x,
        y: mouseY - clickedLayer.y,
      };
      setCursorStyle('move');
    } else {
      onSelectLayer(null);
      setCursorStyle('default');
    }
  };

  // Canvas Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (isPanningRef.current) {
      setPan({
        x: e.clientX - panStartRef.current.x,
        y: e.clientY - panStartRef.current.y,
      });
      setCursorStyle('grabbing');
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    // Resizing or Rotating active layer
    if (isResizingModeRef.current && activeLayerId && resizeStartRef.current) {
      const activeLayer = layers.find((l) => l.id === activeLayerId);
      if (activeLayer) {
        const init = resizeStartRef.current;
        if (isResizingModeRef.current === 'rotate') {
          const centerX = init.x + init.w / 2;
          const centerY = init.y + init.h / 2;
          let angle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI) + 90;
          if (angle < 0) angle += 360;
          onUpdateLayer({ ...activeLayer, rotation: Math.round(angle) });
          setCursorStyle('grabbing');
          return;
        }

        const handle = isResizingModeRef.current;
        const rad = (init.rot * Math.PI) / 180;
        const dx = mouseX - init.mouseX;
        const dy = mouseY - init.mouseY;

        // Convert mouse delta into layer's local axes
        const localDx = dx * Math.cos(-rad) - dy * Math.sin(-rad);
        const localDy = dx * Math.sin(-rad) + dy * Math.cos(-rad);

        let newW = init.w;
        let newH = init.h;
        let localOffsetX = 0;
        let localOffsetY = 0;

        const isImage = activeLayer.type === 'image' || activeLayer.type === 'smart';
        const keepAspect = isImage || e.shiftKey;

        switch (handle) {
          case 'br': {
            newW = Math.max(20, Math.round(init.w + localDx));
            newH = keepAspect
              ? Math.max(20, Math.round(newW / init.aspect))
              : Math.max(20, Math.round(init.h + localDy));
            break;
          }
          case 'tl': {
            newW = Math.max(20, Math.round(init.w - localDx));
            newH = keepAspect
              ? Math.max(20, Math.round(newW / init.aspect))
              : Math.max(20, Math.round(init.h - localDy));
            localOffsetX = -(newW - init.w);
            localOffsetY = -(newH - init.h);
            break;
          }
          case 'tr': {
            newW = Math.max(20, Math.round(init.w + localDx));
            newH = keepAspect
              ? Math.max(20, Math.round(newW / init.aspect))
              : Math.max(20, Math.round(init.h - localDy));
            localOffsetX = 0;
            localOffsetY = -(newH - init.h);
            break;
          }
          case 'bl': {
            newW = Math.max(20, Math.round(init.w - localDx));
            newH = keepAspect
              ? Math.max(20, Math.round(newW / init.aspect))
              : Math.max(20, Math.round(init.h + localDy));
            localOffsetX = -(newW - init.w);
            localOffsetY = 0;
            break;
          }
          case 'tc': {
            newH = Math.max(20, Math.round(init.h - localDy));
            localOffsetY = -(newH - init.h);
            break;
          }
          case 'bc': {
            newH = Math.max(20, Math.round(init.h + localDy));
            break;
          }
          case 'lc': {
            newW = Math.max(20, Math.round(init.w - localDx));
            localOffsetX = -(newW - init.w);
            break;
          }
          case 'rc': {
            newW = Math.max(20, Math.round(init.w + localDx));
            break;
          }
        }

        // Convert local offset back to world space
        const worldDx = localOffsetX * Math.cos(rad) - localOffsetY * Math.sin(rad);
        const worldDy = localOffsetX * Math.sin(rad) + localOffsetY * Math.cos(rad);

        onUpdateLayer({
          ...activeLayer,
          x: Math.round(init.x + worldDx),
          y: Math.round(init.y + worldDy),
          width: newW,
          height: newH,
        });
        setCursorStyle(getCursorForHandle(handle));
        return;
      }
    }

    if (isDrawingRef.current && activeTool === 'brush') {
      currentPathRef.current.push({ x: mouseX, y: mouseY });
      setCursorStyle('crosshair');
      return;
    }

    if (isDraggingLayerRef.current && activeLayerId) {
      const activeLayer = layers.find((l) => l.id === activeLayerId);
      if (activeLayer) {
        let newX = Math.round(mouseX - layerDragOffsetRef.current.x);
        let newY = Math.round(mouseY - layerDragOffsetRef.current.y);

        // Smart Alignment Snap Guidelines Calculation
        const centerX = newX + activeLayer.width / 2;
        const centerY = newY + activeLayer.height / 2;
        const canvasCenterX = baseCanvasWidth / 2;
        const canvasCenterY = baseCanvasHeight / 2;

        const snapThreshold = 8;
        const guides: { x?: number; y?: number } = {};

        if (Math.abs(centerX - canvasCenterX) < snapThreshold) {
          newX = Math.round(canvasCenterX - activeLayer.width / 2);
          guides.x = canvasCenterX;
        }
        if (Math.abs(centerY - canvasCenterY) < snapThreshold) {
          newY = Math.round(canvasCenterY - activeLayer.height / 2);
          guides.y = canvasCenterY;
        }

        activeGuidesRef.current = guides;

        onUpdateLayer({
          ...activeLayer,
          x: newX,
          y: newY,
        });
        setCursorStyle('move');
        return;
      }
    } else {
      activeGuidesRef.current = {};
    }

    // Hover mouse cursor calculation
    if (activeTool === 'move') {
      setCursorStyle('grab');
      return;
    }
    if (activeTool === 'brush') {
      setCursorStyle('crosshair');
      return;
    }
    if (activeTool === 'text') {
      setCursorStyle('text');
      return;
    }
    if (activeTool === 'eyedropper') {
      setCursorStyle('copy');
      return;
    }
    if (activeTool === 'eraser') {
      setCursorStyle('not-allowed');
      return;
    }

    // Check handle hover on active layer
    if (activeLayerId) {
      const activeLayer = layers.find((l) => l.id === activeLayerId);
      if (activeLayer && activeLayer.visible) {
        const centerX = activeLayer.x + activeLayer.width / 2;
        const centerY = activeLayer.y + activeLayer.height / 2;

        const rad = (-activeLayer.rotation * Math.PI) / 180;
        const dx = mouseX - centerX;
        const dy = mouseY - centerY;
        const localX = dx * Math.cos(rad) - dy * Math.sin(rad) + activeLayer.width / 2;
        const localY = dx * Math.sin(rad) + dy * Math.cos(rad) + activeLayer.height / 2;

        const hitHandle = getHandleAtLocalPos(localX, localY, activeLayer.width, activeLayer.height);
        if (hitHandle) {
          setCursorStyle(getCursorForHandle(hitHandle));
          return;
        }
      }
    }

    // Check layer hover
    const hoverLayer = [...layers].reverse().find((layer) => {
      return (
        mouseX >= layer.x &&
        mouseX <= layer.x + layer.width &&
        mouseY >= layer.y &&
        mouseY <= layer.y + layer.height
      );
    });

    if (hoverLayer) {
      setCursorStyle('move');
    } else {
      setCursorStyle('default');
    }
  };

  // Canvas Mouse Up
  const handleMouseUp = () => {
    isResizingModeRef.current = null;
    resizeStartRef.current = null;
    activeGuidesRef.current = {};

    if (isDrawingRef.current && activeTool === 'brush') {
      isDrawingRef.current = false;
      if (currentPathRef.current.length > 0) {
        const newLayer: Layer = {
          id: 'layer-' + Date.now(),
          name: 'Traço Pincel ' + (layers.length + 1),
          type: 'brush',
          visible: true,
          locked: false,
          opacity: 100,
          blendMode: 'normal',
          x: 0,
          y: 0,
          width: baseCanvasWidth,
          height: baseCanvasHeight,
          rotation: 0,
          content: JSON.stringify(currentPathRef.current),
          color: activeColor,
          strokeWidth: brushSize,
        };
        onUpdateLayer(newLayer);
        currentPathRef.current = [];
      }
    }

    isPanningRef.current = false;
    isDraggingLayerRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      onWheel={handleWheelContainer}
      onTouchStart={handleTouchStartContainer}
      onTouchMove={handleTouchMoveContainer}
      onTouchEnd={handleTouchEndContainer}
      onTouchCancel={handleTouchEndContainer}
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onDrop={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          Array.from(e.dataTransfer.files).forEach((file: File) => {
            if (file.type.startsWith('image/') || file.name.endsWith('.svg')) {
              const reader = new FileReader();
              reader.onload = (event) => {
                const url = event.target?.result as string;
                if (url) {
                  const newLayer: Layer = {
                    id: 'layer-img-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
                    name: file.name,
                    type: 'image',
                    visible: true,
                    locked: false,
                    opacity: 100,
                    blendMode: 'normal',
                    x: 100,
                    y: 100,
                    width: 400,
                    height: 400,
                    rotation: 0,
                    content: url,
                  };
                  onUpdateLayer(newLayer);
                  onSelectLayer(newLayer.id);
                }
              };
              reader.readAsDataURL(file);
            }
          });
        }
      }}
      className={`relative flex-1 w-full h-full overflow-hidden flex items-center justify-center select-none transition-colors ${
        theme === 'light' ? 'bg-slate-200' : 'bg-[#121214]'
      }`}
    >
      {/* Rulers Overlay */}
      {showRulers && (
        <>
          <div className={`absolute top-0 left-0 right-0 h-5 border-b z-20 flex items-center text-[9px] font-mono px-6 ${
            theme === 'light' ? 'bg-slate-100 border-slate-300 text-slate-600' : 'bg-[#1a1a1c] border-[#2d2d30] text-gray-500'
          }`}>
            <span className="mr-8">0mm</span>
            <span className="mr-8">50mm</span>
            <span className="mr-8">100mm</span>
            <span className="mr-8">150mm</span>
            <span className="mr-8">200mm</span>
            <span>250mm</span>
          </div>
          <div className={`absolute top-0 left-0 bottom-0 w-5 border-r z-20 flex flex-col items-center text-[9px] font-mono py-6 ${
            theme === 'light' ? 'bg-slate-100 border-slate-300 text-slate-600' : 'bg-[#1a1a1c] border-[#2d2d30] text-gray-500'
          }`}>
            <span className="mb-8">0</span>
            <span className="mb-8">50</span>
            <span className="mb-8">100</span>
            <span className="mb-8">150</span>
          </div>
        </>
      )}

      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: showGrid
            ? `radial-gradient(circle, ${theme === 'light' ? '#64748b' : '#475569'} 1px, transparent 1px)`
            : 'none',
          backgroundSize: '20px 20px',
        }}
      ></div>

      {/* Infinite Canvas Container Transform wrapper */}
      <div
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          transition: isPanningRef.current ? 'none' : 'transform 0.1s ease-out',
        }}
        className={`relative shadow-2xl rounded-sm border bg-white ${
          theme === 'light' ? 'border-purple-300 shadow-slate-400/50' : 'border-sky-500/30'
        }`}
      >
        {/* Printable Area Boundary Line Label */}
        <div className={`absolute -top-6 left-0 right-0 flex items-center justify-between text-[10px] font-mono font-semibold px-1 pointer-events-none ${
          theme === 'light' ? 'text-purple-700' : 'text-sky-400'
        }`}>
          <span>ÁREA IMPRIMÍVEL 300 DPI</span>
          <span>{product.printAspect}</span>
        </div>

        {/* The Primary HTML5 2D Canvas */}
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onContextMenu={handleContextMenu}
          className="shadow-2xl block"
          style={{ cursor: cursorStyle }}
        />
      </div>

      {/* Canva Floating Contextual Formatting Bar */}
      {activeLayerId && (
        <div className={`absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 backdrop-blur-xl border rounded-2xl shadow-2xl z-30 text-xs animate-in fade-in slide-in-from-top-3 duration-200 max-w-[95vw] overflow-x-auto ${
          theme === 'light'
            ? 'bg-white/95 border-purple-200 text-slate-800 shadow-slate-300/60'
            : 'bg-[#181920]/95 border-purple-500/40 text-gray-200 shadow-black/90'
        }`}>
          {(() => {
            const activeL = layers.find((l) => l.id === activeLayerId);
            if (!activeL) return null;

            const isImage = activeL.type === 'image' || activeL.type === 'smart';

            return (
              <div className="flex items-center gap-2 shrink-0">
                {/* Layer Title Badge */}
                <span className="text-[11px] font-bold text-purple-300 max-w-[100px] truncate bg-purple-950/70 px-2.5 py-1 rounded-lg border border-purple-500/30 shrink-0">
                  {activeL.name}
                </span>

                <div className="w-[1px] h-4 bg-white/20 shrink-0"></div>

                {/* IMAGE SPECIFIC ADVANCED TOOL BUTTONS */}
                {isImage && (
                  <>
                    <button
                      onClick={() => {
                        setModalDefaultTab('adjustments');
                        setIsImageModalOpen(true);
                      }}
                      className="px-2.5 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold flex items-center gap-1.5 text-[11px] shadow-sm transition-all cursor-pointer shrink-0"
                      title="Abrir Painel de Ajuste de Cores, Luz e Filtros"
                    >
                      <Sliders className="w-3.5 h-3.5" />
                      <span>Editar</span>
                    </button>

                    <button
                      onClick={() => {
                        setModalDefaultTab('crop');
                        setIsImageModalOpen(true);
                      }}
                      className="px-2.5 py-1.5 bg-[#23242e] hover:bg-[#2e2f3d] text-gray-200 hover:text-white rounded-xl font-semibold flex items-center gap-1.5 text-[11px] transition-all cursor-pointer shrink-0"
                      title="Recortar Imagem"
                    >
                      <Crop className="w-3.5 h-3.5 text-sky-400" />
                      <span>Cortar</span>
                    </button>

                    <button
                      onClick={() => {
                        setModalDefaultTab('filters');
                        setIsImageModalOpen(true);
                      }}
                      className="px-2.5 py-1.5 bg-[#23242e] hover:bg-[#2e2f3d] text-gray-200 hover:text-white rounded-xl font-semibold flex items-center gap-1.5 text-[11px] transition-all cursor-pointer shrink-0"
                      title="Aplicar Filtro Estético"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                      <span>Filtros</span>
                    </button>

                    <button
                      onClick={() => {
                        setModalDefaultTab('smart');
                        setIsImageModalOpen(true);
                      }}
                      className="px-2.5 py-1.5 bg-[#23242e] hover:bg-[#2e2f3d] text-gray-200 hover:text-white rounded-xl font-semibold flex items-center gap-1.5 text-[11px] transition-all cursor-pointer shrink-0"
                      title="Ferramentas IA (Remover Fundo, Vetorizar, Upscale)"
                    >
                      <Wand2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>IA Smart</span>
                    </button>

                    {/* Device Preset Resizing Group */}
                    <div className="flex items-center bg-[#23242e] rounded-xl border border-[#383945] p-0.5 shrink-0" title="Redimensionar Imagem para Dispositivos">
                      <span className="px-1.5 text-[10px] font-bold text-gray-400 uppercase hidden md:inline">Tamanho:</span>
                      <button
                        onClick={() => handleResizeForDevice(activeL.id, 'tablet')}
                        className="px-2 py-1 hover:bg-purple-600/30 text-gray-200 hover:text-white rounded-lg flex items-center gap-1 text-[11px] font-semibold transition-all cursor-pointer"
                        title="Redimensionar p/ Tablet / iPad (4:3)"
                      >
                        <Tablet className="w-3.5 h-3.5 text-sky-400" />
                        <span className="hidden lg:inline">Tablet</span>
                      </button>
                      <button
                        onClick={() => handleResizeForDevice(activeL.id, 'android')}
                        className="px-2 py-1 hover:bg-purple-600/30 text-gray-200 hover:text-white rounded-lg flex items-center gap-1 text-[11px] font-semibold transition-all cursor-pointer"
                        title="Redimensionar p/ Android Mobile (9:16)"
                      >
                        <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="hidden lg:inline">Android</span>
                      </button>
                      <button
                        onClick={() => handleResizeForDevice(activeL.id, 'macos')}
                        className="px-2 py-1 hover:bg-purple-600/30 text-gray-200 hover:text-white rounded-lg flex items-center gap-1 text-[11px] font-semibold transition-all cursor-pointer"
                        title="Redimensionar p/ macOS Desktop (16:10 Retina)"
                      >
                        <Laptop className="w-3.5 h-3.5 text-purple-400" />
                        <span className="hidden lg:inline">macOS</span>
                      </button>
                    </div>

                    <div className="w-[1px] h-4 bg-white/20 shrink-0"></div>
                  </>
                )}

                {/* TEXT CONTROLS */}
                {activeL.type === 'text' && (
                  <>
                    <select
                      value={activeL.fontFamily || 'Impact'}
                      onChange={(e) =>
                        onUpdateLayer({ ...activeL, fontFamily: e.target.value })
                      }
                      className="bg-[#23242e] text-white text-[11px] px-2 py-1 rounded-lg border border-[#383945] focus:outline-none focus:border-purple-500 cursor-pointer shrink-0"
                    >
                      <option value="Impact">Impact</option>
                      <option value="Arial">Arial Bold</option>
                      <option value="Playfair Display">Playfair Display</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Pacifico">Pacifico</option>
                      <option value="Lobster">Lobster</option>
                      <option value="Great Vibes">Great Vibes</option>
                      <option value="Courier New">Courier</option>
                    </select>

                    <div className="flex items-center bg-[#23242e] rounded-lg border border-[#383945] p-0.5 shrink-0">
                      <button
                        onClick={() =>
                          onUpdateLayer({
                            ...activeL,
                            fontSize: Math.max(12, (activeL.fontSize || 36) - 4),
                          })
                        }
                        className="px-1.5 py-0.5 hover:bg-white/10 rounded font-bold text-xs"
                      >
                        -
                      </button>
                      <span className="px-1.5 text-[11px] font-mono font-bold text-purple-300">
                        {activeL.fontSize || 36}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateLayer({
                            ...activeL,
                            fontSize: Math.min(120, (activeL.fontSize || 36) + 4),
                          })
                        }
                        className="px-1.5 py-0.5 hover:bg-white/10 rounded font-bold text-xs"
                      >
                        +
                      </button>
                    </div>
                  </>
                )}

                {/* Universal Size Scale Controls (- / +) for active layer */}
                <div className="flex items-center bg-[#23242e] rounded-xl border border-[#383945] p-0.5 shrink-0" title="Aumentar ou Diminuir Tamanho do Item Selecionado">
                  <button
                    onClick={() => handleScaleActiveLayer(-10)}
                    className="p-1.5 hover:bg-rose-500/20 text-rose-300 hover:text-white rounded-lg flex items-center justify-center font-bold text-xs transition-all cursor-pointer"
                    title="Diminuir Tamanho do Item (-10%)"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-1 text-[10px] font-bold text-purple-300 uppercase shrink-0">
                    Tamanho
                  </span>
                  <button
                    onClick={() => handleScaleActiveLayer(10)}
                    className="p-1.5 hover:bg-emerald-500/20 text-emerald-300 hover:text-white rounded-lg flex items-center justify-center font-bold text-xs transition-all cursor-pointer"
                    title="Aumentar Tamanho do Item (+10%)"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Align Center Button */}
                <button
                  onClick={() => handleCenterLayer(activeL.id)}
                  className="p-1.5 hover:bg-white/10 rounded-lg text-gray-200 hover:text-white flex items-center gap-1 text-[11px] font-semibold transition-colors cursor-pointer shrink-0"
                  title="Centralizar na Estampa"
                >
                  <AlignCenter className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="hidden sm:inline">Centralizar</span>
                </button>

                {/* Mirror / Flip H & V */}
                <button
                  onClick={() => handleFlipHorizontal(activeL.id)}
                  className="p-1.5 hover:bg-white/10 rounded-lg text-gray-200 hover:text-white flex items-center gap-1 text-[11px] font-semibold transition-colors cursor-pointer shrink-0"
                  title="Espelhar Horizontalmente"
                >
                  <FlipHorizontal className="w-3.5 h-3.5 text-blue-400" />
                  <span className="hidden sm:inline">Espelhar</span>
                </button>

                {/* Rotate Button */}
                <button
                  onClick={() =>
                    onUpdateLayer({
                      ...activeL,
                      rotation: (activeL.rotation + 90) % 360,
                    })
                  }
                  className="p-1.5 hover:bg-white/10 rounded-lg text-gray-200 hover:text-white flex items-center gap-1 text-[11px] font-semibold transition-colors cursor-pointer shrink-0"
                  title="Girar 90°"
                >
                  <RotateCw className="w-3.5 h-3.5 text-sky-400" />
                  <span className="hidden sm:inline">Girar</span>
                </button>

                {/* Duplicate Button */}
                {onDuplicateLayer && (
                  <button
                    onClick={() => onDuplicateLayer(activeL.id)}
                    className="p-1.5 hover:bg-white/10 rounded-lg text-gray-200 hover:text-white flex items-center gap-1 text-[11px] font-semibold transition-colors cursor-pointer shrink-0"
                    title="Duplicar elemento"
                  >
                    <Copy className="w-3.5 h-3.5 text-purple-400" />
                    <span className="hidden sm:inline">Duplicar</span>
                  </button>
                )}

                {/* Export Object */}
                <button
                  onClick={() => handleExportLayerAsImage(activeL.id)}
                  className="p-1.5 hover:bg-white/10 rounded-lg text-gray-200 hover:text-white flex items-center gap-1 text-[11px] font-semibold transition-colors cursor-pointer shrink-0"
                  title="Exportar Objeto em PNG"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">Baixar PNG</span>
                </button>

                <div className="w-[1px] h-4 bg-white/20 shrink-0"></div>

                {/* Delete Button */}
                {onDeleteLayer && (
                  <button
                    onClick={() => onDeleteLayer(activeL.id)}
                    className="p-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/40 rounded-lg font-bold flex items-center gap-1 text-[11px] transition-colors cursor-pointer shrink-0"
                    title="Excluir Elemento Selecionado (Del)"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-red-400" />
                    <span>Excluir</span>
                  </button>
                )}
              </div>
            );
          })()}
        </div>
      )}

      {/* Bottom Zoom & View Controls */}
      <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1.5 backdrop-blur-md border rounded-2xl shadow-2xl z-30 text-xs ${
        theme === 'light'
          ? 'bg-white/95 border-slate-300 text-slate-800 shadow-slate-300/60'
          : 'bg-[#1e1e20]/95 border-[#38383c] text-gray-300 shadow-black/80'
      }`}>
        {/* Zoom Out (-) */}
        <button
          onClick={() => setZoom((z) => Math.max(0.1, Math.round((z - 0.1) * 10) / 10))}
          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
            theme === 'light' ? 'hover:bg-slate-100 text-slate-700 hover:text-slate-900' : 'hover:bg-white/10 text-gray-300 hover:text-white'
          }`}
          title="Diminuir Zoom (-10%)"
        >
          <ZoomOut className="w-3.5 h-3.5" />
        </button>

        {/* Zoom Level Select Dropdown */}
        <select
          value={Math.round(zoom * 100)}
          onChange={(e) => setZoom(parseInt(e.target.value) / 100)}
          className={`font-mono text-[11px] font-bold px-1.5 py-1 rounded-lg border focus:outline-none cursor-pointer ${
            theme === 'light'
              ? 'bg-slate-100 border-slate-300 text-purple-700'
              : 'bg-[#141416] border-[#38383c] text-sky-400'
          }`}
          title="Selecionar Porcentagem de Zoom"
        >
          <option value="25">25%</option>
          <option value="50">50%</option>
          <option value="75">75%</option>
          <option value="100">100%</option>
          <option value="125">125%</option>
          <option value="150">150%</option>
          <option value="200">200%</option>
          <option value="300">300%</option>
          <option value="400">400%</option>
        </select>

        {/* Zoom In (+) */}
        <button
          onClick={() => setZoom((z) => Math.min(4.0, Math.round((z + 0.1) * 10) / 10))}
          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
            theme === 'light' ? 'hover:bg-slate-100 text-slate-700 hover:text-slate-900' : 'hover:bg-white/10 text-gray-300 hover:text-white'
          }`}
          title="Aumentar Zoom (+10%)"
        >
          <ZoomIn className="w-3.5 h-3.5" />
        </button>

        <div className={`w-[1px] h-4 my-auto ${theme === 'light' ? 'bg-slate-300' : 'bg-[#38383c]'}`}></div>

        {/* Fit to Screen (Ajustar Tela) */}
        <button
          onClick={fitToScreen}
          className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-lg transition-colors cursor-pointer ${
            theme === 'light'
              ? 'bg-purple-50 text-purple-700 hover:bg-purple-100'
              : 'bg-sky-500/15 text-sky-300 hover:bg-sky-500/25 hover:text-white'
          }`}
          title="Ajustar Estampa Automaticamente à Tela"
        >
          <Maximize2 className="w-3.5 h-3.5 text-sky-400" />
          <span>Ajustar Tela</span>
        </button>

        {/* Reset Pan / Center */}
        <button
          onClick={() => setPan({ x: 0, y: 0 })}
          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
            theme === 'light' ? 'hover:bg-slate-100 text-slate-700 hover:text-slate-900' : 'hover:bg-white/10 text-gray-300 hover:text-white'
          }`}
          title="Centralizar Posição da Tela"
        >
          <Move className="w-3.5 h-3.5" />
        </button>

        <div className={`w-[1px] h-4 my-auto ${theme === 'light' ? 'bg-slate-300' : 'bg-[#38383c]'}`}></div>

        {/* Toggle Floating Mover & Ajustar Panel */}
        <button
          onClick={() => setShowTouchPad((prev) => !prev)}
          className={`flex items-center gap-1 px-2 py-1 text-[11px] font-semibold rounded-lg transition-all cursor-pointer ${
            showTouchPad && activeLayerId
              ? 'bg-purple-600 text-white shadow-md'
              : theme === 'light'
              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              : 'bg-[#23242e] text-purple-300 hover:bg-purple-900/40 border border-purple-500/30'
          }`}
          title="Mover e Ajustar Item (Teclado Touch / D-Pad)"
        >
          <Target className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden xs:inline">Mover & Ajustar</span>
        </button>
      </div>

      {/* Floating Touch Controls (Mover & Redimensionar) for Selected Element - Works in Portrait & Landscape */}
      {activeLayerId && showTouchPad && (
        <div className="absolute bottom-14 right-3 max-h-[85vh] flex flex-col items-center gap-2 bg-[#181920]/95 backdrop-blur-xl border border-purple-500/50 p-2.5 rounded-2xl shadow-2xl z-30 animate-in fade-in slide-in-from-right-3">
          <div className="flex items-center justify-between w-full text-[9px] font-extrabold text-purple-300 uppercase tracking-wider px-0.5 border-b border-purple-500/20 pb-1">
            <div className="flex items-center gap-1">
              <Target className="w-3 h-3 text-emerald-400" />
              <span>Mover & Ajustar</span>
            </div>
            <button
              onClick={() => setShowTouchPad(false)}
              className="text-gray-400 hover:text-white p-0.5 rounded cursor-pointer transition-colors"
              title="Minimizar Painel"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Scale Buttons (+ / -) */}
          <div className="flex items-center gap-1.5 w-full">
            <button
              onClick={() => handleScaleActiveLayer(10)}
              className="flex-1 h-9 bg-purple-600 active:bg-purple-700 text-white rounded-xl flex items-center justify-center font-bold shadow-md transition-transform active:scale-95 cursor-pointer"
              title="Aumentar Tamanho (+10%)"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScaleActiveLayer(-10)}
              className="flex-1 h-9 bg-[#23242e] active:bg-purple-900/50 text-rose-400 border border-[#383945] rounded-xl flex items-center justify-center font-bold shadow-md transition-transform active:scale-95 cursor-pointer"
              title="Diminuir Tamanho (-10%)"
            >
              <Minus className="w-4 h-4" />
            </button>
          </div>

          {/* D-Pad Directional Move Arrows */}
          <div className="grid grid-cols-3 gap-1 w-28 h-28 bg-[#121318] border border-[#2d2e38] p-1 rounded-xl items-center justify-center">
            <div></div>
            <button
              onClick={() => handleMoveActiveLayer(0, -15)}
              className="w-8 h-8 bg-[#23242e] active:bg-purple-600 text-purple-300 active:text-white rounded-lg flex items-center justify-center shadow transition-all active:scale-90 cursor-pointer mx-auto"
              title="Mover para Cima (15px)"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
            <div></div>

            <button
              onClick={() => handleMoveActiveLayer(-15, 0)}
              className="w-8 h-8 bg-[#23242e] active:bg-purple-600 text-purple-300 active:text-white rounded-lg flex items-center justify-center shadow transition-all active:scale-90 cursor-pointer mx-auto"
              title="Mover para Esquerda (15px)"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleCenterLayer(activeLayerId)}
              className="w-8 h-8 bg-purple-600/30 active:bg-purple-600 text-sky-400 active:text-white border border-sky-500/30 rounded-lg flex items-center justify-center shadow transition-all active:scale-90 cursor-pointer mx-auto"
              title="Centralizar Item"
            >
              <Target className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleMoveActiveLayer(15, 0)}
              className="w-8 h-8 bg-[#23242e] active:bg-purple-600 text-purple-300 active:text-white rounded-lg flex items-center justify-center shadow transition-all active:scale-90 cursor-pointer mx-auto"
              title="Mover para Direita (15px)"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            <div></div>
            <button
              onClick={() => handleMoveActiveLayer(0, 15)}
              className="w-8 h-8 bg-[#23242e] active:bg-purple-600 text-purple-300 active:text-white rounded-lg flex items-center justify-center shadow transition-all active:scale-90 cursor-pointer mx-auto"
              title="Mover para Baixo (15px)"
            >
              <ArrowDown className="w-4 h-4" />
            </button>
            <div></div>
          </div>
        </div>
      )}

      {/* Floating Pill when minimized */}
      {activeLayerId && !showTouchPad && (
        <button
          onClick={() => setShowTouchPad(true)}
          className="absolute bottom-14 right-3 bg-purple-600 hover:bg-purple-500 active:scale-95 text-white px-3 py-1.5 rounded-full shadow-2xl border border-purple-400 flex items-center gap-1.5 text-xs font-bold z-30 animate-in fade-in cursor-pointer"
          title="Abrir Painel Mover & Ajustar"
        >
          <Target className="w-4 h-4 text-emerald-300" />
          <span>Mover & Ajustar</span>
        </button>
      )}

      {/* Canva Floating Right-Click / Touch Context Menu */}
      {contextMenu && (
        <div
          className={`fixed z-50 w-60 rounded-2xl border shadow-2xl backdrop-blur-md text-xs py-2 flex flex-col select-none animate-in fade-in zoom-in-95 duration-150 ${
            theme === 'light'
              ? 'bg-white/95 border-slate-200 text-slate-800 shadow-slate-400/50'
              : 'bg-[#1a1a1e]/95 border-[#383842] text-gray-200 shadow-black/80'
          }`}
          style={{
            left: Math.min(contextMenu.x, window.innerWidth - 250),
            top: Math.min(contextMenu.y, window.innerHeight - 420),
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {(() => {
            const activeL = layers.find((l) => l.id === contextMenu.layerId);
            if (activeL) {
              const isTop = layers.length > 0 && layers[layers.length - 1].id === activeL.id;
              const isBottom = layers.length > 0 && layers[0].id === activeL.id;

              return (
                <>
                  {/* Layer Header */}
                  <div className={`px-3 py-1.5 border-b text-[11px] font-semibold flex items-center justify-between ${
                    theme === 'light' ? 'border-slate-100 text-purple-700 bg-slate-50/80' : 'border-[#2e2e36] text-sky-400 bg-[#141418]'
                  }`}>
                    <span className="truncate max-w-[150px]">{activeL.name}</span>
                    <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono font-bold">
                      {activeL.type}
                    </span>
                  </div>

                  {/* Layer Z-Index Ordering Actions */}
                  <div className="py-1">
                    <div className="px-3 py-1 text-[9px] uppercase font-bold text-gray-400 tracking-wider">
                      Ordem da Camada
                    </div>
                    <button
                      disabled={isTop}
                      onClick={() => handleBringToFront(activeL.id)}
                      className={`w-full px-3 py-1.5 text-left flex items-center gap-2.5 transition-colors cursor-pointer ${
                        isTop
                          ? 'opacity-40 cursor-not-allowed'
                          : theme === 'light' ? 'hover:bg-purple-50 hover:text-purple-700' : 'hover:bg-[#2a2a32] hover:text-white'
                      }`}
                    >
                      <ArrowUpToLine className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                      <span>Trazer para o Topo (Frente)</span>
                    </button>
                    <button
                      disabled={isTop}
                      onClick={() => handleBringForward(activeL.id)}
                      className={`w-full px-3 py-1.5 text-left flex items-center gap-2.5 transition-colors cursor-pointer ${
                        isTop
                          ? 'opacity-40 cursor-not-allowed'
                          : theme === 'light' ? 'hover:bg-purple-50 hover:text-purple-700' : 'hover:bg-[#2a2a32] hover:text-white'
                      }`}
                    >
                      <ChevronUp className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>Avançar 1 Nível</span>
                    </button>
                    <button
                      disabled={isBottom}
                      onClick={() => handleSendBackward(activeL.id)}
                      className={`w-full px-3 py-1.5 text-left flex items-center gap-2.5 transition-colors cursor-pointer ${
                        isBottom
                          ? 'opacity-40 cursor-not-allowed'
                          : theme === 'light' ? 'hover:bg-purple-50 hover:text-purple-700' : 'hover:bg-[#2a2a32] hover:text-white'
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>Recuar 1 Nível</span>
                    </button>
                    <button
                      disabled={isBottom}
                      onClick={() => handleSendToBack(activeL.id)}
                      className={`w-full px-3 py-1.5 text-left flex items-center gap-2.5 transition-colors cursor-pointer ${
                        isBottom
                          ? 'opacity-40 cursor-not-allowed'
                          : theme === 'light' ? 'hover:bg-purple-50 hover:text-purple-700' : 'hover:bg-[#2a2a32] hover:text-white'
                      }`}
                    >
                      <ArrowDownToLine className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                      <span>Enviar para o Fundo (Trás)</span>
                    </button>
                  </div>

                  <div className={`my-1 border-t ${theme === 'light' ? 'border-slate-100' : 'border-[#2e2e36]'}`} />

                  {/* Alignment & Transform Actions */}
                  <div className="py-1">
                    <div className="px-3 py-1 text-[9px] uppercase font-bold text-gray-400 tracking-wider">
                      Alinhamento & Transformação
                    </div>
                    <button
                      onClick={() => {
                        handleScaleActiveLayer(10);
                        setContextMenu(null);
                      }}
                      className={`w-full px-3 py-1.5 text-left flex items-center gap-2.5 transition-colors cursor-pointer ${
                        theme === 'light' ? 'hover:bg-purple-50 hover:text-purple-700' : 'hover:bg-[#2a2a32] hover:text-white'
                      }`}
                    >
                      <Plus className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Aumentar Tamanho (+10%)</span>
                    </button>
                    <button
                      onClick={() => {
                        handleScaleActiveLayer(-10);
                        setContextMenu(null);
                      }}
                      className={`w-full px-3 py-1.5 text-left flex items-center gap-2.5 transition-colors cursor-pointer ${
                        theme === 'light' ? 'hover:bg-purple-50 hover:text-purple-700' : 'hover:bg-[#2a2a32] hover:text-white'
                      }`}
                    >
                      <Minus className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span>Diminuir Tamanho (-10%)</span>
                    </button>

                    <button
                      onClick={() => handleCenterLayer(activeL.id)}
                      className={`w-full px-3 py-1.5 text-left flex items-center gap-2.5 transition-colors cursor-pointer ${
                        theme === 'light' ? 'hover:bg-purple-50 hover:text-purple-700' : 'hover:bg-[#2a2a32] hover:text-white'
                      }`}
                    >
                      <AlignCenter className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>Centralizar na Estampa</span>
                    </button>
                    <button
                      onClick={() => handleFlipHorizontal(activeL.id)}
                      className={`w-full px-3 py-1.5 text-left flex items-center justify-between transition-colors cursor-pointer ${
                        theme === 'light' ? 'hover:bg-purple-50 hover:text-purple-700' : 'hover:bg-[#2a2a32] hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <FlipHorizontal className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>Espelhar Horizontalmente</span>
                      </div>
                      {activeL.flipX && <span className="text-[10px] font-bold text-sky-400">ON</span>}
                    </button>
                    <button
                      onClick={() => handleFlipVertical(activeL.id)}
                      className={`w-full px-3 py-1.5 text-left flex items-center justify-between transition-colors cursor-pointer ${
                        theme === 'light' ? 'hover:bg-purple-50 hover:text-purple-700' : 'hover:bg-[#2a2a32] hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <FlipVertical className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>Espelhar Verticalmente</span>
                      </div>
                      {activeL.flipY && <span className="text-[10px] font-bold text-sky-400">ON</span>}
                    </button>

                    {(activeL.type === 'image' || activeL.type === 'smart') && (
                      <>
                        <button
                          onClick={() => handleResizeForDevice(activeL.id, 'tablet')}
                          className={`w-full px-3 py-1.5 text-left flex items-center gap-2.5 transition-colors cursor-pointer ${
                            theme === 'light' ? 'hover:bg-purple-50 hover:text-purple-700' : 'hover:bg-[#2a2a32] hover:text-white'
                          }`}
                        >
                          <Tablet className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span>Redimensionar p/ Tablet (iPad 4:3)</span>
                        </button>
                        <button
                          onClick={() => handleResizeForDevice(activeL.id, 'android')}
                          className={`w-full px-3 py-1.5 text-left flex items-center gap-2.5 transition-colors cursor-pointer ${
                            theme === 'light' ? 'hover:bg-purple-50 hover:text-purple-700' : 'hover:bg-[#2a2a32] hover:text-white'
                          }`}
                        >
                          <Smartphone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>Redimensionar p/ Android Mobile (9:16)</span>
                        </button>
                        <button
                          onClick={() => handleResizeForDevice(activeL.id, 'macos')}
                          className={`w-full px-3 py-1.5 text-left flex items-center gap-2.5 transition-colors cursor-pointer ${
                            theme === 'light' ? 'hover:bg-purple-50 hover:text-purple-700' : 'hover:bg-[#2a2a32] hover:text-white'
                          }`}
                        >
                          <Laptop className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                          <span>Redimensionar p/ macOS (Retina 16:10)</span>
                        </button>
                        <button
                          onClick={() => handleFillPrintArea(activeL.id)}
                          className={`w-full px-3 py-1.5 text-left flex items-center gap-2.5 transition-colors cursor-pointer ${
                            theme === 'light' ? 'hover:bg-purple-50 hover:text-purple-700' : 'hover:bg-[#2a2a32] hover:text-white'
                          }`}
                        >
                          <Maximize className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>Preencher Área de Estampa</span>
                        </button>
                      </>
                    )}
                  </div>

                  <div className={`my-1 border-t ${theme === 'light' ? 'border-slate-100' : 'border-[#2e2e36]'}`} />

                  {/* Actions: Duplicate, Lock, Hide, Delete */}
                  <div className="py-1">
                    {onDuplicateLayer && (
                      <button
                        onClick={() => {
                          onDuplicateLayer(activeL.id);
                          setContextMenu(null);
                        }}
                        className={`w-full px-3 py-1.5 text-left flex items-center gap-2.5 transition-colors cursor-pointer ${
                          theme === 'light' ? 'hover:bg-purple-50 hover:text-purple-700' : 'hover:bg-[#2a2a32] hover:text-white'
                        }`}
                      >
                        <Copy className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>Duplicar Elemento</span>
                      </button>
                    )}

                    {onToggleLock && (
                      <button
                        onClick={() => {
                          onToggleLock(activeL.id);
                          setContextMenu(null);
                        }}
                        className={`w-full px-3 py-1.5 text-left flex items-center justify-between transition-colors cursor-pointer ${
                          theme === 'light' ? 'hover:bg-purple-50 hover:text-purple-700' : 'hover:bg-[#2a2a32] hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {activeL.locked ? <Unlock className="w-3.5 h-3.5 text-amber-400 shrink-0" /> : <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                          <span>{activeL.locked ? 'Desbloquear Camada' : 'Bloquear Camada'}</span>
                        </div>
                      </button>
                    )}

                    {onToggleVisibility && (
                      <button
                        onClick={() => {
                          onToggleVisibility(activeL.id);
                          setContextMenu(null);
                        }}
                        className={`w-full px-3 py-1.5 text-left flex items-center justify-between transition-colors cursor-pointer ${
                          theme === 'light' ? 'hover:bg-purple-50 hover:text-purple-700' : 'hover:bg-[#2a2a32] hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {activeL.visible ? <EyeOff className="w-3.5 h-3.5 text-gray-400 shrink-0" /> : <Eye className="w-3.5 h-3.5 text-gray-400 shrink-0" />}
                          <span>{activeL.visible ? 'Ocultar Camada' : 'Mostrar Camada'}</span>
                        </div>
                      </button>
                    )}

                    {onDeleteLayer && (
                      <button
                        onClick={() => {
                          onDeleteLayer(activeL.id);
                          setContextMenu(null);
                        }}
                        className="w-full px-3 py-1.5 text-left flex items-center gap-2.5 text-rose-500 hover:bg-rose-500/10 transition-colors cursor-pointer font-medium"
                      >
                        <Trash2 className="w-3.5 h-3.5 shrink-0" />
                        <span>Excluir Elemento</span>
                      </button>
                    )}
                  </div>
                </>
              );
            }

            return (
              <div className="py-1">
                <div className="px-3 py-1 border-b text-[11px] font-semibold text-gray-400">
                  Ações da Tela
                </div>
                <button
                  onClick={() => {
                    onSelectLayer(null);
                    setContextMenu(null);
                  }}
                  className={`w-full px-3 py-1.5 text-left flex items-center gap-2.5 transition-colors cursor-pointer ${
                    theme === 'light' ? 'hover:bg-purple-50 hover:text-purple-700' : 'hover:bg-[#2a2a32] hover:text-white'
                  }`}
                >
                  <Square className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span>Deselecionar Tudo</span>
                </button>
                <button
                  onClick={() => {
                    setPan({ x: 0, y: 0 });
                    setZoom(1.0);
                    setContextMenu(null);
                  }}
                  className={`w-full px-3 py-1.5 text-left flex items-center gap-2.5 transition-colors cursor-pointer ${
                    theme === 'light' ? 'hover:bg-purple-50 hover:text-purple-700' : 'hover:bg-[#2a2a32] hover:text-white'
                  }`}
                >
                  <Maximize2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Redefinir Posição / Zoom</span>
                </button>
              </div>
            );
          })()}
        </div>
      )}

      {/* Advanced Image Adjustment & Filter Modal */}
      <ImageAdjustmentModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        activeLayer={layers.find((l) => l.id === activeLayerId) || null}
        onUpdateLayer={onUpdateLayer}
        pushHistoryStep={pushHistoryStep}
        allLayers={layers}
        theme={theme}
        defaultTab={modalDefaultTab}
      />
    </div>
  );
};
