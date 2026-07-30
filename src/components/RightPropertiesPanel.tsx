import React from 'react';
import { Layer, SublimationProduct } from '../types';
import {
  Sliders,
  Type,
  Maximize2,
  RotateCw,
  Palette,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Sparkles,
  Zap,
  Box,
  CornerUpRight,
  Trash2,
  Copy
} from 'lucide-react';

interface RightPropertiesPanelProps {
  activeLayer: Layer | null;
  onUpdateLayer: (updatedLayer: Layer) => void;
  product: SublimationProduct;
  onApplyPresetTemplate: (templateType: 'centered_logo' | 'full_wrap' | 'name_badge') => void;
  onDeleteLayer?: (id: string) => void;
  onDuplicateLayer?: (id: string) => void;
  theme?: 'dark' | 'light';
}

export const RightPropertiesPanel: React.FC<RightPropertiesPanelProps> = ({
  activeLayer,
  onUpdateLayer,
  product,
  onApplyPresetTemplate,
  onDeleteLayer,
  onDuplicateLayer,
  theme = 'dark',
}) => {
  if (!activeLayer) {
    return (
      <div className={`flex flex-col h-full text-xs p-4 select-none border-l transition-colors ${
        theme === 'light' ? 'bg-white text-slate-700 border-slate-200' : 'bg-[#1e1e20] text-gray-300 border-[#2d2d30]'
      }`}>
        <div className={`flex items-center gap-2 font-semibold mb-4 pb-2 border-b ${
          theme === 'light' ? 'text-purple-700 border-slate-200' : 'text-sky-400 border-[#2d2d30]'
        }`}>
          <Sliders className="w-4 h-4" />
          <span>Propriedades do Objeto</span>
        </div>

        <div className={`font-mono text-[11px] text-center my-auto ${
          theme === 'light' ? 'text-slate-400' : 'text-gray-500'
        }`}>
          Nenhum elemento selecionado na tela. Clique em um texto, forma ou imagem para editar suas propriedades.
        </div>

        {/* Quick Sublimation Layout Templates */}
        <div className={`mt-auto border-t pt-3 flex flex-col gap-2 ${
          theme === 'light' ? 'border-slate-200' : 'border-[#2d2d30]'
        }`}>
          <span className={`text-[10px] font-bold uppercase tracking-wider ${
            theme === 'light' ? 'text-slate-400' : 'text-gray-400'
          }`}>
            Atalhos Rápidos de Layout
          </span>
          <button
            onClick={() => onApplyPresetTemplate('centered_logo')}
            className={`w-full py-1.5 px-2 border rounded text-left flex items-center gap-2 text-[11px] cursor-pointer transition-colors ${
              theme === 'light'
                ? 'bg-slate-50 hover:bg-slate-100 border-slate-300 text-slate-800'
                : 'bg-[#252528] hover:bg-[#323236] border-[#38383c] text-gray-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>Centralizar Logo em {product.name}</span>
          </button>
          <button
            onClick={() => onApplyPresetTemplate('full_wrap')}
            className={`w-full py-1.5 px-2 border rounded text-left flex items-center gap-2 text-[11px] cursor-pointer transition-colors ${
              theme === 'light'
                ? 'bg-slate-50 hover:bg-slate-100 border-slate-300 text-slate-800'
                : 'bg-[#252528] hover:bg-[#323236] border-[#38383c] text-gray-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-500" />
            <span>Estampa Sublimática Full Wrap 300 DPI</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col h-full text-xs p-3 overflow-y-auto select-none gap-4 border-l transition-colors ${
      theme === 'light' ? 'bg-white text-slate-800 border-slate-200' : 'bg-[#1e1e20] text-gray-300 border-[#2d2d30]'
    }`}>
      {/* Header */}
      <div className={`flex items-center justify-between pb-2 border-b ${
        theme === 'light' ? 'border-slate-200' : 'border-[#2d2d30]'
      }`}>
        <div className={`flex items-center gap-2 font-semibold ${
          theme === 'light' ? 'text-purple-700' : 'text-sky-400'
        }`}>
          <Sliders className="w-4 h-4" />
          <span className="truncate max-w-[120px]">Propriedades: {activeLayer.name}</span>
        </div>
        <div className="flex items-center gap-1.5">
          {onDuplicateLayer && (
            <button
              onClick={() => onDuplicateLayer(activeLayer.id)}
              className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"
              title="Duplicar Camada"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          )}
          {onDeleteLayer && (
            <button
              onClick={() => onDeleteLayer(activeLayer.id)}
              className="p-1 hover:bg-red-500/20 text-red-400 hover:text-red-300 rounded transition-colors"
              title="Excluir Elemento (Tecla Del)"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
          <span className="px-1.5 py-0.5 bg-sky-500/20 text-sky-300 font-mono text-[9px] rounded uppercase">
            {activeLayer.type}
          </span>
        </div>
      </div>

      {/* Transform Box (X, Y, Width, Height, Rotation) */}
      <div className="flex flex-col gap-2 bg-[#18181a] p-2.5 rounded-lg border border-[#2d2d30]">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
          <Maximize2 className="w-3 h-3 text-sky-400" />
          Transformação
        </span>

        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="text-gray-500 font-mono">X:</span>
            <input
              type="number"
              value={Math.round(activeLayer.x)}
              onChange={(e) => onUpdateLayer({ ...activeLayer, x: parseFloat(e.target.value) || 0 })}
              className="w-full bg-[#121214] border border-[#38383c] rounded px-2 py-1 text-white font-mono"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-gray-500 font-mono">Y:</span>
            <input
              type="number"
              value={Math.round(activeLayer.y)}
              onChange={(e) => onUpdateLayer({ ...activeLayer, y: parseFloat(e.target.value) || 0 })}
              className="w-full bg-[#121214] border border-[#38383c] rounded px-2 py-1 text-white font-mono"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-gray-500 font-mono">L:</span>
            <input
              type="number"
              value={Math.round(activeLayer.width)}
              onChange={(e) =>
                onUpdateLayer({ ...activeLayer, width: Math.max(10, parseFloat(e.target.value) || 10) })
              }
              className="w-full bg-[#121214] border border-[#38383c] rounded px-2 py-1 text-white font-mono"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-gray-500 font-mono">A:</span>
            <input
              type="number"
              value={Math.round(activeLayer.height)}
              onChange={(e) =>
                onUpdateLayer({ ...activeLayer, height: Math.max(10, parseFloat(e.target.value) || 10) })
              }
              className="w-full bg-[#121214] border border-[#38383c] rounded px-2 py-1 text-white font-mono"
            />
          </div>
        </div>

        {/* Rotation Slider */}
        <div className="flex items-center justify-between gap-2 mt-1">
          <span className="text-[11px] text-gray-400 flex items-center gap-1">
            <RotateCw className="w-3 h-3" /> Rotação:
          </span>
          <div className="flex items-center gap-2 flex-1">
            <input
              type="range"
              min="0"
              max="360"
              value={activeLayer.rotation}
              onChange={(e) => onUpdateLayer({ ...activeLayer, rotation: parseInt(e.target.value) })}
              className="w-full accent-sky-500 cursor-pointer"
            />
            <span className="font-mono text-[10px] text-sky-400 w-8 text-right">
              {activeLayer.rotation}°
            </span>
          </div>
        </div>

        {/* Quick Image Scale Actions */}
        {(activeLayer.type === 'image' || activeLayer.type === 'smart') && (
          <div className="flex flex-col gap-1.5 pt-2 border-t border-[#2d2d30] mt-1">
            <span className="text-[10px] text-gray-400 font-semibold">Redimensionar Imagem:</span>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => {
                  const printWidth = Math.round((product.defaultWidthCm / 2.54) * 150);
                  const printHeight = Math.round((product.defaultHeightCm / 2.54) * 150);
                  onUpdateLayer({
                    ...activeLayer,
                    x: 0,
                    y: 0,
                    width: printWidth,
                    height: printHeight,
                  });
                }}
                className="px-2 py-1 bg-[#252528] hover:bg-[#323236] border border-[#38383c] text-sky-300 rounded text-[10px] font-medium transition-colors cursor-pointer"
                title="Redimensionar imagem para cobrir toda a área de estampa"
              >
                Preencher Área
              </button>
              <button
                onClick={() => {
                  const printWidth = Math.round((product.defaultWidthCm / 2.54) * 150);
                  const printHeight = Math.round((product.defaultHeightCm / 2.54) * 150);
                  onUpdateLayer({
                    ...activeLayer,
                    x: Math.round((printWidth - activeLayer.width) / 2),
                    y: Math.round((printHeight - activeLayer.height) / 2),
                  });
                }}
                className="px-2 py-1 bg-[#252528] hover:bg-[#323236] border border-[#38383c] text-gray-200 rounded text-[10px] font-medium transition-colors cursor-pointer"
                title="Centralizar imagem na área imprimível"
              >
                Centralizar
              </button>
              <button
                onClick={() => {
                  onUpdateLayer({
                    ...activeLayer,
                    height: activeLayer.width,
                  });
                }}
                className="col-span-2 px-2 py-1 bg-[#252528] hover:bg-[#323236] border border-[#38383c] text-purple-300 rounded text-[10px] font-medium transition-colors cursor-pointer"
                title="Ajustar altura para proporção 1:1"
              >
                Ajustar Proporção Quadrada (1:1)
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Typography Controls (if layer is text) */}
      {activeLayer.type === 'text' && (
        <div className="flex flex-col gap-2.5 bg-[#18181a] p-2.5 rounded-lg border border-[#2d2d30]">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
            <Type className="w-3 h-3 text-emerald-400" />
            Tipografia & Arco Sublimático
          </span>

          {/* Text String Input */}
          <textarea
            value={activeLayer.content}
            onChange={(e) => onUpdateLayer({ ...activeLayer, content: e.target.value })}
            rows={2}
            className="w-full bg-[#121214] border border-[#38383c] rounded p-2 text-white text-xs font-medium focus:outline-none focus:border-emerald-500"
            placeholder="Digite o texto personalizado da estampa..."
          />

          {/* Font Family Selector */}
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-gray-400">Fonte:</span>
            <select
              value={activeLayer.fontFamily || 'Arial'}
              onChange={(e) => onUpdateLayer({ ...activeLayer, fontFamily: e.target.value })}
              className="bg-[#121214] text-white text-xs p-1.5 rounded border border-[#38383c] focus:outline-none"
            >
              <option value="Arial">Arial (Padrão Clean)</option>
              <option value="Impact">Impact (Sublimação Bold)</option>
              <option value="'Courier New'">Courier New (Retro Typewriter)</option>
              <option value="Georgia">Georgia (Serif Elegante)</option>
              <option value="Comic Sans MS">Comic Sans (Infantil / Festas)</option>
              <option value="Trebuchet MS">Trebuchet MS (Moderna)</option>
            </select>
          </div>

          {/* Size & Weight */}
          <div className="flex items-center gap-2">
            <div className="flex-1 flex flex-col gap-1">
              <span className="text-[11px] text-gray-400">Tamanho:</span>
              <input
                type="number"
                value={activeLayer.fontSize || 36}
                onChange={(e) =>
                  onUpdateLayer({ ...activeLayer, fontSize: parseInt(e.target.value) || 12 })
                }
                className="bg-[#121214] text-white text-xs p-1 rounded border border-[#38383c] font-mono"
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <span className="text-[11px] text-gray-400">Peso:</span>
              <select
                value={activeLayer.fontWeight || 'normal'}
                onChange={(e) => onUpdateLayer({ ...activeLayer, fontWeight: e.target.value })}
                className="bg-[#121214] text-white text-xs p-1 rounded border border-[#38383c]"
              >
                <option value="normal">Normal</option>
                <option value="bold">Negrito (Bold)</option>
              </select>
            </div>
          </div>

          {/* Sublimation Curved Text Arc Toggle & Radius */}
          <div className="flex flex-col gap-2 pt-2 border-t border-[#2d2d30]">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                <CornerUpRight className="w-3.5 h-3.5" />
                Arco de Caneca / Curvar Texto
              </span>
              <input
                type="checkbox"
                checked={activeLayer.textCurved || false}
                onChange={(e) =>
                  onUpdateLayer({ ...activeLayer, textCurved: e.target.checked })
                }
                className="accent-emerald-500 cursor-pointer"
              />
            </div>

            {activeLayer.textCurved && (
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] text-gray-400">Raio da Curva:</span>
                <input
                  type="range"
                  min="40"
                  max="300"
                  value={activeLayer.curveRadius || 120}
                  onChange={(e) =>
                    onUpdateLayer({ ...activeLayer, curveRadius: parseInt(e.target.value) })
                  }
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Colors & Fill */}
      <div className="flex flex-col gap-2 bg-[#18181a] p-2.5 rounded-lg border border-[#2d2d30]">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
          <Palette className="w-3 h-3 text-purple-400" />
          Cores da Estampa
        </span>

        <div className="flex items-center justify-between">
          <span className="text-[11px] text-gray-300">Cor Principal:</span>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={activeLayer.color || '#000000'}
              onChange={(e) => onUpdateLayer({ ...activeLayer, color: e.target.value })}
              className="w-6 h-6 rounded cursor-pointer border border-[#38383c]"
            />
            <span className="font-mono text-[10px] text-gray-400">
              {activeLayer.color || '#000000'}
            </span>
          </div>
        </div>
      </div>

      {/* Delete / Duplicate Layer Action Bar */}
      <div className="mt-auto pt-2 border-t border-[#2d2d30] flex items-center gap-2">
        {onDuplicateLayer && (
          <button
            onClick={() => onDuplicateLayer(activeLayer.id)}
            className="flex-1 py-1.5 px-3 bg-[#252528] hover:bg-[#323236] border border-[#38383c] text-gray-200 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Duplicar</span>
          </button>
        )}
        {onDeleteLayer && (
          <button
            onClick={() => onDeleteLayer(activeLayer.id)}
            className="flex-1 py-1.5 px-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            title="Excluir elemento selecionado (Tecla Del)"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Excluir Elemento</span>
          </button>
        )}
      </div>
    </div>
  );
};
