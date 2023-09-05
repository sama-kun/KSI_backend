import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1693895156616 implements MigrationInterface {
  name = 'Initial1693895156616';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "category" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying, "description" character varying, "updatedById" integer, "createdById" integer, CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name"), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."project_status_enum" AS ENUM('planned', 'active', 'finished')`,
    );
    await queryRunner.query(
      `CREATE TABLE "project" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying, "status" "public"."project_status_enum" NOT NULL DEFAULT 'planned', "updatedById" integer, "createdById" integer, CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "cart-item" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "quantity" integer, "initialQuantity" integer, "isHistory" boolean NOT NULL DEFAULT false, "returnTime" TIMESTAMP WITH TIME ZONE, "workedHours" integer, "status" character varying NOT NULL DEFAULT 'OnProject', "updatedById" integer, "createdById" integer, "itemId" integer, "projectId" integer, CONSTRAINT "PK_0bab23e63a695e02f3b9496809b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."user_role_enum" AS ENUM('user', 'admin', 'root')`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying NOT NULL, "password" character varying NOT NULL, "role" "public"."user_role_enum" NOT NULL DEFAULT 'user', "updatedById" integer, "createdById" integer, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "maintenance" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "checkDate" date, "updatedById" integer, "createdById" integer, "itemId" integer, "checkerId" integer, CONSTRAINT "PK_542fb6a28537140d2df95faa52a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "item" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying, "tag" character varying, "quantity" integer, "projectQuantity" integer DEFAULT '0', "totalQuantity" integer, "workingHours" integer, "updatedById" integer, "createdById" integer, "categoryId" integer, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."file_type_enum" AS ENUM('pdf', 'image')`,
    );
    await queryRunner.query(
      `CREATE TABLE "file" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "url" character varying NOT NULL, "secure_url" character varying NOT NULL, "asset_id" character varying NOT NULL, "public_id" character varying NOT NULL, "folder" character varying, "type" "public"."file_type_enum" NOT NULL DEFAULT 'image', "updatedById" integer, "createdById" integer, "itemId" integer, CONSTRAINT "PK_36b46d232307066b3a2c9ea3a1d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."main-file_type_enum" AS ENUM('fault', 'testing', 'main', 'problem')`,
    );
    await queryRunner.query(
      `CREATE TABLE "main-file" ("id" SERIAL NOT NULL, "type" "public"."main-file_type_enum" NOT NULL DEFAULT 'main', "fileId" integer, "maintenanceId" integer, CONSTRAINT "PK_977852ae2139699bc9a232749e8" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "category" ADD CONSTRAINT "FK_a5d7b5b0fc1f7358541b14b242d" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "category" ADD CONSTRAINT "FK_50c69cdc9b3e7494784a2fa2db4" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "project" ADD CONSTRAINT "FK_dfdad0cd83b31ccb2204f3dc688" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "project" ADD CONSTRAINT "FK_678acfe7017fe8a25fe7cae5f18" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "cart-item" ADD CONSTRAINT "FK_b127495894dd6e0377a68ae9d15" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "cart-item" ADD CONSTRAINT "FK_94f769088bcc6d22a7e32a83998" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "cart-item" ADD CONSTRAINT "FK_a04cf8c2e30121c26978bd25bcb" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "cart-item" ADD CONSTRAINT "FK_79983fb48ec5b3138c2c3f1064b" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_db5173f7d27aa8a98a9fe6113df" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_45c0d39d1f9ceeb56942db93cc5" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
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
    await queryRunner.query(
      `ALTER TABLE "item" ADD CONSTRAINT "FK_fb48d22abb5d443a40a91b85677" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "item" ADD CONSTRAINT "FK_23842f1bc57d2d527bbf6d14d8d" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "item" ADD CONSTRAINT "FK_c0c8f47a702c974a77812169bc2" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "file" ADD CONSTRAINT "FK_e1b1af341c80fafd98f699c50b6" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "file" ADD CONSTRAINT "FK_d7187ebff85831dd00deaa3e0cc" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "file" ADD CONSTRAINT "FK_2d41e5f62571965a6ed522d665f" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "main-file" ADD CONSTRAINT "FK_f8e5e480e8feb174aeb18649630" FOREIGN KEY ("fileId") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "main-file" ADD CONSTRAINT "FK_4657ec6966634d5abdd7d1667de" FOREIGN KEY ("maintenanceId") REFERENCES "maintenance"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "main-file" DROP CONSTRAINT "FK_4657ec6966634d5abdd7d1667de"`,
    );
    await queryRunner.query(
      `ALTER TABLE "main-file" DROP CONSTRAINT "FK_f8e5e480e8feb174aeb18649630"`,
    );
    await queryRunner.query(
      `ALTER TABLE "file" DROP CONSTRAINT "FK_2d41e5f62571965a6ed522d665f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "file" DROP CONSTRAINT "FK_d7187ebff85831dd00deaa3e0cc"`,
    );
    await queryRunner.query(
      `ALTER TABLE "file" DROP CONSTRAINT "FK_e1b1af341c80fafd98f699c50b6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "item" DROP CONSTRAINT "FK_c0c8f47a702c974a77812169bc2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "item" DROP CONSTRAINT "FK_23842f1bc57d2d527bbf6d14d8d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "item" DROP CONSTRAINT "FK_fb48d22abb5d443a40a91b85677"`,
    );
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
      `ALTER TABLE "user" DROP CONSTRAINT "FK_45c0d39d1f9ceeb56942db93cc5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_db5173f7d27aa8a98a9fe6113df"`,
    );
    await queryRunner.query(
      `ALTER TABLE "cart-item" DROP CONSTRAINT "FK_79983fb48ec5b3138c2c3f1064b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "cart-item" DROP CONSTRAINT "FK_a04cf8c2e30121c26978bd25bcb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "cart-item" DROP CONSTRAINT "FK_94f769088bcc6d22a7e32a83998"`,
    );
    await queryRunner.query(
      `ALTER TABLE "cart-item" DROP CONSTRAINT "FK_b127495894dd6e0377a68ae9d15"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project" DROP CONSTRAINT "FK_678acfe7017fe8a25fe7cae5f18"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project" DROP CONSTRAINT "FK_dfdad0cd83b31ccb2204f3dc688"`,
    );
    await queryRunner.query(
      `ALTER TABLE "category" DROP CONSTRAINT "FK_50c69cdc9b3e7494784a2fa2db4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "category" DROP CONSTRAINT "FK_a5d7b5b0fc1f7358541b14b242d"`,
    );
    await queryRunner.query(`DROP TABLE "main-file"`);
    await queryRunner.query(`DROP TYPE "public"."main-file_type_enum"`);
    await queryRunner.query(`DROP TABLE "file"`);
    await queryRunner.query(`DROP TYPE "public"."file_type_enum"`);
    await queryRunner.query(`DROP TABLE "item"`);
    await queryRunner.query(`DROP TABLE "maintenance"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
    await queryRunner.query(`DROP TABLE "cart-item"`);
    await queryRunner.query(`DROP TABLE "project"`);
    await queryRunner.query(`DROP TYPE "public"."project_status_enum"`);
    await queryRunner.query(`DROP TABLE "category"`);
  }
}
