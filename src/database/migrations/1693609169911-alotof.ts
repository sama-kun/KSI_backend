import { MigrationInterface, QueryRunner } from 'typeorm';

export class Alotof1693609169911 implements MigrationInterface {
  name = 'Alotof1693609169911';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "original"`);
    await queryRunner.query(
      `ALTER TABLE "file" ADD "url" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "file" ADD "secure_url" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "file" ADD "asset_id" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "file" ADD "public_id" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "file" ADD "folder" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "folder"`);
    await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "public_id"`);
    await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "asset_id"`);
    await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "secure_url"`);
    await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "url"`);
    await queryRunner.query(
      `ALTER TABLE "file" ADD "original" character varying NOT NULL`,
    );
  }
}
