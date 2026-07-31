import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  Download,
  Terminal,
  CheckCircle,
  Copy,
  ExternalLink,
  X,
  Layers,
  Sparkles,
  Camera,
  Vibrate,
  ShieldCheck,
  Share2,
  Tv,
  HelpCircle,
} from 'lucide-react';

interface AndroidAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  isAndroidSimulated: boolean;
  setIsAndroidSimulated: (val: boolean) => void;
}

export const AndroidAppModal: React.FC<AndroidAppModalProps> = ({
  isOpen,
  onClose,
  isAndroidSimulated,
  setIsAndroidSimulated,
}) => {
  const [activeTab, setActiveTab] = useState<'install' | 'apk' | 'simulator'>('install');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  if (!isOpen) return null;

  const handleInstallPWA = async () => {
    // Trigger haptic feedback if available
    if ('vibrate' in navigator) {
      navigator.vibrate(25);
    }

    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      alert(
        'Para instalar no Android:\n\n1. Abra o menu do navegador (3 pontinhos no canto superior)\n2. Toque em "Adicionar à tela inicial" ou "Instalar Aplicativo".'
      );
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    if ('vibrate' in navigator) navigator.vibrate(15);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const cliCommands = [
    { title: '1. Instalar Capacitor Android', cmd: 'npm install @capacitor/core @capacitor/android @capacitor/cli' },
    { title: '2. Inicializar Projeto Native', cmd: 'npx cap init "Sublimacao Pro" com.aisublimationstudio.app --web-dir dist' },
    { title: '3. Compilar Web Assets', cmd: 'npm run build' },
    { title: '4. Adicionar Plataforma Android', cmd: 'npx cap add android' },
    { title: '5. Abrir no Android Studio & Gerar APK', cmd: 'npx cap open android' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0f172a] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1e293b] border-b border-slate-800">
          <div className="flex items-center gap-3">
            <img 
              src="/favicon.png" 
              alt="SublimStudio PRO" 
              className="w-11 h-11 rounded-xl object-contain bg-slate-900 border border-purple-500/30 p-0.5 shadow-lg shadow-purple-500/20"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith('.svg')) {
                  target.src = '/favicon.svg';
                }
              }}
            />
            <div>
              <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                SublimStudio PRO — App Android
                <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">
                  Pronto PWA / Capacitor
                </span>
              </h2>
              <p className="text-xs text-slate-400">Instalação nativa, modo PWA e exportação APK para celular Android</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex bg-[#0b1329] border-b border-slate-800/80 p-1.5 gap-2 px-6">
          <button
            onClick={() => setActiveTab('install')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-medium transition-all ${
              activeTab === 'install'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            Instalar no Celular (PWA)
          </button>

          <button
            onClick={() => setActiveTab('apk')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-medium transition-all ${
              activeTab === 'apk'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Terminal className="w-4 h-4" />
            Gerar APK Native (Capacitor)
          </button>

          <button
            onClick={() => setActiveTab('simulator')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-medium transition-all ${
              activeTab === 'simulator'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Tv className="w-4 h-4" />
            Simulador Android
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-300 text-sm">
          {activeTab === 'install' && (
            <div className="space-y-5">
              <div className="p-4 bg-emerald-950/40 border border-emerald-800/50 rounded-xl flex items-start gap-4">
                <div className="p-2.5 bg-emerald-500/20 rounded-lg text-emerald-400 shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-200 text-base">App Android Instalável (PWA)</h4>
                  <p className="text-xs text-emerald-300/80 mt-1 leading-relaxed">
                    Este aplicativo possui suporte a PWA completo com Manifest Android, ícone nativo, tela cheia sem barras de navegação e funcionamento otimizado para celulares Samsung, Motorola, Xiaomi e Google Pixel.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-xl gap-4">
                <div>
                  <div className="font-medium text-slate-200">Status de Instalação</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {isInstalled ? 'Aplicativo instalado na Tela Inicial' : 'Pronto para instalação no Android'}
                  </div>
                </div>
                <button
                  onClick={handleInstallPWA}
                  className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all"
                >
                  <Download className="w-4 h-4" />
                  {isInstalled ? 'App Já Instalado' : 'Instalar no Android Agora'}
                </button>
              </div>

              {/* Native Capabilities Checklist */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Recursos Nativos Integrados
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center gap-3">
                    <Camera className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-medium text-slate-200">Câmera do Celular</div>
                      <div className="text-[11px] text-slate-400">Captura de foto para estampa</div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center gap-3">
                    <Vibrate className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-medium text-slate-200">Feedback Háptico (Vibração)</div>
                      <div className="text-[11px] text-slate-400">Vibração em toque nas ferramentas</div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-medium text-slate-200">Cache Offline</div>
                      <div className="text-[11px] text-slate-400">Funciona sem internet via Service Worker</div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-medium text-slate-200">Gestos Touch 2D & 3D</div>
                      <div className="text-[11px] text-slate-400">Pinch zoom e rotação 3D por toque</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'apk' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400 leading-relaxed">
                Você pode compilar um arquivo <strong className="text-slate-200">.APK</strong> nativo para distribuição no Google Play Store ou instalação direta no dispositivo usando <strong className="text-emerald-400">Capacitor JS</strong>.
              </p>

              <div className="space-y-3">
                {cliCommands.map((item, index) => (
                  <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl p-3">
                    <div className="text-xs font-semibold text-slate-300 mb-1.5">{item.title}</div>
                    <div className="flex items-center justify-between bg-slate-950 px-3 py-2 rounded-lg font-mono text-xs text-emerald-400 border border-slate-800/80">
                      <span>{item.cmd}</span>
                      <button
                        onClick={() => copyToClipboard(item.cmd, index)}
                        className="text-slate-400 hover:text-slate-100 p-1"
                        title="Copiar comando"
                      >
                        {copiedIndex === index ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl space-y-2">
                <div className="text-xs font-semibold text-slate-200 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-sky-400" />
                  Arquivo de Configuração Android Nativo
                </div>
                <p className="text-xs text-slate-400">
                  O arquivo <code className="text-sky-300">capacitor.config.json</code> já foi gerado e incluído na raiz do projeto com permissões para Câmera, Status Bar escuro e Splash Screen.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'simulator' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <div>
                  <h4 className="font-semibold text-slate-200">Modo Moldura Android (Smartphone Simulator)</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Exibe o estúdio dentro de uma moldura de celular Android para testar a responsividade e o layout mobile.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsAndroidSimulated(!isAndroidSimulated);
                    if ('vibrate' in navigator) navigator.vibrate(20);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isAndroidSimulated
                      ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                      : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                  }`}
                >
                  {isAndroidSimulated ? 'Desativar Moldura Android' : 'Ativar Moldura Android'}
                </button>
              </div>

              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl space-y-2 text-xs text-slate-400">
                <div className="font-medium text-slate-300">💡 Dica para Celulares Reais:</div>
                <p>
                  Quando acessado diretamente a partir de um smartphone Android, o sistema detecta a tela touch automaticamente e ajusta a barra inferior de ferramentas nativas.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#1e293b] border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs rounded-xl transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
