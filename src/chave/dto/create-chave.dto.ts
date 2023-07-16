import {ApiProperty, } from '@nestjs/swagger';

import { ufs } from '../interface/chave.interface';

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
}
