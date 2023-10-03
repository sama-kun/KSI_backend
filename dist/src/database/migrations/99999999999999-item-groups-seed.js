"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemGroupsSeed99999999999999 = void 0;
const item_groups_seed_json_1 = require("../seeds/item-groups-seed.json");
const category_seed_json_1 = __importDefault(require("../seeds/category-seed.json"));
const item_group_entity_1 = require("../entities/item-group.entity");
const test_seed_1 = require("../seeds/test.seed");
const item_entity_1 = require("../entities/item.entity");
class ItemGroupsSeed99999999999999 {
    constructor() {
        this.name = 'ItemGroupsSeed99999999999999';
    }
    async up(queryRunner) {
        if (queryRunner.isTransactionActive)
            await queryRunner.commitTransaction();
        const data = [];
        for (const itemGroup of item_groups_seed_json_1.itemGroups) {
            const index = category_seed_json_1.default.findIndex((el) => el === itemGroup.categoryName);
            if (!itemGroup.categoryName) {
                await queryRunner.manager.insert(item_group_entity_1.ItemGroupEntity, Object.assign(Object.assign({}, itemGroup), { category: { id: 46 } }));
            }
            await queryRunner.manager.insert(item_group_entity_1.ItemGroupEntity, Object.assign(Object.assign({}, itemGroup), { category: { id: index + 1 } }));
        }
        for (let i = 1; i <= item_groups_seed_json_1.itemGroups.length; i++) {
            for (const item of test_seed_1.items) {
                await queryRunner.manager.insert(item_entity_1.ItemEntity, {
                    uuid: item,
                    itemGroup: { id: i },
                });
            }
        }
        await queryRunner.startTransaction();
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM "item-group"`);
    }
}
exports.ItemGroupsSeed99999999999999 = ItemGroupsSeed99999999999999;
//# sourceMappingURL=99999999999999-item-groups-seed.js.map