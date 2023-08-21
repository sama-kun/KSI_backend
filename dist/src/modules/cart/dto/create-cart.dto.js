"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCartDto = void 0;
const cart_entity_1 = require("../../../database/entities/cart.entity");
const swagger_1 = require("@nestjs/swagger");
class CreateCartDto extends (0, swagger_1.PartialType)(cart_entity_1.CartEntity) {
}
exports.CreateCartDto = CreateCartDto;
//# sourceMappingURL=create-cart.dto.js.map