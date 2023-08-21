"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchCategoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const search_query_dto_1 = require("../../../common/base/dto/search-query.dto");
const category_entity_1 = require("../../../database/entities/category.entity");
class SearchCategoryDto extends (0, swagger_1.PartialType)((0, swagger_1.IntersectionType)(category_entity_1.CategoryEntity, search_query_dto_1.SearchQueryDto)) {
}
exports.SearchCategoryDto = SearchCategoryDto;
//# sourceMappingURL=search-category.dto.js.map