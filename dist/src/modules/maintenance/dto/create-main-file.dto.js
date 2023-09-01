"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMainFileDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const main_file_entity_1 = require("../../../database/entities/main-file.entity");
class CreateMainFileDto extends (0, swagger_1.PartialType)(main_file_entity_1.MainFileEntity) {
}
exports.CreateMainFileDto = CreateMainFileDto;
//# sourceMappingURL=create-main-file.dto.js.map