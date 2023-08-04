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

  @Column({ nullable: true })
  chaveNfe?: string;

  gerarChaveNfe(): void {
    if (
      !this.uf ||
      !this.dataDeEmissao ||
      !this.cnpj ||
      !this.modeloNFe ||
      !this.serie ||
      !this.numeroNfe ||
      !this.tipoEmissao ||
      !this.codNumerico
    ) {
      throw new Error(
        'Alguma propriedade necessária para gerar a chave está vazia.',
      );
    }

    // Verificar se as propriedades numéricas (serie, numeroNfe e codNumerico) são válidas
    if (isNaN(this.serie) || isNaN(this.numeroNfe) || isNaN(this.codNumerico)) {
      throw new Error(
        'Alguma propriedade numérica necessária para gerar a chave é inválida.',
      );
    }

    const data = this.formatDate(this.dataDeEmissao);
    const numero = this.numeroNfe.toString();
    const ufNumerico = this.geUfCodigo(this.uf).toString();
    const cnpjNumerico = this.cnpj.replace(/\D/g, '');
    const modeloNfeNumerico = this.getNotaFiscal(this.modeloNFe).toString();
    const tipoDeEmissaoNumerico = this.getTipoDeEmissao(this.tipoEmissao);
    const serie = this.serie.toString();
    const codNumerico = this.codNumerico.toString();

    const chaveSemDigito = `${ufNumerico}${data}${cnpjNumerico}${modeloNfeNumerico}${serie}${numero}${tipoDeEmissaoNumerico}${codNumerico}`;
    const dvCalculado = this.calcularDigitoVerificador(chaveSemDigito);
    this.chaveNfe = `${chaveSemDigito}${dvCalculado}`;
  }

  private geUfCodigo(uf: string) {
    const ufMapping: { [key: string]: number } = {
      AC: 12,
      AL: 27,
      AM: 13,
      AP: 16,
      BA: 29,
      CE: 23,
      DF: 53,
      ES: 32,
      GO: 52,
      MA: 21,
      MG: 31,
      MS: 50,
      MT: 51,
      PA: 15,
      PB: 25,
      PE: 26,
      PI: 22,
      PR: 41,
      RJ: 33,
      RN: 24,
      RO: 11,
      RR: 14,
      RS: 43,
      SC: 42,
      SE: 28,
      SP: 35,
      TO: 17,
    };
    const ufNumerico = ufMapping[uf];
    if (!ufNumerico) {
      throw new Error(`Código numérico para a UF "${uf}" não encontrado.`);
    }
    return ufNumerico;
  }
  private getNotaFiscal(nFE: string) {
    const numeroNotaFdical: { [key: string]: number } = {
      NFe: 55,
      MDFe: 58,
      NFCe: 65,
      CTe: 57,
    };
    const numericoFsical = numeroNotaFdical[nFE];
    if (!numericoFsical) {
      throw new Error(`Código da nota fiscal "${nFE}" não encontrado.`);
    }
    return numericoFsical;
  }

  private getTipoDeEmissao(tpm: string) {
    const tipoDeEmissao: { [key: string]: number } = {
      Normal: 1,
      ContigenciaFs: 2,
      ContigenciaSCAN: 3,
      ContigenciaDPEC: 4,
      ContigenciaFSDA: 5,
      ContigenciaSVCAN: 6,
      ContigenciaSCVRS: 7,
    };

    const conversaoEmissao = tipoDeEmissao[tpm];
    if (!conversaoEmissao) {
      throw new Error(`Código do tipo de emissão "${tpm}" não encontrado.`);
    }
    return conversaoEmissao;
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear().toString();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  }

  private calcularDigitoVerificador(chaveSemDigito: string) {
    let soma = 0;
    const multiplicadores = [
      2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9, 2,
      3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9,
    ];

    for (let i = chaveSemDigito.length - 1; i >= 0; i--) {
      const digito = parseInt(chaveSemDigito.charAt(i), 10);
      const multiplicador = multiplicadores[i];
      console.log(`Digito: ${digito}, Multiplicador: ${multiplicador}`);
      soma += digito * multiplicador;
    }
    const resto = soma % 11;
    let dvCalculado = 11 - resto;

    if (dvCalculado === 0 || dvCalculado === 1) {
      dvCalculado = 0;
    }
    return dvCalculado.toString();
  }
}
