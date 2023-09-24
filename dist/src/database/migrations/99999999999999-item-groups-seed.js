"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemGroupsSeed99999999999999 = void 0;
const item_groups_seed_json_1 = require("../seeds/item-groups-seed.json");
const category_seed_json_1 = __importDefault(require("../seeds/category-seed.json"));
const item_group_entity_1 = require("../entities/item-group.entity");
class ItemGroupsSeed99999999999999 {
    constructor() {
        this.name = 'ItemGroupsSeed99999999999999';
    }
    async up(queryRunner) {
        if (queryRunner.isTransactionActive)
            await queryRunner.commitTransaction();
        for (const item of item_groups_seed_json_1.itemGroups) {
            const index = category_seed_json_1.default.findIndex((el) => el === item.categoryName);
            if (!item.categoryName) {
                await queryRunner.manager.insert(item_group_entity_1.ItemGroupEntity, Object.assign(Object.assign({}, item), { category: { id: 46 } }));
            }
            await queryRunner.manager.insert(item_group_entity_1.ItemGroupEntity, Object.assign(Object.assign({}, item), { category: { id: index + 1 } }));
        }
        await queryRunner.startTransaction();
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM "item-group"`);
    }
}
exports.ItemGroupsSeed99999999999999 = ItemGroupsSeed99999999999999;
//# sourceMappingURL=99999999999999-item-groups-seed.js.map