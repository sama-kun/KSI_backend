"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchMaintenanceDto = void 0;
const search_query_dto_1 = require("../../../common/base/dto/search-query.dto");
const maintenance_entity_1 = require("../../../database/entities/maintenance.entity");
const swagger_1 = require("@nestjs/swagger");
class SearchMaintenanceDto extends (0, swagger_1.PartialType)((0, swagger_1.IntersectionType)(maintenance_entity_1.MaintenanceEntity, search_query_dto_1.SearchQueryDto)) {
}
exports.SearchMaintenanceDto = SearchMaintenanceDto;
//# sourceMappingURL=search-maintenance.dto.js.map