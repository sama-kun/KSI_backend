"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemModule = void 0;
const common_1 = require("@nestjs/common");
const cart_item_service_1 = require("./cart-item.service");
const typeorm_1 = require("@nestjs/typeorm");
const cart_item_entity_1 = require("../../database/entities/cart-item.entity");
const cart_item_controller_1 = require("./cart-item.controller");
const jwt_1 = require("@nestjs/jwt");
const item_group_module_1 = require("../item-group/item-group.module");
const item_module_1 = require("../item/item.module");
let CartItemModule = class CartItemModule {
};
CartItemModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([cart_item_entity_1.CartItemEntity]),
            jwt_1.JwtModule,
            item_group_module_1.ItemGroupModule,
            item_module_1.ItemModule,
        ],
        providers: [cart_item_service_1.CartItemService],
        controllers: [cart_item_controller_1.CartItemController],
        exports: [cart_item_service_1.CartItemService],
    })
], CartItemModule);
exports.CartItemModule = CartItemModule;
//# sourceMappingURL=cart-item.module.js.map