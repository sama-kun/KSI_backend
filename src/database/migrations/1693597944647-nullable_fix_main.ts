import { MigrationInterface, QueryRunner } from 'typeorm';

export class NullableFixMain1693597944647 implements MigrationInterface {
  name = 'NullableFixMain1693597944647';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "maintenance" ALTER COLUMN "checkDate" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "maintenance" ALTER COLUMN "checkDate" SET NOT NULL`,
    );
  }
}
