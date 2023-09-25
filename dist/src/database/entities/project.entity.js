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
exports.ProjectEntity = void 0;
const typeorm_1 = require("typeorm");
const BaseModel_1 = require("../../common/base/BaseModel");
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../interfaces/enums");
const cart_entity_1 = require("./cart.entity");
let ProjectEntity = class ProjectEntity extends BaseModel_1.BaseModel {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ProjectEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ProjectEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => cart_entity_1.CartEntity, (cart) => cart.project),
    (0, swagger_1.ApiPropertyOptional)({ type: () => cart_entity_1.CartEntity }),
    __metadata("design:type", cart_entity_1.CartEntity)
], ProjectEntity.prototype, "cart", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enums_1.ProjectStatusEnum,
        default: enums_1.ProjectStatusEnum.detailing,
    }),
    (0, swagger_1.ApiProperty)({
        example: 'active',
        description: 'Status of the Project',
        enum: enums_1.ProjectStatusEnum,
    }),
    __metadata("design:type", String)
], ProjectEntity.prototype, "status", void 0);
ProjectEntity = __decorate([
    (0, typeorm_1.Entity)('project')
], ProjectEntity);
exports.ProjectEntity = ProjectEntity;
//# sourceMappingURL=project.entity.js.map