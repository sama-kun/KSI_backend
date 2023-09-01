"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsSeed99999999999999 = void 0;
const item_seed_json_1 = require("../seeds/item-seed.json");
const category_seed_json_1 = __importDefault(require("../seeds/category-seed.json"));
const item_entity_1 = require("../entities/item.entity");
class ItemsSeed99999999999999 {
    constructor() {
        this.name = 'ItemsSeed99999999999999';
    }
    async up(queryRunner) {
        if (queryRunner.isTransactionActive)
            await queryRunner.commitTransaction();
        for (const item of item_seed_json_1.items) {
            const index = category_seed_json_1.default.findIndex((el) => el === item.categoryName);
            if (!item.categoryName) {
                await queryRunner.manager.insert(item_entity_1.ItemEntity, Object.assign(Object.assign({}, item), { category: { id: 46 } }));
            }
            await queryRunner.manager.insert(item_entity_1.ItemEntity, Object.assign(Object.assign({}, item), { category: { id: index + 1 } }));
        }
        await queryRunner.startTransaction();
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM "item"`);
    }
}
exports.ItemsSeed99999999999999 = ItemsSeed99999999999999;
//# sourceMappingURL=99999999999999-item-seed.js.map