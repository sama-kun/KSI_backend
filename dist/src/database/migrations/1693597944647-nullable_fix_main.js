"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableFixMain1693597944647 = void 0;
class NullableFixMain1693597944647 {
    constructor() {
        this.name = 'NullableFixMain1693597944647';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "maintenance" ALTER COLUMN "checkDate" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "maintenance" ALTER COLUMN "checkDate" SET NOT NULL`);
    }
}
exports.NullableFixMain1693597944647 = NullableFixMain1693597944647;
//# sourceMappingURL=1693597944647-nullable_fix_main.js.map