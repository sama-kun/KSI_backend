"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statuses1693903590150 = void 0;
class Statuses1693903590150 {
    constructor() {
        this.name = 'Statuses1693903590150';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."maintenance_type_enum" AS ENUM('corrective', 'preventive')`);
        await queryRunner.query(`ALTER TABLE "maintenance" ADD "type" "public"."maintenance_type_enum" NOT NULL DEFAULT 'corrective'`);
        await queryRunner.query(`CREATE TYPE "public"."item_status_enum" AS ENUM('warinig', 'ok')`);
        await queryRunner.query(`ALTER TABLE "item" ADD "status" "public"."item_status_enum" NOT NULL DEFAULT 'ok'`);
        await queryRunner.query(`ALTER TABLE "cart-item" ALTER COLUMN "status" SET DEFAULT 'InCart'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "cart-item" ALTER COLUMN "status" SET DEFAULT 'OnProject'`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."item_status_enum"`);
        await queryRunner.query(`ALTER TABLE "maintenance" DROP COLUMN "type"`);
        await queryRunner.query(`DROP TYPE "public"."maintenance_type_enum"`);
    }
}
exports.Statuses1693903590150 = Statuses1693903590150;
//# sourceMappingURL=1693903590150-statuses.js.map