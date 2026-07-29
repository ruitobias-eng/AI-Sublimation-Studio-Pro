import React, { useRef, useEffect, useState } from 'react';
import { Layer, ToolType, ShapeType, SublimationProduct } from '../types';
import { ZoomIn, ZoomOut, Maximize2, Move, Grid, FlipHorizontal, Eye, Trash2, Copy, RotateCw } from 'lucide-react';

interface CanvasAreaProps {
  product: SublimationProduct;
  layers: Layer[];
  activeLayerId: string | null;
  onSelectLayer: (id: string | null) => void;
  onUpdateLayer: (updatedLayer: Layer) => void;
  onDeleteLayer?: (id: string) => void;
  onDuplicateLayer?: (id: string) => void;
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
  const isResizingModeRef = useRef<'br' | 'rotate' | null>(null);
  const resizeStartRef = useRef<{ mouseX: number; mouseY: number; x: number; y: number; w: number; h: number; rot: number } | null>(null);

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
      ctx.translate(-layer.width / 2, -layer.height / 2);

      // Render based on layer type
      if (layer.type === 'text') {
        ctx.fillStyle = layer.color || activeColor;
        ctx.font = `${layer.fontWeight || 'normal'} ${layer.fontSize || 36}px ${layer.fontFamily || 'Arial'}`;
        ctx.textAlign = layer.textAlign || 'left';
        ctx.textBaseline = 'top';

        if (layer.textCurved && layer.curveRadius) {
          // Curved / Arched text for mugs & hats
          const text = layer.content;
          const radius = layer.curveRadius || 120;

          ctx.save();
          for (let i = 0; i < text.length; i++) {
            ctx.save();
            ctx.rotate((i - text.length / 2) * 0.15);
            ctx.fillText(text[i], 0, -radius);
            ctx.restore();
          }
          ctx.restore();
        } else {
          ctx.fillText(layer.content, 0, 0);
        }
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
        ctx.fillStyle = layer.color || activeColor;
        ctx.strokeStyle = layer.strokeColor || '#000000';
        ctx.lineWidth = layer.strokeWidth || 0;

        ctx.beginPath();
        if (layer.shapeType === 'circle') {
          ctx.ellipse(layer.width / 2, layer.height / 2, layer.width / 2, layer.height / 2, 0, 0, 2 * Math.PI);
        } else if (layer.shapeType === 'star') {
          drawStar(ctx, layer.width / 2, layer.height / 2, 5, layer.width / 2, layer.width / 4);
        } else if (layer.shapeType === 'heart') {
          drawHeart(ctx, 0, 0, layer.width, layer.height);
        } else {
          // Default Rectangle
          ctx.rect(0, 0, layer.width, layer.height);
        }
        ctx.fill();
        if (layer.strokeWidth && layer.strokeWidth > 0) ctx.stroke();
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

      // Corner handles
      ctx.setLineDash([]);
      ctx.fillStyle = '#ffffff';
      const handleSize = 8;
      const corners = [
        { x: 0, y: 0 },
        { x: activeLayer.width, y: 0 },
        { x: 0, y: activeLayer.height },
        { x: activeLayer.width, y: activeLayer.height },
      ];
      corners.forEach((c) => {
        ctx.fillRect(c.x - handleSize / 2, c.y - handleSize / 2, handleSize, handleSize);
        ctx.strokeRect(c.x - handleSize / 2, c.y - handleSize / 2, handleSize, handleSize);
      });

      // Rotation top handle
      ctx.fillStyle = '#007acc';
      ctx.beginPath();
      ctx.arc(activeLayer.width / 2, -20, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }
  }, [layers, activeLayerId, product, mirrorSublimation, baseCanvasWidth, baseCanvasHeight]);

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
      return;
    }

    if (activeTool === 'brush') {
      isDrawingRef.current = true;
      currentPathRef.current = [{ x: mouseX, y: mouseY }];
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

    // Check corner handles or top rotation handle on active layer
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

        // Check rotation handle (localX ~ width / 2, localY ~ -20)
        const distRot = Math.hypot(localX - activeLayer.width / 2, localY - (-20));
        if (distRot <= 16) {
          isResizingModeRef.current = 'rotate';
          resizeStartRef.current = {
            mouseX,
            mouseY,
            x: activeLayer.x,
            y: activeLayer.y,
            w: activeLayer.width,
            h: activeLayer.height,
            rot: activeLayer.rotation,
          };
          return;
        }

        // Check bottom-right corner handle (localX ~ width, localY ~ height)
        if (Math.abs(localX - activeLayer.width) <= 16 && Math.abs(localY - activeLayer.height) <= 16) {
          isResizingModeRef.current = 'br';
          resizeStartRef.current = {
            mouseX,
            mouseY,
            x: activeLayer.x,
            y: activeLayer.y,
            w: activeLayer.width,
            h: activeLayer.height,
            rot: activeLayer.rotation,
          };
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
    } else {
      onSelectLayer(null);
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
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    if (isResizingModeRef.current && activeLayerId && resizeStartRef.current) {
      const activeLayer = layers.find((l) => l.id === activeLayerId);
      if (activeLayer) {
        const init = resizeStartRef.current;
        if (isResizingModeRef.current === 'rotate') {
          const centerX = activeLayer.x + activeLayer.width / 2;
          const centerY = activeLayer.y + activeLayer.height / 2;
          let angle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI) + 90;
          if (angle < 0) angle += 360;
          onUpdateLayer({ ...activeLayer, rotation: Math.round(angle) });
          return;
        }
        if (isResizingModeRef.current === 'br') {
          const deltaX = mouseX - init.mouseX;
          const deltaY = mouseY - init.mouseY;
          const newW = Math.max(20, Math.round(init.w + deltaX));
          const newH = Math.max(20, Math.round(init.h + deltaY));
          onUpdateLayer({ ...activeLayer, width: newW, height: newH });
          return;
        }
      }
    }

    if (isDrawingRef.current && activeTool === 'brush') {
      currentPathRef.current.push({ x: mouseX, y: mouseY });
    } else if (isDraggingLayerRef.current && activeLayerId) {
      const activeLayer = layers.find((l) => l.id === activeLayerId);
      if (activeLayer) {
        onUpdateLayer({
          ...activeLayer,
          x: mouseX - layerDragOffsetRef.current.x,
          y: mouseY - layerDragOffsetRef.current.y,
        });
      }
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
          className="cursor-crosshair shadow-2xl block"
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

                {/* Color Swatch Picker */}
                <label
                  className="w-6 h-6 rounded-full border-2 border-white/30 cursor-pointer shadow-inner hover:scale-110 transition-transform relative overflow-hidden"
                  style={{ backgroundColor: activeL.color || activeColor }}
                  title="Mudar Cor do Elemento"
                >
                  <input
                    type="color"
                    value={activeL.color || activeColor}
                    onChange={(e) =>
                      onUpdateLayer({ ...activeL, color: e.target.value })
                    }
                    className="opacity-0 absolute inset-0 cursor-pointer"
                  />
                </label>

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
    </div>
  );
};
