import React, { useRef, useEffect } from 'react';
import { Printer, PrintSettings } from '../../services/printer/PrinterTypes';
import { PrinterTestService } from '../../services/printer/PrinterTestService';
import { TestTube2, Printer as PrinterIcon, Eye } from 'lucide-react';

interface PrintTestPanelProps {
  printer: Printer | null;
  settings: PrintSettings;
  onExecuteTestPrint: (canvas: HTMLCanvasElement) => void;
}

export const PrintTestPanel: React.FC<PrintTestPanelProps> = ({
  printer,
  settings,
  onExecuteTestPrint,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!printer) return;
    const testCanvas = PrinterTestService.generateTestPageCanvas(printer, settings);
    const containerCanvas = canvasRef.current;
    if (containerCanvas) {
      containerCanvas.width = testCanvas.width;
      containerCanvas.height = testCanvas.height;
      const ctx = containerCanvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(testCanvas, 0, 0);
      }
    }
  }, [printer, settings]);

  const handlePrint = () => {
    if (!printer || !canvasRef.current) return;
    onExecuteTestPrint(canvasRef.current);
  };

  if (!printer) {
    return (
      <div className="p-8 text-center bg-[#0a0b10] border border-slate-800 rounded-2xl text-xs text-gray-400">
        Selecione uma impressora ativa na aba "Impressoras" para realizar o teste de calibração.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Test Banner */}
      <div className="p-4 bg-[#0a0b10] border border-slate-800 rounded-2xl flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-500/20 text-indigo-300 rounded-xl border border-indigo-500/30">
            <TestTube2 className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-white">Página de Teste e Calibração de Sublimação</h5>
            <p className="text-[11px] text-gray-400">
              Imprime a folha de aferição CMYK com régua física de 100 mm e verificação do perfil ICC.
            </p>
          </div>
        </div>

        <button
          onClick={handlePrint}
          className="py-2.5 px-4 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl flex items-center gap-2 cursor-pointer transition-all shadow-lg shadow-purple-600/20"
        >
          <PrinterIcon className="w-4 h-4" />
          <span>Imprimir Página de Teste</span>
        </button>
      </div>

      {/* Canvas Preview Frame */}
      <div className="bg-[#0a0b10] border border-slate-800 rounded-2xl p-4 space-y-2">
        <span className="text-xs font-bold text-gray-300 flex items-center gap-1.5 uppercase tracking-wider">
          <Eye className="w-3.5 h-3.5 text-purple-400" />
          Pré-Visualização do Papel A4 de Teste (RIP Canvas)
        </span>

        <div className="w-full bg-[#12131b] border border-slate-800 rounded-xl p-2 flex justify-center max-h-[400px] overflow-auto">
          <canvas ref={canvasRef} className="max-w-full h-auto shadow-2xl rounded" />
        </div>
      </div>
    </div>
  );
};
