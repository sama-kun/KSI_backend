"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartEntity = void 0;
const BaseModel_1 = require("../../common/base/BaseModel");
const enums_1 = require("../../interfaces/enums");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const project_entity_1 = require("./project.entity");
const cart_item_entity_1 = require("./cart-item.entity");
const user_entity_1 = require("./user.entity");
let CartEntity = class CartEntity extends BaseModel_1.BaseModel {
};
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_item_entity_1.CartItemEntity, (cartItem) => cartItem.cart),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Array)
], CartEntity.prototype, "cartItems", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_entity_1.ProjectEntity, (project) => project.carts),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", project_entity_1.ProjectEntity)
], CartEntity.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', nullable: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Date)
], CartEntity.prototype, "returnTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], CartEntity.prototype, "returnBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: enums_1.CartStatusEnum.OnProject }),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Warning',
        description: 'The status of the cart',
        enum: enums_1.CartStatusEnum,
    }),
    __metadata("design:type", String)
], CartEntity.prototype, "status", void 0);
CartEntity = __decorate([
    (0, typeorm_1.Entity)('cart')
], CartEntity);
exports.CartEntity = CartEntity;
//# sourceMappingURL=cart.entity.js.map