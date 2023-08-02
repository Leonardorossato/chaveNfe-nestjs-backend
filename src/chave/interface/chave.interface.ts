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

export const notaFiscal: { nFE: string; codigoNfe: number }[] = [
  { nFE: 'NF-e', codigoNfe: 55 },
  { nFE: 'MDF-e', codigoNfe: 58 },
  { nFE: 'NFC-e', codigoNfe: 65 },
  { nFE: 'CT-e', codigoNfe: 57 },
];

export const tipoEmissao: { tipoEmissao: string; codigoEmissao: number }[] = [
  { tipoEmissao: 'Normal', codigoEmissao: 1 },
  { tipoEmissao: 'Contigencia Fs', codigoEmissao: 2 },
  { tipoEmissao: 'Contigencia SCAN', codigoEmissao: 3 },
  { tipoEmissao: 'Contigencia DPEC', codigoEmissao: 4 },
  { tipoEmissao: 'Contigencia FS-DA', codigoEmissao: 5 },
  { tipoEmissao: 'Contigencia SVC-AN', codigoEmissao: 6 },
  { tipoEmissao: 'Contigencia SCV-RS', codigoEmissao: 7 },
];
