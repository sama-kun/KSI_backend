"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMaintenanceDto = void 0;
const create_maintenance_dto_1 = require("./create-maintenance.dto");
const swagger_1 = require("@nestjs/swagger");
class UpdateMaintenanceDto extends (0, swagger_1.PartialType)(create_maintenance_dto_1.CreateMaintenanceDto) {
}
exports.UpdateMaintenanceDto = UpdateMaintenanceDto;
//# sourceMappingURL=update-maintenance.dto.js.map