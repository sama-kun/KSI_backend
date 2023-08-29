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
const typeorm_1 = require("typeorm");
const item_entity_1 = require("./item.entity");
const project_entity_1 = require("./project.entity");
const enums_1 = require("../../interfaces/enums");
const BaseModel_1 = require("../../common/base/BaseModel");
let CartEntity = class CartEntity extends BaseModel_1.BaseModel {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CartEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CartEntity.prototype, "initialQuantity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => item_entity_1.ItemEntity, (item) => item.carts),
    __metadata("design:type", item_entity_1.ItemEntity)
], CartEntity.prototype, "item", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_entity_1.ProjectEntity, (project) => project.carts, {
        nullable: true,
    }),
    __metadata("design:type", project_entity_1.ProjectEntity)
], CartEntity.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], CartEntity.prototype, "isHistory", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CartEntity.prototype, "workingHours", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], CartEntity.prototype, "returnTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CartEntity.prototype, "workedHouse", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: enums_1.CartStatusEnum.OnProject }),
    __metadata("design:type", String)
], CartEntity.prototype, "status", void 0);
CartEntity = __decorate([
    (0, typeorm_1.Entity)('cart')
], CartEntity);
exports.CartEntity = CartEntity;
//# sourceMappingURL=cart.entity.js.map