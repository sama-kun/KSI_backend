import { MigrationInterface, QueryRunner } from 'typeorm';

export class Statuses1693903590150 implements MigrationInterface {
  name = 'Statuses1693903590150';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."maintenance_type_enum" AS ENUM('corrective', 'preventive')`,
    );
    await queryRunner.query(
      `ALTER TABLE "maintenance" ADD "type" "public"."maintenance_type_enum" NOT NULL DEFAULT 'corrective'`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."item_status_enum" AS ENUM('warinig', 'ok')`,
    );
    await queryRunner.query(
      `ALTER TABLE "item" ADD "status" "public"."item_status_enum" NOT NULL DEFAULT 'ok'`,
    );
    await queryRunner.query(
      `ALTER TABLE "cart-item" ALTER COLUMN "status" SET DEFAULT 'InCart'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cart-item" ALTER COLUMN "status" SET DEFAULT 'OnProject'`,
    );
    await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "status"`);
    await queryRunner.query(`DROP TYPE "public"."item_status_enum"`);
    await queryRunner.query(`ALTER TABLE "maintenance" DROP COLUMN "type"`);
    await queryRunner.query(`DROP TYPE "public"."maintenance_type_enum"`);
  }
}
