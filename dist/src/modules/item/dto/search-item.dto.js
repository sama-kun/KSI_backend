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
exports.SearchItemDto = void 0;
const search_query_dto_1 = require("../../../common/base/dto/search-query.dto");
const item_entity_1 = require("../../../database/entities/item.entity");
const swagger_1 = require("@nestjs/swagger");
class SearchItemDto extends (0, swagger_1.PartialType)((0, swagger_1.IntersectionType)(item_entity_1.ItemEntity, search_query_dto_1.SearchQueryDto)) {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: item_entity_1.ItemEntity }),
    __metadata("design:type", Object)
], SearchItemDto.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: item_entity_1.ItemEntity }),
    __metadata("design:type", Object)
], SearchItemDto.prototype, "filter", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: item_entity_1.ItemEntity }),
    __metadata("design:type", Object)
], SearchItemDto.prototype, "search", void 0);
exports.SearchItemDto = SearchItemDto;
//# sourceMappingURL=search-item.dto.js.map