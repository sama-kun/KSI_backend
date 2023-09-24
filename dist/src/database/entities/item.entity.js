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
const BaseModel_1 = require("../../common/base/BaseModel");
const enums_1 = require("../../interfaces/enums");
const typeorm_1 = require("typeorm");
const item_group_entity_1 = require("./item-group.entity");
const maintenance_entity_1 = require("./maintenance.entity");
const swagger_1 = require("@nestjs/swagger");
const cart_item_entity_1 = require("./cart-item.entity");
let ItemEntity = class ItemEntity extends BaseModel_1.BaseModel {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ItemEntity.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: enums_1.ItemStatusEnum, default: enums_1.ItemStatusEnum.ok }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ItemEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => item_group_entity_1.ItemGroupEntity, (itemGroup) => itemGroup.items),
    (0, typeorm_1.JoinColumn)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], ItemEntity.prototype, "itemGroup", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => maintenance_entity_1.MaintenanceEntity, (main) => main.item),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Array)
], ItemEntity.prototype, "maintenances", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], ItemEntity.prototype, "workingHours", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], ItemEntity.prototype, "workedHours", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => cart_item_entity_1.CartItemEntity, (cartItem) => cartItem.items),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], ItemEntity.prototype, "cartItems", void 0);
ItemEntity = __decorate([
    (0, typeorm_1.Entity)('item')
], ItemEntity);
exports.ItemEntity = ItemEntity;
//# sourceMappingURL=item.entity.js.map