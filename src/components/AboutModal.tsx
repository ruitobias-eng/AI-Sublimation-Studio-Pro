import React from 'react';
import {
  X,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Zap,
  Box,
  Layers,
  Wand2,
  Smartphone,
  CheckCircle2,
  Heart,
} from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme?: 'light' | 'dark' | string;
  onOpenHelp?: () => void;
}

export function AboutModal({ isOpen, onClose, theme = 'dark', onOpenHelp }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn touch-scroll-y"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`w-full max-w-xl max-h-[88dvh] rounded-3xl shadow-2xl border flex flex-col overflow-hidden transition-all pb-[env(safe-area-inset-bottom,0px)] ${
          theme === 'light'
            ? 'bg-white border-slate-200 text-slate-800'
            : 'bg-[#14151a] border-[#2d2f3a] text-gray-100'
        }`}
      >
        {/* Header with App Banner */}
        <div className="relative px-6 pt-8 pb-6 bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 border-b border-purple-500/20 text-center flex flex-col items-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-black/30 text-gray-400 hover:text-white hover:bg-black/50 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* App Logo */}
          <div className="relative group mb-3">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <img
              src="/logo-sublimstudio.svg"
              alt="Sublim Studio"
              className="relative w-20 h-20 rounded-2xl object-contain bg-slate-900 border border-purple-500/40 p-1 shadow-2xl"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src.endsWith('/logo-sublimstudio.svg')) {
                  target.src = '/logo-sublimstudio.png';
                } else if (!target.src.endsWith('/logo.svg')) {
                  target.src = '/logo.svg';
                } else if (!target.src.endsWith('/logo.png')) {
                  target.src = '/logo.png';
                } else if (!target.src.includes('favicon')) {
                  target.src = '/favicon.png';
                }
              }}
            />
          </div>

          <h2 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
            Sublim Studio
          </h2>
          <p className="text-xs text-purple-300 font-medium mt-1">
            Estúdio Profissional de Sublimação & Mockups 3D em Tempo Real
          </p>
        </div>

        {/* Features & Specifications Body */}
        <div className="p-6 space-y-5 text-xs touch-scroll-y flex-1 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
              <Box className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-xs">Simulador 3D Realista</strong>
                <span className="text-gray-400 text-[11px]">Renderização Three.js em tempo real para Canecas, Bottles e Squeezes.</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
              <Wand2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-xs">IA Generativa Gemini 3.1</strong>
                <span className="text-gray-400 text-[11px]">Criação de estampas completas, remoção de fundo e vetorização IA.</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
              <Layers className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-xs">Camadas & Curvas 2D</strong>
                <span className="text-gray-400 text-[11px]">Edição completa com texto curvo, formas, sombras e blend modes.</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
              <Smartphone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-xs">Pronto para Android & PWA</strong>
                <span className="text-gray-400 text-[11px]">Modo APK simulado, navegação gestual e instalação no celular.</span>
              </div>
            </div>
          </div>

          {/* Credits Box */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-indigo-950/40 border border-purple-500/30 text-center space-y-2">
            <div className="flex items-center justify-center gap-1.5 text-xs text-purple-300 font-bold">
              <span>Sublim Studio</span>
              <span>&bull;</span>
              <span>Criado por</span>
              <strong className="text-white font-extrabold underline decoration-purple-500">dibiTECh®</strong>
            </div>

            <p className="text-gray-300 text-xs font-semibold">
              Desenvolvido por <strong className="text-amber-400 font-extrabold">Rui & Rodrigo</strong>
            </p>

            <a
              href="https://www.dibitech.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 text-purple-200 hover:text-white font-mono text-[11px] transition-all"
            >
              www.dibitech.com.br <ExternalLink className="w-3 h-3" />
            </a>

            <div className="text-[10px] text-gray-500 pt-1 font-mono">
              &copy; 2026 dibiTECh®. Todos os direitos reservados.
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex items-center justify-between">
          {onOpenHelp && (
            <button
              onClick={() => {
                onClose();
                onOpenHelp();
              }}
              className="flex items-center gap-1.5 text-xs font-bold text-purple-400 hover:text-purple-300 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Ver Tutorial Completo (7 Passos)
            </button>
          )}

          <button
            onClick={onClose}
            className="ml-auto px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 text-white font-extrabold rounded-xl text-xs cursor-pointer shadow-md"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
