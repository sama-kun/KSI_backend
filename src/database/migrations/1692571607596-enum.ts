import { MigrationInterface, QueryRunner } from 'typeorm';

export class Enum1692571607596 implements MigrationInterface {
  name = 'Enum1692571607596';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
    await queryRunner.query(
      `CREATE TYPE "public"."user_role_enum" AS ENUM('user', 'admin', 'root')`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "role" "public"."user_role_enum" NOT NULL DEFAULT 'user'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
    await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "role" integer NOT NULL DEFAULT '0'`,
    );
  }
}
