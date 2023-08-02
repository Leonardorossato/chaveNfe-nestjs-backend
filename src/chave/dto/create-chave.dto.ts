import { ApiProperty } from '@nestjs/swagger';
import { ufs } from '../interface/chave.interface';
import { notaFiscal } from '../interface/chave.interface';
import { tipoEmissao } from '../interface/chave.interface';

enum UFEnum {
  AC = 'AC',
  AL = 'AL',
  AM = 'AM',
  AP = 'AP',
  BA = 'BA',
  CE = 'CE',
  DF = 'DF',
  ES = 'ES',
  GO = 'GO',
  MA = 'MA',
  MG = 'MG',
  MS = 'MS',
  MT = 'MT',
  PA = 'PA',
  PB = 'PB',
  PE = 'PE',
  PI = 'PI',
  PR = 'PR',
  RJ = 'RJ',
  RN = 'RN',
  RO = 'RO',
  RR = 'RR',
  RS = 'RS',
  SC = 'SC',
  SE = 'SE',
  SP = 'SP',
  TO = 'TO',
}

enum nFEEnum {
  nfe = 'NF-e',
  mdfe = 'MDF-e',
  nfce = 'NFC-e',
  cte = 'CT-e',
}

enum tipDeEmissaoEnum {
  Normal = 'Normal',
  contigenciaFs = 'Contigencia Fs',
  contigenciaSCAN = 'Contigencia SCAN',
  contigenciaDPEC = 'Contigencia DPEC',
  contigenciaFSDA = 'Contigencia FS-DA',
  contigenciaSVCAN = 'Contigencia SVC-AN',
  contigenciaSCVRS = 'Contigencia SCV-RS',
}

export class CreateChaveDto {
  @ApiProperty({
    enum: Object.values(UFEnum),
    enumName: 'UFEnum',
  })
  uf: UFEnum;
  codigo: number;

  constructor() {
    // Inicialize as propriedades UF e Codigo com valores padrão ou deixe-as como undefined
    this.uf = undefined;
    this.notas = undefined;
    this.tipo = undefined;
    this.codigoEmissao = 0;
    this.codigoNfe = 0;
    this.codigo = 0;
  }
  setUf(uf: UFEnum) {
    this.uf = uf;
    const estado = ufs.find((item) => item.uf === uf);
    if (estado) {
      this.codigo = estado.codigo;
    } else {
      this.codigo = 0; // Ou algum valor padrão caso o estado não seja encontrado
    }
  }

  @ApiProperty({ minLength: 6, maxLength: 6 })
  dataDeEmissao: string;

  @ApiProperty({ maxLength: 14 })
  cnpj: number;

  @ApiProperty({
    enum: Object.values(nFEEnum),
    enumName: 'nFEEnum',
  })
  notas: nFEEnum;
  codigoNfe: number;

  setNfe(notas: nFEEnum) {
    this.notas = notas;
    const fiscal = notaFiscal.find((item) => item.nFE === notas);
    if (fiscal) {
      this.codigoNfe = fiscal.codigoNfe;
    } else {
      this.codigoNfe = 0; // Ou algum valor padrão caso o estado não seja encontrado
    }
  }

  @ApiProperty({ minLength: 1, maxLength: 3 })
  serie: number;

  @ApiProperty({ minLength: 1, maxLength: 20 })
  numeroNfe: number;

  @ApiProperty({
    enum: Object.values(tipDeEmissaoEnum),
    enumName: 'tipDeEmissaoEnum',
  })
  tipo: tipDeEmissaoEnum;
  codigoEmissao: number;

  setTipoEmissao(emissao: tipDeEmissaoEnum) {
    this.tipo = emissao;
    const tEmissao = tipoEmissao.find((item) => item.tipoEmissao === emissao);
    if (tEmissao) {
      this.codigoEmissao = tEmissao.codigoEmissao;
    } else {
      this.codigoEmissao = 0; // Ou algum valor padrão caso o estado não seja encontrado
    }
  }

  @ApiProperty({ minLength: 1, maxLength: 8 })
  codigoNumerico: number;
}
