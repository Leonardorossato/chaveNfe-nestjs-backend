import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chave {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 2 })
  uf: string;

  @Column({ nullable: false, length: 4 })
  dataDeEmissao: string;

  @Column({ nullable: false, length: 14 })
  cnpj: string;

  @Column({ nullable: false, length: 2 })
  modeloNFe: string;

  @Column({ nullable: false, length: 3 })
  serie: string;

  @Column({ nullable: false, length: 9 })
  numeroNfe: string;

  @Column({ nullable: false, length: 2 })
  tipoEmissao: string;

  @Column({ nullable: false, length: 8 })
  codNumerico: string;

  @Column({ length: 44 })
  chaveNfe?: string;

  @Column()
  dvInformado?: string;

  @Column()
  dvCalculado: string;
}
