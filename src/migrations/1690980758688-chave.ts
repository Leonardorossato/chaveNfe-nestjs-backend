import { MigrationInterface, QueryRunner } from "typeorm";

export class Chave1690980758688 implements MigrationInterface {
    name = 'Chave1690980758688'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "chave" ("id" SERIAL NOT NULL, "uf" character varying(2) NOT NULL, "dataDeEmissao" character varying(4) NOT NULL, "cnpj" integer NOT NULL, "modeloNFe" character varying(2) NOT NULL, "serie" integer NOT NULL, "numeroNfe" integer NOT NULL, "tipoEmissao" character varying(2) NOT NULL, "codNumerico" integer NOT NULL, "chaveNfe" character varying(44) NOT NULL, "dvInformado" character varying NOT NULL, "dvCalculado" character varying NOT NULL, CONSTRAINT "PK_b57abcbed4ec15b52078b1ed9bb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "chave"`);
    }

}
