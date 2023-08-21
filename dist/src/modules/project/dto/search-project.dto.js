"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchProjectDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const search_query_dto_1 = require("../../../common/base/dto/search-query.dto");
const project_entity_1 = require("../../../database/entities/project.entity");
class SearchProjectDto extends (0, swagger_1.PartialType)((0, swagger_1.IntersectionType)(project_entity_1.ProjectEntity, search_query_dto_1.SearchQueryDto)) {
}
exports.SearchProjectDto = SearchProjectDto;
//# sourceMappingURL=search-project.dto.js.map