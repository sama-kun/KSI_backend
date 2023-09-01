"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceModule = void 0;
const common_1 = require("@nestjs/common");
const maintenance_service_1 = require("./maintenance.service");
const typeorm_1 = require("@nestjs/typeorm");
const maintenance_entity_1 = require("../../database/entities/maintenance.entity");
const maintenance_controller_1 = require("./maintenance.controller");
const main_file_entity_1 = require("../../database/entities/main-file.entity");
const jwt_1 = require("@nestjs/jwt");
let MaintenanceModule = class MaintenanceModule {
};
MaintenanceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([maintenance_entity_1.MaintenanceEntity, main_file_entity_1.MainFileEntity]),
            jwt_1.JwtModule,
        ],
        providers: [maintenance_service_1.MaintenanceService],
        controllers: [maintenance_controller_1.MaintenanceController],
    })
], MaintenanceModule);
exports.MaintenanceModule = MaintenanceModule;
//# sourceMappingURL=maintenance.module.js.map