"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchCategoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const search_query_dto_1 = require("../../../common/base/dto/search-query.dto");
const category_entity_1 = require("../../../database/entities/category.entity");
class SearchCategoryDto extends (0, swagger_1.PartialType)((0, swagger_1.IntersectionType)(category_entity_1.CategoryEntity, search_query_dto_1.SearchQueryDto)) {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: category_entity_1.CategoryEntity }),
    __metadata("design:type", Object)
], SearchCategoryDto.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: category_entity_1.CategoryEntity }),
    __metadata("design:type", Object)
], SearchCategoryDto.prototype, "filter", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: category_entity_1.CategoryEntity }),
    __metadata("design:type", Object)
], SearchCategoryDto.prototype, "search", void 0);
exports.SearchCategoryDto = SearchCategoryDto;
//# sourceMappingURL=search-category.dto.js.map