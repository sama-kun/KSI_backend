"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjectDto = void 0;
const project_entity_1 = require("../../../database/entities/project.entity");
const swagger_1 = require("@nestjs/swagger");
class CreateProjectDto extends (0, swagger_1.PartialType)(project_entity_1.ProjectEntity) {
}
exports.CreateProjectDto = CreateProjectDto;
//# sourceMappingURL=create-project.dto.js.map