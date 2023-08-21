"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchItemDto = void 0;
const search_query_dto_1 = require("../../../common/base/dto/search-query.dto");
const swagger_1 = require("@nestjs/swagger");
class SearchItemDto extends (0, swagger_1.PartialType)(search_query_dto_1.SearchQueryDto) {
}
exports.SearchItemDto = SearchItemDto;
//# sourceMappingURL=search-item.dto.js.map