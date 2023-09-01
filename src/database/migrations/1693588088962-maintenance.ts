import { MigrationInterface, QueryRunner } from 'typeorm';

export class Maintenance1693588088962 implements MigrationInterface {
  name = 'Maintenance1693588088962';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."main-file_type_enum" AS ENUM('fault', 'testing', 'main', 'problem')`,
    );
    await queryRunner.query(
      `CREATE TABLE "main-file" ("id" SERIAL NOT NULL, "type" "public"."main-file_type_enum" NOT NULL DEFAULT 'main', "fileId" integer, "maintenanceId" integer, CONSTRAINT "PK_977852ae2139699bc9a232749e8" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "maintenance" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "checkDate" date NOT NULL, "updatedById" integer, "createdById" integer, "itemId" integer, "checkerId" integer, CONSTRAINT "PK_542fb6a28537140d2df95faa52a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "main-file" ADD CONSTRAINT "FK_f8e5e480e8feb174aeb18649630" FOREIGN KEY ("fileId") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "main-file" ADD CONSTRAINT "FK_4657ec6966634d5abdd7d1667de" FOREIGN KEY ("maintenanceId") REFERENCES "maintenance"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "maintenance" ADD CONSTRAINT "FK_7bd849f7267b2ea0e3c6107e82f" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "maintenance" ADD CONSTRAINT "FK_4ae9c21e7f52c0a9d5b6338c9bc" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "maintenance" ADD CONSTRAINT "FK_52ad5c331eeb6026c4e5eed108c" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "maintenance" ADD CONSTRAINT "FK_b9f72eecfecdd7711d6d09bfa76" FOREIGN KEY ("checkerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "maintenance" DROP CONSTRAINT "FK_b9f72eecfecdd7711d6d09bfa76"`,
    );
    await queryRunner.query(
      `ALTER TABLE "maintenance" DROP CONSTRAINT "FK_52ad5c331eeb6026c4e5eed108c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "maintenance" DROP CONSTRAINT "FK_4ae9c21e7f52c0a9d5b6338c9bc"`,
    );
    await queryRunner.query(
      `ALTER TABLE "maintenance" DROP CONSTRAINT "FK_7bd849f7267b2ea0e3c6107e82f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "main-file" DROP CONSTRAINT "FK_4657ec6966634d5abdd7d1667de"`,
    );
    await queryRunner.query(
      `ALTER TABLE "main-file" DROP CONSTRAINT "FK_f8e5e480e8feb174aeb18649630"`,
    );
    await queryRunner.query(`DROP TABLE "maintenance"`);
    await queryRunner.query(`DROP TABLE "main-file"`);
    await queryRunner.query(`DROP TYPE "public"."main-file_type_enum"`);
  }
}
