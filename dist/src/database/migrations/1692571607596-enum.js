"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum1692571607596 = void 0;
class Enum1692571607596 {
    constructor() {
        this.name = 'Enum1692571607596';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('user', 'admin', 'root')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "role" "public"."user_role_enum" NOT NULL DEFAULT 'user'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "role" integer NOT NULL DEFAULT '0'`);
    }
}
exports.Enum1692571607596 = Enum1692571607596;
//# sourceMappingURL=1692571607596-enum.js.map