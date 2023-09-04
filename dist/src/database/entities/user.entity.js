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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const enums_1 = require("../../interfaces/enums");
const cart_entity_1 = require("./cart.entity");
const BaseModel_1 = require("../../common/base/BaseModel");
const maintenance_entity_1 = require("./maintenance.entity");
const swagger_1 = require("@nestjs/swagger");
let UserEntity = class UserEntity extends BaseModel_1.BaseModel {
};
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: enums_1.RoleEnum, default: enums_1.RoleEnum.USER }),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, swagger_1.ApiProperty)({
        example: 'user',
        description: 'The role of the user',
        enum: enums_1.RoleEnum,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_entity_1.CartEntity, (cart) => cart.createdBy),
    (0, swagger_1.ApiPropertyOptional)({ type: () => cart_entity_1.CartEntity, isArray: true }),
    __metadata("design:type", Array)
], UserEntity.prototype, "carts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => maintenance_entity_1.MaintenanceEntity, (maintenance) => maintenance.checker),
    (0, swagger_1.ApiPropertyOptional)({ type: () => maintenance_entity_1.MaintenanceEntity, isArray: true }),
    __metadata("design:type", Array)
], UserEntity.prototype, "maintenances", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)('user')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map