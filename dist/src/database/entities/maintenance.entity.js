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
exports.MaintenanceEntity = void 0;
const BaseModel_1 = require("../../common/base/BaseModel");
const typeorm_1 = require("typeorm");
const item_entity_1 = require("./item.entity");
const main_file_entity_1 = require("./main-file.entity");
const user_entity_1 = require("./user.entity");
let MaintenanceEntity = class MaintenanceEntity extends BaseModel_1.BaseModel {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => item_entity_1.ItemEntity, (item) => item.maintenances),
    __metadata("design:type", item_entity_1.ItemEntity)
], MaintenanceEntity.prototype, "item", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => main_file_entity_1.MainFileEntity, (mainFile) => mainFile.maintenance),
    __metadata("design:type", Array)
], MaintenanceEntity.prototype, "mainFiles", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.maintenances, { nullable: true }),
    __metadata("design:type", user_entity_1.UserEntity)
], MaintenanceEntity.prototype, "checker", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], MaintenanceEntity.prototype, "checkDate", void 0);
MaintenanceEntity = __decorate([
    (0, typeorm_1.Entity)('maintenance')
], MaintenanceEntity);
exports.MaintenanceEntity = MaintenanceEntity;
//# sourceMappingURL=maintenance.entity.js.map