"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryDto = void 0;
const category_entity_1 = require("../../../database/entities/category.entity");
const swagger_1 = require("@nestjs/swagger");
class CreateCategoryDto extends (0, swagger_1.PartialType)(category_entity_1.CategoryEntity) {
}
exports.CreateCategoryDto = CreateCategoryDto;
//# sourceMappingURL=create-category.dto.js.map