import React from 'react';
import { PrintSettings, RenderingIntent } from '../../services/printer/PrinterTypes';
import { Palette, Sparkles, CheckCircle2 } from 'lucide-react';

interface ColorManagementSettingsProps {
  settings: PrintSettings;
  onChange: (updated: Partial<PrintSettings>) => void;
}

export const ColorManagementSettings: React.FC<ColorManagementSettingsProps> = ({
  settings,
  onChange,
}) => {
  return (
    <div className="space-y-4">
      {/* Color Management Mode */}
      <div className="bg-[#0a0b10] border border-slate-800 p-4 rounded-2xl space-y-3">
        <h4 className="text-xs font-bold text-gray-200 flex items-center gap-2 uppercase tracking-wider">
          <Palette className="w-4 h-4 text-purple-400" />
          Modo de Gerenciamento de Cor
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <button
            type="button"
            onClick={() => onChange({ colorManagement: 'icc' })}
            className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
              settings.colorManagement === 'icc'
                ? 'bg-purple-950/40 border-purple-500 shadow-md'
                : 'bg-[#12131b] border-slate-800 text-gray-400 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-xs text-white">Perfil ICC do Sublima</span>
              {settings.colorManagement === 'icc' && <CheckCircle2 className="w-4 h-4 text-purple-400" />}
            </div>
            <p className="text-[10px] text-gray-400 leading-tight">
              A aplicação aplica correção cromática rigorosa antes de enviar os dados ao spooler.
            </p>
          </button>

          <button
            type="button"
            onClick={() => onChange({ colorManagement: 'printer' })}
            className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
              settings.colorManagement === 'printer'
                ? 'bg-purple-950/40 border-purple-500 shadow-md'
                : 'bg-[#12131b] border-slate-800 text-gray-400 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-xs text-white">Driver da Impressora</span>
              {settings.colorManagement === 'printer' && <CheckCircle2 className="w-4 h-4 text-purple-400" />}
            </div>
            <p className="text-[10px] text-gray-400 leading-tight">
              Deixa a calibração de cor sob responsabilidade do driver Epson/Canon/Brother.
            </p>
          </button>

          <button
            type="button"
            onClick={() => onChange({ colorManagement: 'application' })}
            className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
              settings.colorManagement === 'application'
                ? 'bg-purple-950/40 border-purple-500 shadow-md'
                : 'bg-[#12131b] border-slate-800 text-gray-400 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-xs text-white">RGB Direto (Sem Perfil)</span>
              {settings.colorManagement === 'application' && <CheckCircle2 className="w-4 h-4 text-purple-400" />}
            </div>
            <p className="text-[10px] text-gray-400 leading-tight">
              Envia os pixels RGB nativos sem transformações ICC intermediárias.
            </p>
          </button>
        </div>
      </div>

      {/* Rendering Intent */}
      <div className="bg-[#0a0b10] border border-slate-800 p-4 rounded-2xl space-y-3">
        <h4 className="text-xs font-bold text-gray-200 flex items-center gap-2 uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-purple-400" />
          Intenção de Renderização (Rendering Intent)
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold text-gray-300 block mb-1">Intenção Cromática</label>
            <select
              value={settings.renderingIntent}
              onChange={(e) => onChange({ renderingIntent: e.target.value as RenderingIntent })}
              className="w-full bg-[#12131b] border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-purple-500"
            >
              <option value="relative">Relativo Colorimétrico (Recomendado para Sublimação)</option>
              <option value="perceptual">Perceptual (Suaviza gradientes e fotos)</option>
              <option value="saturation">Saturação (Cores vivas para Logos/Vetores)</option>
              <option value="absolute">Absoluto Colorimétrico</option>
            </select>
          </div>

          <div className="flex items-center justify-between p-3 bg-[#12131b] rounded-xl border border-slate-800">
            <div>
              <span className="text-xs font-bold text-white block">Compensação de Ponto Preto</span>
              <span className="text-[10px] text-gray-400">Evita perda de detalhes nas sombras escuras.</span>
            </div>
            <input
              type="checkbox"
              checked={settings.blackPointCompensation}
              onChange={(e) => onChange({ blackPointCompensation: e.target.checked })}
              className="w-4 h-4 text-purple-600 rounded border-slate-700 focus:ring-purple-500 bg-[#0a0b10]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
