// uf.ts
export const ufs: { uf: string; codigo: number }[] = [
  { uf: 'AC', codigo: 12 },
  { uf: 'AL', codigo: 27 },
  { uf: 'AM', codigo: 13 },
  { uf: 'AP', codigo: 16 },
  { uf: 'BA', codigo: 29 },
  { uf: 'CE', codigo: 23 },
  { uf: 'DF', codigo: 53 },
  { uf: 'ES', codigo: 32 },
  { uf: 'GO', codigo: 52 },
  { uf: 'MA', codigo: 21 },
  { uf: 'MG', codigo: 31 },
  { uf: 'MS', codigo: 50 },
  { uf: 'MT', codigo: 51 },
  { uf: 'PA', codigo: 15 },
  { uf: 'PB', codigo: 25 },
  { uf: 'PE', codigo: 26 },
  { uf: 'PI', codigo: 22 },
  { uf: 'PR', codigo: 41 },
  { uf: 'RJ', codigo: 33 },
  { uf: 'RN', codigo: 24 },
  { uf: 'RO', codigo: 11 },
  { uf: 'RR', codigo: 14 },
  { uf: 'RS', codigo: 43 },
  { uf: 'SC', codigo: 42 },
  { uf: 'SE', codigo: 28 },
  { uf: 'SP', codigo: 35 },
  { uf: 'TO', codigo: 17 },
];

export const nFE: { nFE: string; codigo: number }[] = [
  { nFE: 'NF-e', codigo: 55 },
  { nFE: 'MDF-e', codigo: 58 },
  { nFE: 'NFC-e', codigo: 65 },
  { nFE: 'CT-e', codigo: 57 },
];

export const tipoEmissao: { tipoEmissao: string; codigo: number }[] = [
  { tipoEmissao: 'Normal', codigo: 1 },
  { tipoEmissao: 'Contigencia Fs', codigo: 2 },
  { tipoEmissao: 'Contigencia SCAN', codigo: 3 },
  { tipoEmissao: 'Contigencia DPEC', codigo: 4 },
  { tipoEmissao: 'Contigencia FS-DA', codigo: 5 },
  { tipoEmissao: 'Contigencia SVC-AN', codigo: 6 },
  { tipoEmissao: 'Contigencia SCV-RS', codigo: 7 },
];
