"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMaintenanceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const maintenance_entity_1 = require("../../../database/entities/maintenance.entity");
class CreateMaintenanceDto extends (0, swagger_1.PartialType)(maintenance_entity_1.MaintenanceEntity) {
}
exports.CreateMaintenanceDto = CreateMaintenanceDto;
//# sourceMappingURL=create-maintenance.dto.js.map