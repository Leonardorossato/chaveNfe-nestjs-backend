import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chave {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 2 })
  uf: string;

  @Column({ nullable: false, length: 4 })
  dataDeEmissao: string;

  @Column({ nullable: false })
  cnpj: number;

  @Column({ nullable: false, length: 20 })
  modeloNFe: string;

  @Column({ nullable: false })
  serie: number;

  @Column({ nullable: false })
  numeroNfe: number;

  @Column({ nullable: false, length: 2 })
  tipoEmissao: string;

  @Column({ nullable: false })
  codNumerico: number;

  @Column({ length: 44 })
  chaveNfe?: string;

  @Column()
  dvInformado?: string;

  @Column()
  dvCalculado?: string;
}
