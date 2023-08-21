import { MigrationInterface, QueryRunner } from 'typeorm';

export class ItemUpdate1692588502826 implements MigrationInterface {
  name = 'ItemUpdate1692588502826';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "item" ADD "projectQuantity" integer`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "projectQuantity"`);
  }
}
