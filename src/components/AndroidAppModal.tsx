import React from 'react';
import { Smartphone, Download, CheckCircle2, ShieldCheck, X, Sparkles, Zap, ExternalLink } from 'lucide-react';

interface AndroidAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme?: 'light' | 'dark' | string;
  isAndroidSimulated?: boolean;
  setIsAndroidSimulated?: (val: boolean) => void;
}

export function AndroidAppModal({ isOpen, onClose, theme = 'dark' }: AndroidAppModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn touch-scroll-y"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`w-full max-w-lg max-h-[88dvh] rounded-3xl shadow-2xl border flex flex-col overflow-hidden transition-all pb-[env(safe-area-inset-bottom,0px)] ${
          theme === 'light' ? 'bg-white border-slate-200 text-slate-800' : 'bg-[#14151a] border-[#2d2f3a] text-gray-100'
        }`}
      >
        {/* Modal Header */}
        <div className="relative px-6 pt-6 pb-5 bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 border-b border-emerald-500/20 text-center flex flex-col items-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-black/30 text-gray-400 hover:text-white hover:bg-black/50 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative group mb-2">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-2xl blur-md opacity-75"></div>
            <img
              src="/favicon.png"
              alt="SublimStudio PRO Android"
              className="relative w-16 h-16 rounded-2xl object-contain bg-slate-900 border border-emerald-500/40 p-1 shadow-2xl"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith('.svg')) {
                  target.src = '/favicon.svg';
                }
              }}
            />
          </div>

          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            App Android SublimStudio PRO
          </h2>
          <p className="text-xs text-emerald-300 font-medium mt-1">
            Instale o PWA Nativo ou baixe o APK para smartphone e tablet Android
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 text-xs">
          <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
            <Smartphone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-emerald-300 block font-bold text-xs">Instalação Instantânea em 1 Clique (PWA)</strong>
              <p className="text-gray-300 text-[11px] leading-relaxed">
                Toque no menu do seu navegador (três pontinhos no Chrome do Android) e selecione <strong>"Adicionar à tela inicial"</strong> ou <strong>"Instalar aplicativo"</strong>.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-gray-200 text-xs uppercase tracking-wider">Recursos da Versão Mobile Android:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300 text-[11px]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Suporte completo a Gestos Touch (Pinch-to-zoom & rotação)</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-[11px]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Navegação por Abas Android Material Design 3 e BottomSheet</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-[11px]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Modo Offline para criação de estampas sem internet</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex items-center justify-between gap-3">
          <span className="text-[10px] text-gray-400 font-mono">v3.1.0 • Android PWA Nativo</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:brightness-110 text-slate-950 font-black rounded-xl text-xs cursor-pointer shadow-md"
          >
            Entendi, Prosseguir
          </button>
        </div>
      </div>
    </div>
  );
}
