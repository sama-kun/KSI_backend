import { MigrationInterface, QueryRunner } from "typeorm";

export class BasemodelChange1691440282252 implements MigrationInterface {
    name = 'BasemodelChange1691440282252'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" ADD "createdById" integer`);
        await queryRunner.query(`ALTER TABLE "project" ADD "createdById" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD "createdById" integer`);
        await queryRunner.query(`ALTER TABLE "item" ADD "createdById" integer`);
        await queryRunner.query(`ALTER TABLE "category" ADD "createdById" integer`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_54915a9d5a77e86c48fe9590b24" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_678acfe7017fe8a25fe7cae5f18" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_45c0d39d1f9ceeb56942db93cc5" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_23842f1bc57d2d527bbf6d14d8d" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_50c69cdc9b3e7494784a2fa2db4" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_50c69cdc9b3e7494784a2fa2db4"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_23842f1bc57d2d527bbf6d14d8d"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_45c0d39d1f9ceeb56942db93cc5"`);
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_678acfe7017fe8a25fe7cae5f18"`);
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_54915a9d5a77e86c48fe9590b24"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "createdById"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "createdById"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdById"`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "createdById"`);
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "createdById"`);
    }

}
