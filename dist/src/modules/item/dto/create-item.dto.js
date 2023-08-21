"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateItemDto = void 0;
const item_entity_1 = require("../../../database/entities/item.entity");
const swagger_1 = require("@nestjs/swagger");
class CreateItemDto extends (0, swagger_1.PartialType)(item_entity_1.ItemEntity) {
}
exports.CreateItemDto = CreateItemDto;
//# sourceMappingURL=create-item.dto.js.map