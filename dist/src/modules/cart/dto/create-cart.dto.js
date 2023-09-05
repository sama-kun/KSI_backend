"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCartDto = void 0;
const cart_item_entity_1 = require("../../../database/entities/cart-item.entity");
const swagger_1 = require("@nestjs/swagger");
class CreateCartDto extends (0, swagger_1.PartialType)(cart_item_entity_1.CartItemEntity) {
}
exports.CreateCartDto = CreateCartDto;
//# sourceMappingURL=create-cart.dto.js.map