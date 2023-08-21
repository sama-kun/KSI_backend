"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchXxxDto = void 0;
const search_query_dto_1 = require("../../../common/base/dto/search-query.dto");
const xxx_entity_1 = require("@/database/entities/xxx.entity");
const swagger_1 = require("@nestjs/swagger");
class SearchXxxDto extends (0, swagger_1.PartialType)((0, swagger_1.IntersectionType)(xxx_entity_1.XxxEntity, search_query_dto_1.SearchQueryDto)) {
}
exports.SearchXxxDto = SearchXxxDto;
//# sourceMappingURL=search-xxx.dto.js.map