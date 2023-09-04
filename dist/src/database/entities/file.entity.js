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
exports.FileEntity = void 0;
const typeorm_1 = require("typeorm");
const item_entity_1 = require("./item.entity");
const BaseModel_1 = require("../../common/base/BaseModel");
const enums_1 = require("../../interfaces/enums");
const swagger_1 = require("@nestjs/swagger");
let FileEntity = class FileEntity extends BaseModel_1.BaseModel {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], FileEntity.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], FileEntity.prototype, "secure_url", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], FileEntity.prototype, "asset_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], FileEntity.prototype, "public_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], FileEntity.prototype, "folder", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => item_entity_1.ItemEntity, (item) => item.images),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, swagger_1.ApiProperty)({
        example: 'pdf',
        description: 'The formats of tghe file',
        enum: enums_1.FileTypesEnum,
    }),
    __metadata("design:type", Object)
], FileEntity.prototype, "item", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: enums_1.FileTypesEnum, default: enums_1.FileTypesEnum.IMAGE }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], FileEntity.prototype, "type", void 0);
FileEntity = __decorate([
    (0, typeorm_1.Entity)('file')
], FileEntity);
exports.FileEntity = FileEntity;
//# sourceMappingURL=file.entity.js.map