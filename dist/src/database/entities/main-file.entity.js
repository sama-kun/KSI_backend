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
exports.MainFileEntity = void 0;
const enums_1 = require("../../interfaces/enums");
const typeorm_1 = require("typeorm");
const file_entity_1 = require("./file.entity");
const maintenance_entity_1 = require("./maintenance.entity");
const swagger_1 = require("@nestjs/swagger");
let MainFileEntity = class MainFileEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MainFileEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enums_1.MainFileTypesEnum,
        default: enums_1.MainFileTypesEnum.main,
    }),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, swagger_1.ApiProperty)({
        example: 'main',
        description: 'the types of the reports',
        enum: enums_1.MainFileTypesEnum,
    }),
    __metadata("design:type", String)
], MainFileEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => file_entity_1.FileEntity),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", file_entity_1.FileEntity)
], MainFileEntity.prototype, "file", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, typeorm_1.ManyToOne)(() => maintenance_entity_1.MaintenanceEntity, (maintenance) => maintenance.mainFiles),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Object)
], MainFileEntity.prototype, "maintenance", void 0);
MainFileEntity = __decorate([
    (0, typeorm_1.Entity)('main-file')
], MainFileEntity);
exports.MainFileEntity = MainFileEntity;
//# sourceMappingURL=main-file.entity.js.map