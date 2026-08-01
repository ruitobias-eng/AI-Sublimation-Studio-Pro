import React from 'react';
import { PrintJob } from '../../services/printer/PrinterTypes';
import { Clock, CheckCircle2, AlertTriangle, XCircle, Trash2, Printer } from 'lucide-react';

interface PrintJobStatusProps {
  jobs: PrintJob[];
  activeJob: PrintJob | null;
  onClearHistory: () => void;
}

export const PrintJobStatusView: React.FC<PrintJobStatusProps> = ({
  jobs,
  activeJob,
  onClearHistory,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-2">
          <Clock className="w-4 h-4 text-purple-400" />
          Fila e Histórico de Trabalhos de Impressão (Print Queue)
        </h4>

        {jobs.length > 0 && (
          <button
            onClick={onClearHistory}
            className="text-[11px] font-bold text-gray-400 hover:text-red-400 flex items-center gap-1 cursor-pointer transition-all"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Limpar Histórico</span>
          </button>
        )}
      </div>

      {/* Active Spooler Job */}
      {activeJob && (
        <div className="p-4 bg-purple-950/40 border border-purple-500/60 rounded-2xl space-y-2 animate-pulse">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white flex items-center gap-2">
              <Printer className="w-4 h-4 text-purple-400" />
              Processando: {activeJob.documentTitle}
            </span>
            <span className="text-xs font-mono font-bold text-purple-300">{activeJob.progressPercent}%</span>
          </div>

          <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-purple-500/30">
            <div
              className="bg-purple-500 h-full transition-all duration-300"
              style={{ width: `${activeJob.progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* Job List Table */}
      {jobs.length === 0 ? (
        <div className="p-8 text-center bg-[#0a0b10] border border-slate-800 rounded-2xl text-xs text-gray-400">
          Nenhum trabalho de impressão enviado nesta sessão.
        </div>
      ) : (
        <div className="bg-[#0a0b10] border border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-800/60">
          {jobs.map((job) => (
            <div key={job.id} className="p-3.5 flex items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-white block">{job.documentTitle}</span>
                <span className="text-[10px] text-gray-400 font-mono block">
                  Impressora: {job.printerName} • {new Date(job.createdAt).toLocaleTimeString('pt-BR')}
                </span>
                {job.error && <span className="text-[10px] text-red-400 block">{job.error}</span>}
              </div>

              <span
                className={`text-[10px] font-bold px-2.5 py-1 rounded-full border flex items-center gap-1.5 shrink-0 ${
                  job.status === 'completed'
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                    : job.status === 'printing' || job.status === 'preparing'
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                    : job.status === 'failed'
                    ? 'bg-red-500/20 text-red-400 border-red-500/30'
                    : 'bg-slate-800 text-gray-400 border-slate-700'
                }`}
              >
                {job.status === 'completed' && <CheckCircle2 className="w-3 h-3" />}
                {job.status === 'failed' && <XCircle className="w-3 h-3" />}
                {(job.status === 'printing' || job.status === 'preparing') && <AlertTriangle className="w-3 h-3" />}
                <span>
                  {job.status === 'completed'
                    ? 'Concluído'
                    : job.status === 'printing'
                    ? 'Imprimindo'
                    : job.status === 'preparing'
                    ? 'Preparando'
                    : job.status === 'failed'
                    ? 'Falhou'
                    : 'Cancelado'}
                </span>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
