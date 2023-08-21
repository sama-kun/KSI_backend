"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchCartDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const search_query_dto_1 = require("../../../common/base/dto/search-query.dto");
const cart_entity_1 = require("../../../database/entities/cart.entity");
class SearchCartDto extends (0, swagger_1.PartialType)((0, swagger_1.IntersectionType)(cart_entity_1.CartEntity, search_query_dto_1.SearchQueryDto)) {
}
exports.SearchCartDto = SearchCartDto;
//# sourceMappingURL=search-cart.dto.js.map