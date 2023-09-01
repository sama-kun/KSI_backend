"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemTotalQuantity1693592089293 = void 0;
class ItemTotalQuantity1693592089293 {
    constructor() {
        this.name = 'ItemTotalQuantity1693592089293';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "item" ADD "totalQuantity" integer`);
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "projectQuantity" SET DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "projectQuantity" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "totalQuantity"`);
    }
}
exports.ItemTotalQuantity1693592089293 = ItemTotalQuantity1693592089293;
//# sourceMappingURL=1693592089293-item_totalQuantity.js.map