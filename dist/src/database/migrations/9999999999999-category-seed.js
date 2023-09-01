"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesSeed9999999999999 = void 0;
const category_seed_json_1 = __importDefault(require("../seeds/category-seed.json"));
const category_entity_1 = require("../entities/category.entity");
class CategoriesSeed9999999999999 {
    constructor() {
        this.name = 'CategoriesSeed9999999999999';
    }
    async up(queryRunner) {
        if (queryRunner.isTransactionActive)
            await queryRunner.commitTransaction();
        for (const category of category_seed_json_1.default) {
            await queryRunner.manager.insert(category_entity_1.CategoryEntity, { name: category });
        }
        await queryRunner.startTransaction();
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM "category"`);
    }
}
exports.CategoriesSeed9999999999999 = CategoriesSeed9999999999999;
//# sourceMappingURL=9999999999999-category-seed.js.map