"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchFileDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const search_query_dto_1 = require("../../../common/base/dto/search-query.dto");
const file_entity_1 = require("../../../database/entities/file.entity");
class SearchFileDto extends (0, swagger_1.PartialType)((0, swagger_1.IntersectionType)(file_entity_1.FileEntity, search_query_dto_1.SearchQueryDto)) {
}
exports.SearchFileDto = SearchFileDto;
//# sourceMappingURL=search-file.dto.js.map