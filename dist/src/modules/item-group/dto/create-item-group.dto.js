"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateItemGroupDto = void 0;
const item_group_entity_1 = require("../../../database/entities/item-group.entity");
const swagger_1 = require("@nestjs/swagger");
class CreateItemGroupDto extends (0, swagger_1.PartialType)(item_group_entity_1.ItemGroupEntity) {
}
exports.CreateItemGroupDto = CreateItemGroupDto;
//# sourceMappingURL=create-item-group.dto.js.map