import { MigrationInterface, QueryRunner } from "typeorm";

export class Chave1689512711871 implements MigrationInterface {
    name = 'Chave1689512711871'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "chave" ("id" SERIAL NOT NULL, "uf" character varying(2) NOT NULL, "dataDeEmissao" character varying(4) NOT NULL, "cnpj" character varying(14) NOT NULL, "modeloNFe" character varying(2) NOT NULL, "serie" character varying(3) NOT NULL, "numeroNfe" character varying(9) NOT NULL, "tipoEmissao" character varying(2) NOT NULL, "codNumerico" character varying(8) NOT NULL, "cDV" character varying NOT NULL, CONSTRAINT "PK_b57abcbed4ec15b52078b1ed9bb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "chave"`);
    }

}
