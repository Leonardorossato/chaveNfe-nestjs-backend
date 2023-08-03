import { ApiProperty } from '@nestjs/swagger';
import { ufs, notaFiscal, tipoEmissao } from '../interface/chave.interface';
import { IsEnum, IsNotEmpty, IsNumberString, Length } from 'class-validator';
import { Transform } from 'class-transformer';

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
  @IsEnum(UFEnum)
  uf: UFEnum;
  codigo: number;

  constructor() {
    // Inicialize as propriedades UF e Codigo com valores padrão ou deixe-as como undefined
    this.uf = undefined;
    this.modeloNFe = undefined;
    this.tipoEmissao = undefined;
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

  @ApiProperty({ format: 'mm/yyyy' })
  @Transform(({ value }) => {
    const date = new Date(value);
    const month = date.getUTCMonth() + 1; // UTC month starts from 0
    const year = date.getUTCFullYear() % 100; // Use the last two digits of the year
    return `${String(month).padStart(2, '0')}${String(year).padStart(2, '0')}`;
  })
  dataDeEmissao: string;

  @ApiProperty({ format: '99.999.999/9999-99' })
  @Length(18, 18)
  @Transform(({ value }) => value.replace(/[.-\/]/g, ''))
  cnpj: string;

  @ApiProperty({
    enum: Object.values(nFEEnum),
    enumName: 'nFEEnum',
  })
  @IsEnum(nFEEnum)
  modeloNFe: nFEEnum;
  codigoNfe: number;

  setNfe(notas: nFEEnum) {
    this.modeloNFe = notas;
    const fiscal = notaFiscal.find((item) => item.nFE === notas);
    if (fiscal) {
      this.codigoNfe = fiscal.codigoNfe;
    } else {
      this.codigoNfe = 0; // Ou algum valor padrão caso o estado não seja encontrado
    }
  }

  @ApiProperty({ format: '99' })
  @IsNumberString()
  @Transform(({ value }) => value.padStart(2, '0'))
  serie: number;

  @ApiProperty({ format: '999.999.999' })
  @IsNotEmpty()
  @IsNumberString()
  @Length(9, 9)
  @Transform(({ value }) => value.padStart(9, '0'))
  @ApiProperty({ minLength: 1, maxLength: 20 })
  numeroNfe: number;

  setTipoEmissao(emissao: tipDeEmissaoEnum) {
    this.tipoEmissao = emissao;
    const tEmissao = tipoEmissao.find((item) => item.tipoEmissao === emissao);
    if (tEmissao) {
      this.codigoEmissao = tEmissao.codigoEmissao;
    } else {
      this.codigoEmissao = 0; // Ou algum valor padrão caso o estado não seja encontrado
    }
  }
  @ApiProperty({ enum: tipDeEmissaoEnum, enumName: 'TipoEmissaoEnum' })
  @IsEnum(tipDeEmissaoEnum)
  tipoEmissao: tipDeEmissaoEnum;
  codigoEmissao: number;

  @ApiProperty({ format: '999.999' })
  @IsNotEmpty()
  @IsNumberString()
  @Length(6, 6)
  @Transform(({ value }) => value.padStart(6, '0'))
  codNumerico: number;

  @ApiProperty({ nullable: true })
  dvCalculado?: number;
}
