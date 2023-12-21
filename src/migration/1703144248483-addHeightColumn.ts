import { MigrationInterface, QueryRunner } from "typeorm";

export class AddHeightColumn1703144248483 implements MigrationInterface {
    name = 'AddHeightColumn1703144248483'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "height" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "height"`);
    }

}
