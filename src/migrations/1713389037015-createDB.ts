import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDB1713389037015 implements MigrationInterface {
    name = 'CreateDB1713389037015'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cars" ("id" SERIAL NOT NULL, "brand" character varying NOT NULL, "model" character varying NOT NULL, "year" character varying NOT NULL, "fuel" character varying NOT NULL, "km" integer NOT NULL, "color" character varying NOT NULL, "price" integer NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cars"`);
    }

}
