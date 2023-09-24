"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCartItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const cart_item_entity_1 = require("../../../database/entities/cart-item.entity");
class CreateCartItemDto extends (0, swagger_1.PartialType)(cart_item_entity_1.CartItemEntity) {
}
exports.CreateCartItemDto = CreateCartItemDto;
//# sourceMappingURL=create-cart-item.dto.js.map