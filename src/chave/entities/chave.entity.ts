import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Chave {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  uf: string;

  @Column({ nullable: false })
  dataDeEmissao: string;

  @Column({ nullable: false })
  cnpj: string;

  @Column({ nullable: false })
  modeloNFe: string;

  @Column({ nullable: false })
  serie: number;

  @Column({ nullable: false })
  numeroNfe: number;

  @Column({ nullable: false })
  tipoEmissao: string;

  @Column({ nullable: false })
  codNumerico: number;

  @Column()
  chaveNfe?: string;

  @Column({ nullable: true })
  dvInformado?: string;

  @Column({ nullable: true })
  dvCalculado?: string;

  gerarChaveNfe(): void {
    const ufNumerico = this.geUfCodigo(this.uf);

    // Remova qualquer formatação do CNPJ (pontos, traços e barras) e converta para um número
    const cnpjNumerico = parseInt(this.cnpj.replace(/[.-\/]/g, ''), 10);

    // Conversão do modeloNfe para um número
    const modeloNfeNumerico = this.getNotaFiscal(this.modeloNFe);

    // Conversão do tipoDeEmissao para um número
    const tipoDeEmissaoNumerico = this.getTipoDeEmissao(this.tipoEmissao);

    this.chaveNfe = `${ufNumerico}${this.dataDeEmissao}${cnpjNumerico}${modeloNfeNumerico}${this.serie}${this.numeroNfe}${tipoDeEmissaoNumerico}${this.codNumerico}`;
  }

  private geUfCodigo(uf: string) {
    const ufMapping: { [key: string]: string } = {
      AC: '12',
      AL: '27',
      AM: '13',
      AP: '16',
      BA: '29',
      CE: '23',
      DF: '53',
      ES: '32',
      GO: '52',
      MA: '21',
      MG: '31',
      MS: '50',
      MT: '51',
      PA: '15',
      PB: '25',
      PE: '26',
      PI: '22',
      PR: '41',
      RJ: '33',
      RN: '24',
      RO: '11',
      RR: '14',
      RS: '43',
      SC: '42',
      SE: '28',
      SP: '35',
    };
    const ufNumerico = ufMapping[uf];
    if (!ufNumerico) {
      throw new Error(`Código numérico para a UF "${uf}" não encontrado.`);
    }
    return ufNumerico;
  }
  private getNotaFiscal(nFE: string) {
    const numeroNotaFdical: { [key: string]: string } = {
      NFe: '55',
      MDFe: '58',
      NFCe: '65',
      CTe: '57',
    };
    const numericoFsical = numeroNotaFdical[nFE];
    if (!numericoFsical) {
      throw new Error(`Código da nota fiscal "${nFE}" não encontrado.`);
    }
    return numericoFsical;
  }

  private getTipoDeEmissao(tpm: string) {
    const tipoDeEmissao: { [key: string]: string } = {
      Normal: '1',
      ContigenciaFs: '2',
      ContigenciaSCAN: '3',
      ContigenciaDPEC: '4',
      ContigenciaFSDA: '5',
      ContigenciaSVCAN: '6',
      ContigenciaSCVRS: '7',
    };

    const conversaoEmissao = tipoDeEmissao[tpm];
    if (!conversaoEmissao) {
      throw new Error(`Código do tipo de emissão "${tpm}" não encontrado.`);
    }
    return conversaoEmissao;
  }
}
