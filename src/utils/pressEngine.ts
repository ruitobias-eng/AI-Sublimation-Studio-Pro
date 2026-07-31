export interface SublimationPressPreset {
  id: string;
  name: string;
  productName?: string;
  category: 'rigid' | 'fabric' | 'glass' | '3d';
  temperatureC: number;
  temperatureF: number;
  timeSeconds: number;
  pressure: 'light' | 'medium' | 'heavy';
  paperType: 'sublimation_fast' | 'sticky' | 'film';
  recommendations: string;
  notes?: string;
}

export const SUBLIMATION_PRESS_PRESETS: SublimationPressPreset[] = [
  {
    id: 'mug_ceramic',
    name: 'Caneca de Cerâmica (11oz / 325ml)',
    productName: 'Caneca de Cerâmica 325ml',
    category: 'rigid',
    temperatureC: 195,
    temperatureF: 383,
    timeSeconds: 180,
    pressure: 'medium',
    paperType: 'sublimation_fast',
    recommendations: 'Resfrie em água morna após prensar para travar a sublimação.',
    notes: 'Ajuste a pressão da prensa cônica/cilíndrica sem forçar a asa.',
  },
  {
    id: 'squeeze_aluminum',
    name: 'Squeeze de Alumínio (600ml / 750ml)',
    productName: 'Squeeze de Alumínio 600ml',
    category: 'rigid',
    temperatureC: 190,
    temperatureF: 374,
    timeSeconds: 160,
    pressure: 'medium',
    paperType: 'sublimation_fast',
    recommendations: 'Retire a tampa de plástico antes de inserir na prensa de caneca.',
    notes: 'Cuidado ao manusear, o alumínio aquece muito rápido.',
  },
  {
    id: 'tshirt_polyester',
    name: 'Camiseta 100% Poliéster / Dry Fit',
    productName: 'Camiseta Poliéster',
    category: 'fabric',
    temperatureC: 200,
    temperatureF: 392,
    timeSeconds: 30,
    pressure: 'heavy',
    paperType: 'sublimation_fast',
    recommendations: 'Utilize papel protetor Teflon para evitar amarelamento.',
    notes: 'Passe a peça antes para retirar umidade do tecido.',
  },
  {
    id: 'pillow_case',
    name: 'Almofada / Capa 40x40cm Poliéster',
    productName: 'Almofada 40x40cm',
    category: 'fabric',
    temperatureC: 200,
    temperatureF: 392,
    timeSeconds: 40,
    pressure: 'medium',
    paperType: 'sublimation_fast',
    recommendations: 'Retire o enchimento antes de prensar a capa plana.',
    notes: 'Mantenha o zíper fora da área de contato do prato aquecido.',
  },
];

export function calculateInkAndCost(widthMm: number = 297, heightMm: number = 420, coveragePercent: number = 85) {
  const areaM2 = (widthMm / 1000) * (heightMm / 1000);
  const inkMl = Math.round(areaM2 * 12 * (coveragePercent / 100) * 10) / 10; // ~12ml per sq meter average
  const costBrl = Math.round(areaM2 * 2.5 * (coveragePercent / 100) * 100) / 100; // ~R$ 2.50 paper + ink
  return {
    areaM2,
    inkMl,
    costBrl,
    coveragePercent,
  };
}
