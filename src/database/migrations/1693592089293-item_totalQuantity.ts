import { MigrationInterface, QueryRunner } from 'typeorm';

export class ItemTotalQuantity1693592089293 implements MigrationInterface {
  name = 'ItemTotalQuantity1693592089293';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "item" ADD "totalQuantity" integer`);
    await queryRunner.query(
      `ALTER TABLE "item" ALTER COLUMN "projectQuantity" SET DEFAULT '0'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "item" ALTER COLUMN "projectQuantity" DROP DEFAULT`,
    );
    await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "totalQuantity"`);
  }
}
