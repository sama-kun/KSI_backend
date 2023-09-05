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
exports.CartItemEntity = void 0;
const typeorm_1 = require("typeorm");
const item_entity_1 = require("./item.entity");
const project_entity_1 = require("./project.entity");
const enums_1 = require("../../interfaces/enums");
const BaseModel_1 = require("../../common/base/BaseModel");
const swagger_1 = require("@nestjs/swagger");
let CartItemEntity = class CartItemEntity extends BaseModel_1.BaseModel {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], CartItemEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], CartItemEntity.prototype, "initialQuantity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => item_entity_1.ItemEntity, (item) => item.carts),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", item_entity_1.ItemEntity)
], CartItemEntity.prototype, "item", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_entity_1.ProjectEntity, (project) => project.carts, {
        nullable: true,
    }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", project_entity_1.ProjectEntity)
], CartItemEntity.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Boolean)
], CartItemEntity.prototype, "isHistory", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', nullable: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Date)
], CartItemEntity.prototype, "returnTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], CartItemEntity.prototype, "workedHours", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: enums_1.CartStatusEnum.InCart }),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, swagger_1.ApiProperty)({
        example: 'Warning',
        description: 'The status of the cart',
        enum: enums_1.CartStatusEnum,
    }),
    __metadata("design:type", String)
], CartItemEntity.prototype, "status", void 0);
CartItemEntity = __decorate([
    (0, typeorm_1.Entity)('cart-item')
], CartItemEntity);
exports.CartItemEntity = CartItemEntity;
//# sourceMappingURL=cart-item.entity.js.map