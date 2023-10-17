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
exports.ItemGroupEntity = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./category.entity");
const file_entity_1 = require("./file.entity");
const BaseModel_1 = require("../../common/base/BaseModel");
const swagger_1 = require("@nestjs/swagger");
const item_entity_1 = require("./item.entity");
const cart_item_entity_1 = require("./cart-item.entity");
let ItemGroupEntity = class ItemGroupEntity extends BaseModel_1.BaseModel {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ItemGroupEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ItemGroupEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.CategoryEntity, (category) => category.itemGroups),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], ItemGroupEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ItemGroupEntity.prototype, "tag", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], ItemGroupEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => file_entity_1.FileEntity, (image) => image.itemGroup),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Array)
], ItemGroupEntity.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 0 }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], ItemGroupEntity.prototype, "projectQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], ItemGroupEntity.prototype, "totalQuantity", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => item_entity_1.ItemEntity, (item) => item.itemGroup),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Array)
], ItemGroupEntity.prototype, "items", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_item_entity_1.CartItemEntity, (cartItem) => cartItem.itemGroup),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Array)
], ItemGroupEntity.prototype, "cartItems", void 0);
ItemGroupEntity = __decorate([
    (0, typeorm_1.Entity)('item-group')
], ItemGroupEntity);
exports.ItemGroupEntity = ItemGroupEntity;
//# sourceMappingURL=item-group.entity.js.map