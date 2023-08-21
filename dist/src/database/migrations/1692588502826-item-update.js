"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdate1692588502826 = void 0;
class ItemUpdate1692588502826 {
    constructor() {
        this.name = 'ItemUpdate1692588502826';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "item" ADD "projectQuantity" integer`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "projectQuantity"`);
    }
}
exports.ItemUpdate1692588502826 = ItemUpdate1692588502826;
//# sourceMappingURL=1692588502826-item-update.js.map