import React, { useState } from 'react';
import { PrintSettings } from '../../services/printer/PrinterTypes';

interface PrintPresetEditorProps {
  currentSettings: PrintSettings;
  printerId: string;
  onSave: (name: string, category: string) => void;
  onCancel: () => void;
}

export const PrintPresetEditor: React.FC<PrintPresetEditorProps> = ({
  onSave,
  onCancel,
}) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('CANECAS');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSave(name.trim(), category);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-[#0a0b10] border border-slate-800 rounded-2xl space-y-3">
      <h5 className="text-xs font-bold text-white uppercase tracking-wider">Novo Preset de Impressão</h5>

      <div className="space-y-1">
        <label className="text-[11px] font-bold text-gray-300">Nome do Preset</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: Caneca Porcelana 325ml - Papel Havir 100g"
          className="w-full bg-[#12131b] border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-purple-500"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="text-[11px] font-bold text-gray-300">Categoria do Produto Sublimático</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full bg-[#12131b] border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-purple-500"
        >
          <option value="CANECAS">Canecas & Xícaras</option>
          <option value="CAMISETAS">Camisetas & Vestuário Poliéster</option>
          <option value="SQUEEZES">Squeezes & Garrafas Térmicas</option>
          <option value="AZULEJOS">Azulejos & Placas Cerâmicas</option>
          <option value="CHINELOS">Chinelos & Capas de Almofada</option>
          <option value="GERAL">Outros Produtos Sublimáticos</option>
        </select>
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="py-2 px-3.5 bg-slate-800 text-gray-300 hover:bg-slate-700 rounded-xl text-xs font-bold cursor-pointer"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="py-2 px-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold cursor-pointer"
        >
          Salvar Preset
        </button>
      </div>
    </form>
  );
};
