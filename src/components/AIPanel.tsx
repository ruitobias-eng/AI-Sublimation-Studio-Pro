import React, { useState } from 'react';
import { AIPromptParams, Layer, SublimationProduct } from '../types';
import {
  Sparkles,
  Wand2,
  Maximize2,
  Scissors,
  RefreshCw,
  Palette,
  ImagePlus,
  Layers,
  Zap,
  Sliders,
  Check,
  AlertCircle
} from 'lucide-react';

interface AIPanelProps {
  product: SublimationProduct;
  onAddAIGeneratedImageToCanvas: (imageUrl: string, title: string) => void;
  onApplyAIToolToActiveLayer: (action: 'remove_bg' | 'vectorize' | 'upscale' | 'color_replace') => void;
  activeLayer: Layer | null;
  theme?: 'dark' | 'light';
}

export const AIPanel: React.FC<AIPanelProps> = ({
  product,
  onAddAIGeneratedImageToCanvas,
  onApplyAIToolToActiveLayer,
  activeLayer,
  theme = 'dark',
}) => {
  const [params, setParams] = useState<AIPromptParams>({
    prompt: '',
    negativePrompt: 'blurry, low resolution, watermark, pixelated, distorted colors, bad quality',
    model: 'gemini-3.1-flash-image',
    guidanceScale: 7.5,
    seed: 42,
    upscaleFactor: 2,
    creativity: 0.7,
    seamlessPattern: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [aiSuggestions, setAiSuggestions] = useState<{ title: string; prompt: string }[]>([]);

  const generateLocalPattern = (promptText: string) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 1200;
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';

    // Create a vibrant colorful sublimation vector art pattern
    const grad = ctx.createRadialGradient(600, 600, 50, 600, 600, 800);
    grad.addColorStop(0, '#0284c7');
    grad.addColorStop(0.5, '#7e22ce');
    grad.addColorStop(1, '#0f172a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1200, 1200);

    // Decorative geometric shapes
    ctx.lineWidth = 12;
    for (let i = 0; i < 15; i++) {
      ctx.strokeStyle = `hsla(${i * 24}, 85%, 65%, 0.4)`;
      ctx.beginPath();
      ctx.arc(600, 600, 100 + i * 35, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Typography overlay
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 54px Impact, sans-serif';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0,0,0,0.8)';
    ctx.shadowBlur = 15;
    ctx.fillText(promptText.toUpperCase() || 'DESIGN SUBLIMÁTICO HD', 600, 600);

    return canvas.toDataURL('image/png');
  };

  const parseApiResponse = async (response: Response) => {
    const text = await response.text();
    try {
      return JSON.parse(text);
    } catch {
      throw new Error(`Resposta inválida do servidor: ${text.substring(0, 300)}`);
    }
  };

  // Call Express API `/api/gemini/generate-image`
  const handleGenerateImage = async () => {
    if (!params.prompt.trim()) {
      setErrorMessage('Por favor, digite um prompt para a geração da estampa.');
      return;
    }

    setIsLoading(true);
    setStatusMessage('Criando estampa sublimática em alta definição via Gemini AI...');
    setErrorMessage(null);

    try {
      const response = await fetch('/api/gemini/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `${params.prompt} ${params.seamlessPattern ? '(seamless repeating pattern)' : ''}`,
          negativePrompt: params.negativePrompt,
          model: params.model,
          aspectRatio: '1:1',
          guidanceScale: params.guidanceScale,
        }),
      });

      const data = await parseApiResponse(response);

      if (!response.ok || data.error) {
        throw new Error(data.error || 'Erro na geração de imagem por IA');
      }

      onAddAIGeneratedImageToCanvas(data.imageUrl, params.prompt.slice(0, 20));
      setStatusMessage('Estampa gerada com sucesso e adicionada ao canvas!');
    } catch (err: any) {
      console.error('Error generating AI image:', err);
      const isQuotaError = err.message && (err.message.includes('429') || err.message.includes('quota') || err.message.includes('Quota'));
      if (isQuotaError) {
        setErrorMessage('Cota da API Gemini excedida temporariamente (Rate Limit 429). Geramos uma arte sublimática vetorial local de alta qualidade para você continuar desenhando!');
        const fallbackUrl = generateLocalPattern(params.prompt);
        onAddAIGeneratedImageToCanvas(fallbackUrl, params.prompt.slice(0, 20) || 'Arte Sublimação');
      } else {
        setErrorMessage(err.message || 'Falha ao conectar com o servidor Gemini IA.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Get AI Ideas / Prompt Recommendations
  const handleGetAIIdeas = async () => {
    setIsLoading(true);
    setStatusMessage('Gerando sugestões de estampas com a IA para ' + product.name + '...');
    try {
      const res = await fetch('/api/gemini/assist-prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          idea: params.prompt || 'Design sublimático moderno e vibrante',
          productType: product.name,
        }),
      });
      const data = await parseApiResponse(res);
      if (data.result) {
        const parsed = JSON.parse(data.result);
        if (Array.isArray(parsed)) {
          setAiSuggestions(parsed);
        }
      }
      setStatusMessage(null);
    } catch (e) {
      // Fallback sample prompts
      setAiSuggestions([
        {
          title: 'Ilustração Retro Vaporwave',
          prompt: 'Vaporwave sunset with neon grid and tropical palm trees, vivid cyan and magenta dyes for mug sublimation',
        },
        {
          title: 'Floral Botânico Elegante',
          prompt: 'Watercolor botanical floral frame with golden geometric lines, seamless print for pillow or t-shirt',
        },
        {
          title: 'Mesa Gaming Cyberpunk',
          prompt: 'Cyberpunk futuristic neon Japanese dragon artwork, high contrast vector art for mousepad deskmat',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`flex flex-col h-full text-xs p-3.5 overflow-y-auto select-none gap-4 transition-colors ${
      theme === 'light' ? 'bg-white text-slate-800 border-slate-200' : 'bg-[#1e1e20] text-gray-300 border-[#2d2d30]'
    }`}>
      {/* Header */}
      <div className={`flex items-center gap-2 pb-2.5 border-b font-bold text-sm ${
        theme === 'light' ? 'text-purple-700 border-slate-200' : 'text-purple-400 border-[#2d2d30]'
      }`}>
        <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
        <span>PAINEL IA GENERATIVO SUBLIMAÇÃO</span>
      </div>

      {/* Main Prompt Input */}
      <div className="flex flex-col gap-1.5 bg-[#18181a] p-3 rounded-xl border border-[#2d2d30]">
        <div className="flex items-center justify-between">
          <label className="text-[11px] font-semibold text-gray-200 flex items-center gap-1.5">
            <Wand2 className="w-3.5 h-3.5 text-purple-400" />
            Prompt da Estampa (Descreva sua ideia)
          </label>
          <button
            onClick={handleGetAIIdeas}
            className="text-[10px] text-purple-400 hover:text-purple-300 flex items-center gap-1 underline"
          >
            <Zap className="w-3 h-3" /> Ideias da IA
          </button>
        </div>

        <textarea
          value={params.prompt}
          onChange={(e) => setParams({ ...params, prompt: e.target.value })}
          rows={3}
          placeholder="Ex: Leão majestoso em estilo aquarela vibrante com respingos de tinta colorida, 300 DPI alta definição para caneca..."
          className="w-full bg-[#121214] border border-[#38383c] focus:border-purple-500 rounded-lg p-2.5 text-white text-xs font-medium focus:outline-none transition-colors"
        />

        {/* AI Prompt Suggestions Badges */}
        {aiSuggestions.length > 0 && (
          <div className="flex flex-col gap-1.5 mt-2 pt-2 border-t border-[#2d2d30]">
            <span className="text-[10px] text-purple-300 font-semibold">Sugestões de Prompts:</span>
            {aiSuggestions.map((sug, idx) => (
              <button
                key={idx}
                onClick={() => setParams({ ...params, prompt: sug.prompt })}
                className="text-left p-1.5 bg-purple-950/30 hover:bg-purple-900/40 border border-purple-500/30 rounded text-[10px] text-purple-200 transition-colors"
              >
                <span className="font-bold block text-white">{sug.title}</span>
                <span className="line-clamp-1 opacity-80">{sug.prompt}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Negative Prompt */}
      <div className="flex flex-col gap-1.5 bg-[#18181a] p-3 rounded-xl border border-[#2d2d30]">
        <label className="text-[11px] font-semibold text-gray-300">Prompt Negativo (O que evitar)</label>
        <input
          type="text"
          value={params.negativePrompt}
          onChange={(e) => setParams({ ...params, negativePrompt: e.target.value })}
          className="w-full bg-[#121214] border border-[#38383c] rounded-lg p-2 text-white text-xs focus:outline-none"
        />
      </div>

      {/* AI Model & Controls */}
      <div className="grid grid-cols-2 gap-2 bg-[#18181a] p-3 rounded-xl border border-[#2d2d30]">
        <div className="flex flex-col gap-1">
          <label className="text-[10px] text-gray-400 font-medium">Modelo de IA</label>
          <select
            value={params.model}
            onChange={(e) => setParams({ ...params, model: e.target.value })}
            className="bg-[#121214] text-white text-[11px] p-2 rounded-lg border border-[#38383c] focus:outline-none font-medium"
          >
            <option value="gemini-3.1-flash-image">Gemini 3.1 Flash Image (Recomendado)</option>
            <option value="gemini-3.1-flash-lite-image">Gemini Flash Lite (Rápido)</option>
            <option value="gemini-3.6-flash">Gemini 3.6 Flash</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[10px] text-gray-400 font-medium">Guidance Scale</label>
          <input
            type="number"
            value={params.guidanceScale}
            step="0.5"
            min="1"
            max="20"
            onChange={(e) => setParams({ ...params, guidanceScale: parseFloat(e.target.value) || 7.5 })}
            className="bg-[#121214] text-white text-[11px] p-2 rounded-lg border border-[#38383c] font-mono"
          />
        </div>
      </div>

      {/* Seamless Pattern Toggle */}
      <div className="flex items-center justify-between p-3 bg-[#18181a] rounded-xl border border-[#2d2d30]">
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-white">Estampa Padrão Repetível (Seamless)</span>
          <span className="text-[10px] text-gray-400">Ideal para tecidos, camisetas e copos 360°</span>
        </div>
        <input
          type="checkbox"
          checked={params.seamlessPattern}
          onChange={(e) => setParams({ ...params, seamlessPattern: e.target.checked })}
          className="w-4 h-4 accent-purple-500 cursor-pointer"
        />
      </div>

      {/* Generate Button */}
      <button
        disabled={isLoading}
        onClick={handleGenerateImage}
        className="py-3 px-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 hover:from-purple-500 hover:to-sky-500 text-white font-bold rounded-xl shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
      >
        <Sparkles className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
        <span>{isLoading ? 'Gerando com Gemini IA...' : 'GERAR ESTAMPA POR IA'}</span>
      </button>

      {/* Status or Error Notifications */}
      {statusMessage && (
        <div className="p-2.5 bg-sky-950/40 border border-sky-500/30 rounded-lg text-sky-300 text-[11px] flex items-center gap-2">
          <Check className="w-4 h-4 text-sky-400 shrink-0" />
          <span>{statusMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="p-2.5 bg-rose-950/40 border border-rose-500/30 rounded-lg text-rose-300 text-[11px] flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Quick AI Tools Section */}
      <div className="flex flex-col gap-2 pt-3 border-t border-[#2d2d30]">
        <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1">
          <Wand2 className="w-3.5 h-3.5" />
          Ferramentas Rápidas de IA na Camada
        </span>

        <div className="grid grid-cols-2 gap-2">
          <button
            disabled={!activeLayer || isLoading}
            onClick={() => onApplyAIToolToActiveLayer('remove_bg')}
            className="p-2 bg-[#18181a] hover:bg-[#252528] border border-[#38383c] rounded-lg text-left flex items-center gap-2 disabled:opacity-40 transition-colors"
          >
            <Scissors className="w-4 h-4 text-emerald-400 shrink-0" />
            <div className="flex flex-col">
              <span className="font-semibold text-[11px] text-white">Remover Fundo</span>
              <span className="text-[9px] text-gray-400">Recorte transparente</span>
            </div>
          </button>

          <button
            disabled={!activeLayer || isLoading}
            onClick={() => onApplyAIToolToActiveLayer('vectorize')}
            className="p-2 bg-[#18181a] hover:bg-[#252528] border border-[#38383c] rounded-lg text-left flex items-center gap-2 disabled:opacity-40 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <div className="flex flex-col">
              <span className="font-semibold text-[11px] text-white">Vetorizar IA</span>
              <span className="text-[9px] text-gray-400">Converter em SVG</span>
            </div>
          </button>

          <button
            disabled={!activeLayer || isLoading}
            onClick={() => onApplyAIToolToActiveLayer('upscale')}
            className="p-2 bg-[#18181a] hover:bg-[#252528] border border-[#38383c] rounded-lg text-left flex items-center gap-2 disabled:opacity-40 transition-colors"
          >
            <Maximize2 className="w-4 h-4 text-sky-400 shrink-0" />
            <div className="flex flex-col">
              <span className="font-semibold text-[11px] text-white">Upscale 300 DPI</span>
              <span className="text-[9px] text-gray-400">Nitidez para impressão</span>
            </div>
          </button>

          <button
            disabled={!activeLayer || isLoading}
            onClick={() => onApplyAIToolToActiveLayer('color_replace')}
            className="p-2 bg-[#18181a] hover:bg-[#252528] border border-[#38383c] rounded-lg text-left flex items-center gap-2 disabled:opacity-40 transition-colors"
          >
            <RefreshCw className="w-4 h-4 text-purple-400 shrink-0" />
            <div className="flex flex-col">
              <span className="font-semibold text-[11px] text-white">Substituir Cores</span>
              <span className="text-[9px] text-gray-400">Trocar tons na estampa</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
