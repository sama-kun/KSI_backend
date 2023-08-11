import { MigrationInterface, QueryRunner } from "typeorm";

export class BasemodelChange1691439716089 implements MigrationInterface {
    name = 'BasemodelChange1691439716089'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" ADD "updatedById" integer`);
        await queryRunner.query(`ALTER TABLE "project" ADD "updatedById" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updatedById" integer`);
        await queryRunner.query(`ALTER TABLE "cart" ADD "updatedById" integer`);
        await queryRunner.query(`ALTER TABLE "item" ADD "updatedById" integer`);
        await queryRunner.query(`ALTER TABLE "image" ADD "updatedById" integer`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_a5d7b5b0fc1f7358541b14b242d" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_dfdad0cd83b31ccb2204f3dc688" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_db5173f7d27aa8a98a9fe6113df" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_476b318963147ddc70f5f973ea1" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_fb48d22abb5d443a40a91b85677" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_e6e73444b9ef8d8fd71dceeccd2" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_e6e73444b9ef8d8fd71dceeccd2"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_fb48d22abb5d443a40a91b85677"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_476b318963147ddc70f5f973ea1"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_db5173f7d27aa8a98a9fe6113df"`);
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_dfdad0cd83b31ccb2204f3dc688"`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_a5d7b5b0fc1f7358541b14b242d"`);
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "updatedById"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "updatedById"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP COLUMN "updatedById"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedById"`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "updatedById"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "updatedById"`);
    }

}
