"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModule = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const jwt_1 = require("@nestjs/jwt");
const cart_controller_1 = require("./cart.controller");
const item_group_module_1 = require("../item-group/item-group.module");
const typeorm_1 = require("@nestjs/typeorm");
const cart_item_entity_1 = require("../../database/entities/cart-item.entity");
const cart_item_module_1 = require("../cart-item/cart-item.module");
let CartModule = class CartModule {
};
CartModule = __decorate([
    (0, common_1.Module)({
        controllers: [cart_controller_1.CartController],
        providers: [cart_service_1.CartService, item_group_module_1.ItemGroupModule],
        imports: [
            jwt_1.JwtModule,
            cart_item_module_1.CartItemModule,
            typeorm_1.TypeOrmModule.forFeature([cart_item_entity_1.CartItemEntity]),
        ],
        exports: [cart_service_1.CartService],
    })
], CartModule);
exports.CartModule = CartModule;
//# sourceMappingURL=cart.module.js.map