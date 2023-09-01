"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alotof1693609169911 = void 0;
class Alotof1693609169911 {
    constructor() {
        this.name = 'Alotof1693609169911';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "original"`);
        await queryRunner.query(`ALTER TABLE "file" ADD "url" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "file" ADD "secure_url" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "file" ADD "asset_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "file" ADD "public_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "file" ADD "folder" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "folder"`);
        await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "public_id"`);
        await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "asset_id"`);
        await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "secure_url"`);
        await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "url"`);
        await queryRunner.query(`ALTER TABLE "file" ADD "original" character varying NOT NULL`);
    }
}
exports.Alotof1693609169911 = Alotof1693609169911;
//# sourceMappingURL=1693609169911-alotof.js.map