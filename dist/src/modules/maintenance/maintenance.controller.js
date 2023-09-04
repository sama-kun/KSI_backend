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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceController = void 0;
const common_1 = require("@nestjs/common");
const maintenance_service_1 = require("./maintenance.service");
const BaseController_1 = require("../../common/base/BaseController");
const maintenance_entity_1 = require("../../database/entities/maintenance.entity");
const search_maintenance_dto_1 = require("./dto/search-maintenance.dto");
const roles_quard_1 = require("../../common/guards/roles.quard");
const enums_1 = require("../../interfaces/enums");
const roles_auth_decorator_1 = require("../../common/decorators/roles-auth.decorator");
const auth_user_decorator_1 = require("../../common/decorators/auth-user.decorator");
const user_entity_1 = require("../../database/entities/user.entity");
const main_file_entity_1 = require("../../database/entities/main-file.entity");
const swagger_1 = require("@nestjs/swagger");
let MaintenanceController = class MaintenanceController extends BaseController_1.BaseController {
    constructor(dataService) {
        super();
        this.dataService = dataService;
    }
    createCustom(user, data) {
        return this.dataService.create(data, user);
    }
    getOne(id, query) {
        const { relations } = query;
        return this.dataService.findById(id, relations);
    }
    update(user, id, data) {
        return this.dataService.update(user, id, data);
    }
    delete(user, id) {
        return this.dataService.delete(user, id);
    }
    addFile(data, id) {
        return this.dataService.addFile(id, data);
    }
    findAll(query) {
        const { pagination, sort, relations, filter, search } = query;
        return this.dataService.findAll(pagination, sort, relations, filter, search);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create' }),
    (0, swagger_1.ApiBody)({ type: maintenance_entity_1.MaintenanceEntity }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: maintenance_entity_1.MaintenanceEntity,
        description: 'Maintenance created successfully',
    }),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, maintenance_entity_1.MaintenanceEntity]),
    __metadata("design:returntype", void 0)
], MaintenanceController.prototype, "createCustom", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Maintenance ID' }),
    (0, swagger_1.ApiOperation)({ summary: 'Get Maintenance by id' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: maintenance_entity_1.MaintenanceEntity,
        description: 'Maintenance created successfully',
    }),
    (0, swagger_1.ApiQuery)({ name: 'relations', required: false, type: Array }),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, search_maintenance_dto_1.SearchMaintenanceDto]),
    __metadata("design:returntype", void 0)
], MaintenanceController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update Maintenance' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: maintenance_entity_1.MaintenanceEntity,
        description: 'Maintenance updated successfully',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Maintenance ID' }),
    (0, swagger_1.ApiBody)({ type: maintenance_entity_1.MaintenanceEntity }),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    (0, common_1.Patch)(':id'),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, maintenance_entity_1.MaintenanceEntity]),
    __metadata("design:returntype", void 0)
], MaintenanceController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Maintenance ID' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", void 0)
], MaintenanceController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Maintenance ID' }),
    (0, swagger_1.ApiBody)({ type: main_file_entity_1.MainFileEntity }),
    (0, common_1.Post)(':id/addfile'),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [main_file_entity_1.MainFileEntity, Number]),
    __metadata("design:returntype", void 0)
], MaintenanceController.prototype, "addFile", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all Maintenances using query' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiQuery)({ type: search_maintenance_dto_1.SearchMaintenanceDto }),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_maintenance_dto_1.SearchMaintenanceDto]),
    __metadata("design:returntype", void 0)
], MaintenanceController.prototype, "findAll", null);
MaintenanceController = __decorate([
    (0, swagger_1.ApiTags)('Maintenance'),
    (0, common_1.Controller)('maintenance'),
    __metadata("design:paramtypes", [maintenance_service_1.MaintenanceService])
], MaintenanceController);
exports.MaintenanceController = MaintenanceController;
//# sourceMappingURL=maintenance.controller.js.map