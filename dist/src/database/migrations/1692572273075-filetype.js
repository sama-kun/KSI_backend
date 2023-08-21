"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filetype1692572273075 = void 0;
class Filetype1692572273075 {
    constructor() {
        this.name = 'Filetype1692572273075';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."file_type_enum" AS ENUM('pdf', 'image')`);
        await queryRunner.query(`CREATE TABLE "file" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "original" character varying NOT NULL, "type" "public"."file_type_enum" NOT NULL DEFAULT 'image', "updatedById" integer, "createdById" integer, "itemId" integer, CONSTRAINT "PK_36b46d232307066b3a2c9ea3a1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "file" ADD CONSTRAINT "FK_e1b1af341c80fafd98f699c50b6" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "file" ADD CONSTRAINT "FK_d7187ebff85831dd00deaa3e0cc" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "file" ADD CONSTRAINT "FK_2d41e5f62571965a6ed522d665f" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "file" DROP CONSTRAINT "FK_2d41e5f62571965a6ed522d665f"`);
        await queryRunner.query(`ALTER TABLE "file" DROP CONSTRAINT "FK_d7187ebff85831dd00deaa3e0cc"`);
        await queryRunner.query(`ALTER TABLE "file" DROP CONSTRAINT "FK_e1b1af341c80fafd98f699c50b6"`);
        await queryRunner.query(`DROP TABLE "file"`);
        await queryRunner.query(`DROP TYPE "public"."file_type_enum"`);
    }
}
exports.Filetype1692572273075 = Filetype1692572273075;
//# sourceMappingURL=1692572273075-filetype.js.map