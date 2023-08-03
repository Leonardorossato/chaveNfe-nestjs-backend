import { MigrationInterface, QueryRunner } from "typeorm";

export class Chave1691073100761 implements MigrationInterface {
    name = 'Chave1691073100761'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "chave" ("id" SERIAL NOT NULL, "uf" character varying NOT NULL, "dataDeEmissao" character varying NOT NULL, "cnpj" character varying NOT NULL, "modeloNFe" character varying NOT NULL, "serie" integer NOT NULL, "numeroNfe" integer NOT NULL, "tipoEmissao" character varying NOT NULL, "codNumerico" integer NOT NULL, "chaveNfe" character varying NOT NULL, CONSTRAINT "PK_b57abcbed4ec15b52078b1ed9bb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "chave"`);
    }

}
