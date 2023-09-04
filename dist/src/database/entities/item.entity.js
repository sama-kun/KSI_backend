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
exports.ItemEntity = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./category.entity");
const file_entity_1 = require("./file.entity");
const cart_entity_1 = require("./cart.entity");
const BaseModel_1 = require("../../common/base/BaseModel");
const maintenance_entity_1 = require("./maintenance.entity");
const swagger_1 = require("@nestjs/swagger");
let ItemEntity = class ItemEntity extends BaseModel_1.BaseModel {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ItemEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ItemEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.CategoryEntity, (category) => category.items),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", category_entity_1.CategoryEntity)
], ItemEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ItemEntity.prototype, "tag", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], ItemEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => file_entity_1.FileEntity, (image) => image.item),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Array)
], ItemEntity.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_entity_1.CartEntity, (cart) => cart.item),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Array)
], ItemEntity.prototype, "carts", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 0 }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], ItemEntity.prototype, "projectQuantity", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => maintenance_entity_1.MaintenanceEntity, (main) => main.item),
    (0, swagger_1.ApiPropertyOptional)({ type: () => maintenance_entity_1.MaintenanceEntity, isArray: true }),
    __metadata("design:type", Array)
], ItemEntity.prototype, "maintenances", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], ItemEntity.prototype, "totalQuantity", void 0);
ItemEntity = __decorate([
    (0, typeorm_1.Entity)('item')
], ItemEntity);
exports.ItemEntity = ItemEntity;
//# sourceMappingURL=item.entity.js.map