import React, { useRef, useEffect, useState } from 'react';
import { Layer, ToolType, ShapeType, SublimationProduct } from '../types';
import { drawWarpedText } from '../utils/textWarp';
import { drawVectorShape } from '../utils/shapeDrawer';
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
  Maximize
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
  // Base high resolution canvas width/height (300 DPI target ratio)
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

    setZoom(Math.max(0.15, fitZoom));
    setPan({ x: 0, y: 0 });
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
              // Fallback gradient pattern on image load error
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

      ctx.restore();
    });

    ctx.restore();

    // Create a clean snapshot of artwork (without editing handles/selection box) for 3D mapping
    const cleanCanvas = document.createElement('canvas');
    cleanCanvas.width = canvas.width;
    cleanCanvas.height = canvas.height;
    const cleanCtx = cleanCanvas.getContext('2d');
    if (cleanCtx) {
      cleanCtx.drawImage(canvas, 0, 0);
      onCanvasRendered(cleanCanvas);
    }

    // Render Bounding Box and Transform handles for active layer (editing UI only)
    const activeLayer = layers.find((l) => l.id === activeLayerId);
    if (activeLayer && activeLayer.visible) {
      ctx.save();
      ctx.strokeStyle = '#007acc';
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
      ctx.strokeStyle = '#007acc';
      ctx.lineWidth = 1.5;

      // Rotation top stem line & handle
      ctx.beginPath();
      ctx.moveTo(activeLayer.width / 2, 0);
      ctx.lineTo(activeLayer.width / 2, -22);
      ctx.stroke();

      ctx.fillStyle = '#007acc';
      ctx.beginPath();
      ctx.arc(activeLayer.width / 2, -22, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Corner handles (Squares)
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#007acc';
      ctx.lineWidth = 1.5;
      const cornerSize = 10;
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
        ctx.arc(s.x, s.y, 4.5, 0, Math.PI * 2);
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
    const r = 14; // Hit tolerance
    if (Math.hypot(localX - w / 2, localY - (-22)) <= r) return 'rotate';
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
        onUpdateLayer({
          ...activeLayer,
          x: mouseX - layerDragOffsetRef.current.x,
          y: mouseY - layerDragOffsetRef.current.y,
        });
        setCursorStyle('move');
        return;
      }
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

  // Helper Star Drawer
  const drawStar = (
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    spikes: number,
    outerRadius: number,
    innerRadius: number
  ) => {
    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
  };

  // Helper Heart Drawer
  const drawHeart = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number
  ) => {
    ctx.beginPath();
    ctx.moveTo(x + w / 2, y + h / 4);
    ctx.bezierCurveTo(x + w / 2, y, x, y, x, y + h / 4);
    ctx.bezierCurveTo(x, y + h / 2, x + w / 2, y + (h * 3) / 4, x + w / 2, y + h);
    ctx.bezierCurveTo(x + w / 2, y + (h * 3) / 4, x + w, y + h / 2, x + w, y + h / 4);
    ctx.bezierCurveTo(x + w, y, x + w / 2, y, x + w / 2, y + h / 4);
    ctx.closePath();
  };

  return (
    <div
      ref={containerRef}
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
        <div className={`absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-2 backdrop-blur-lg border rounded-2xl shadow-2xl z-30 text-xs animate-in fade-in slide-in-from-top-3 duration-200 ${
          theme === 'light'
            ? 'bg-white/95 border-purple-200 text-slate-800 shadow-slate-300/60'
            : 'bg-[#181920]/95 border-purple-500/40 text-gray-200'
        }`}>
          {(() => {
            const activeL = layers.find((l) => l.id === activeLayerId);
            if (!activeL) return null;

            return (
              <div className="flex items-center gap-2.5">
                {/* Layer Title Badge */}
                <span className="text-[11px] font-bold text-purple-300 max-w-[110px] truncate bg-purple-950/60 px-2 py-0.5 rounded-lg border border-purple-500/30">
                  {activeL.name}
                </span>

                <div className="w-[1px] h-4 bg-white/20"></div>

                {/* TEXT CONTROLS */}
                {activeL.type === 'text' && (
                  <>
                    {/* Font Family Selector */}
                    <select
                      value={activeL.fontFamily || 'Impact'}
                      onChange={(e) =>
                        onUpdateLayer({ ...activeL, fontFamily: e.target.value })
                      }
                      className="bg-[#23242e] text-white text-[11px] px-2 py-1 rounded-lg border border-[#383945] focus:outline-none focus:border-purple-500 cursor-pointer"
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

                    {/* Font Size Decrement / Increment */}
                    <div className="flex items-center bg-[#23242e] rounded-lg border border-[#383945] p-0.5">
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

                    {/* Curved Text Arc Toggle */}
                    <button
                      onClick={() =>
                        onUpdateLayer({
                          ...activeL,
                          isCurved: !activeL.isCurved,
                          curveRadius: activeL.curveRadius || 120,
                        })
                      }
                      className={`px-2 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                        activeL.isCurved
                          ? 'bg-purple-600 text-white shadow-sm'
                          : 'bg-[#23242e] text-gray-300 hover:text-white'
                      }`}
                      title="Alternar Texto Curvado em Arco (Caneca)"
                    >
                      <span>Arco: {activeL.isCurved ? 'ON' : 'OFF'}</span>
                    </button>
                  </>
                )}

                {/* Color Swatches: Preenchimento e Cor da Linha */}
                <div className="flex items-center gap-2 bg-[#23242e] px-2 py-1 rounded-xl border border-[#383945]">
                  {/* Fill Color */}
                  <div className="flex items-center gap-1" title="Cor de Preenchimento / Fundo">
                    <span className="text-[10px] text-gray-300 font-medium hidden sm:inline">Cor:</span>
                    <label
                      className="w-5 h-5 rounded-full border border-white/40 cursor-pointer shadow-inner hover:scale-110 transition-transform relative overflow-hidden flex-shrink-0"
                      style={{ backgroundColor: activeL.color || activeColor }}
                      title="Selecionar Cor de Preenchimento"
                    >
                      <input
                        type="color"
                        value={activeL.color || activeColor}
                        onChange={(e) =>
                          onUpdateLayer({ ...activeL, color: e.target.value })
                        }
                        className="opacity-0 absolute inset-0 cursor-pointer w-full h-full"
                      />
                    </label>
                  </div>

                  <div className="w-[1px] h-3.5 bg-white/20"></div>

                  {/* Line / Stroke Color */}
                  <div className="flex items-center gap-1" title="Cor da Linha / Contorno">
                    <span className="text-[10px] text-purple-300 font-medium hidden sm:inline">Linha:</span>
                    <label
                      className="w-5 h-5 rounded-full border-2 border-purple-400 cursor-pointer shadow-inner hover:scale-110 transition-transform relative overflow-hidden flex-shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: activeL.strokeColor || activeL.color || '#000000' }}
                      title="Selecionar Cor da Linha / Contorno"
                    >
                      <input
                        type="color"
                        value={activeL.strokeColor || activeL.color || '#000000'}
                        onChange={(e) =>
                          onUpdateLayer({
                            ...activeL,
                            strokeColor: e.target.value,
                            strokeWidth: activeL.strokeWidth ? activeL.strokeWidth : 3,
                          })
                        }
                        className="opacity-0 absolute inset-0 cursor-pointer w-full h-full"
                      />
                    </label>
                  </div>

                  {/* Line Thickness */}
                  {(activeL.type === 'shape' || activeL.type === 'text') && (
                    <>
                      <div className="w-[1px] h-3.5 bg-white/20"></div>
                      <div className="flex items-center gap-1" title="Espessura da Linha / Contorno">
                        <span className="text-[10px] text-gray-400 font-medium hidden lg:inline">Grossura:</span>
                        <input
                          type="number"
                          min="0"
                          max="50"
                          value={activeL.strokeWidth ?? 0}
                          onChange={(e) =>
                            onUpdateLayer({
                              ...activeL,
                              strokeWidth: Math.max(0, parseInt(e.target.value) || 0),
                            })
                          }
                          className="w-10 bg-[#121216] border border-[#383945] rounded px-1 py-0.5 text-center text-purple-300 font-mono text-[10px] font-bold focus:outline-none focus:border-purple-500"
                        />
                        <span className="text-[9px] text-gray-400 font-mono">px</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="w-[1px] h-4 bg-white/20"></div>

                {/* Duplicate Button */}
                {onDuplicateLayer && (
                  <button
                    onClick={() => onDuplicateLayer(activeL.id)}
                    className="p-1.5 hover:bg-white/10 rounded-lg text-gray-200 hover:text-white flex items-center gap-1 text-[11px] font-semibold transition-colors cursor-pointer"
                    title="Duplicar elemento"
                  >
                    <Copy className="w-3.5 h-3.5 text-purple-400" />
                    <span className="hidden sm:inline">Duplicar</span>
                  </button>
                )}

                {/* Rotate Button */}
                <button
                  onClick={() =>
                    onUpdateLayer({
                      ...activeL,
                      rotation: (activeL.rotation + 90) % 360,
                    })
                  }
                  className="p-1.5 hover:bg-white/10 rounded-lg text-gray-200 hover:text-white flex items-center gap-1 text-[11px] font-semibold transition-colors cursor-pointer"
                  title="Girar 90°"
                >
                  <RotateCw className="w-3.5 h-3.5 text-sky-400" />
                  <span className="hidden sm:inline">Girar</span>
                </button>

                <div className="w-[1px] h-4 bg-white/20"></div>

                {/* Delete Button */}
                {onDeleteLayer && (
                  <button
                    onClick={() => onDeleteLayer(activeL.id)}
                    className="p-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/40 rounded-lg font-bold flex items-center gap-1 text-[11px] transition-colors cursor-pointer"
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
      <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 p-1.5 backdrop-blur-md border rounded-xl shadow-2xl z-30 text-xs ${
        theme === 'light'
          ? 'bg-white/95 border-slate-300 text-slate-800 shadow-slate-300/60'
          : 'bg-[#1e1e20]/90 border-[#38383c] text-gray-300'
      }`}>
        <button
          onClick={() => setZoom((z) => Math.max(0.2, z - 0.1))}
          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
            theme === 'light' ? 'hover:bg-slate-100 text-slate-700 hover:text-slate-900' : 'hover:bg-white/10 text-gray-300 hover:text-white'
          }`}
          title="Diminuir Zoom"
        >
          <ZoomOut className="w-3.5 h-3.5" />
        </button>

        <span className={`font-mono text-[11px] font-semibold w-12 text-center ${
          theme === 'light' ? 'text-purple-700' : 'text-sky-400'
        }`}>
          {Math.round(zoom * 100)}%
        </span>

        <button
          onClick={() => setZoom((z) => Math.min(3.0, z + 0.1))}
          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
            theme === 'light' ? 'hover:bg-slate-100 text-slate-700 hover:text-slate-900' : 'hover:bg-white/10 text-gray-300 hover:text-white'
          }`}
          title="Aumentar Zoom"
        >
          <ZoomIn className="w-3.5 h-3.5" />
        </button>

        <div className={`w-[1px] h-4 my-auto ${theme === 'light' ? 'bg-slate-300' : 'bg-[#38383c]'}`}></div>

        <button
          onClick={fitToScreen}
          className={`px-2 py-1 text-[11px] font-medium rounded-lg transition-colors cursor-pointer ${
            theme === 'light' ? 'hover:bg-slate-100 text-slate-700 hover:text-slate-900' : 'hover:bg-white/10 text-gray-300 hover:text-white'
          }`}
        >
          Ajustar Tela
        </button>
      </div>

      {/* Canva Floating Right-Click Context Menu */}
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
                      <button
                        onClick={() => handleFillPrintArea(activeL.id)}
                        className={`w-full px-3 py-1.5 text-left flex items-center gap-2.5 transition-colors cursor-pointer ${
                          theme === 'light' ? 'hover:bg-purple-50 hover:text-purple-700' : 'hover:bg-[#2a2a32] hover:text-white'
                        }`}
                      >
                        <Maximize className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Preencher Área de Estampa</span>
                      </button>
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
    </div>
  );
};
