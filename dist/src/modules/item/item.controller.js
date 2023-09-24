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
exports.ItemController = void 0;
const common_1 = require("@nestjs/common");
const item_service_1 = require("./item.service");
const BaseController_1 = require("../../common/base/BaseController");
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../interfaces/enums");
const auth_user_decorator_1 = require("../../common/decorators/auth-user.decorator");
const user_entity_1 = require("../../database/entities/user.entity");
const item_entity_1 = require("../../database/entities/item.entity");
const search_item_dto_1 = require("./dto/search-item.dto");
const roles_quard_1 = require("../../common/guards/roles.quard");
const roles_auth_decorator_1 = require("../../common/decorators/roles-auth.decorator");
let ItemController = class ItemController extends BaseController_1.BaseController {
    constructor(dataService) {
        super();
        this.dataService = dataService;
    }
    fillWorkedHours(id, body) {
        return this.dataService.updateWorkedHours(id, body.workedHours);
    }
    fillWorkingHours(id, body) {
        return this.dataService.updateWorkingHours(id, body.workingHours);
    }
    getOne(id, query) {
        const { relations } = query;
        return this.dataService.findById(id, relations);
    }
    create(data, user) {
        return this.dataService.create(data, user);
    }
    update(user, id, data) {
        return this.dataService.update(user, id, data);
    }
    findAll(query) {
        const { pagination, sort, relations, filter, search } = query;
        console.log(relations);
        return this.dataService.findAll(pagination, sort, relations, filter, search);
    }
    async remove(user, id) {
        console.log(user);
        return this.dataService.delete(user, id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Item ID' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: item_entity_1.ItemEntity,
    }),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    (0, common_1.Patch)('/workedHours/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ItemController.prototype, "fillWorkedHours", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Item ID' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: item_entity_1.ItemEntity,
    }),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    (0, common_1.Patch)('/workingHours/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ItemController.prototype, "fillWorkingHours", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Item ID' }),
    (0, swagger_1.ApiOperation)({ summary: 'Get Item by id' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: item_entity_1.ItemEntity,
    }),
    (0, swagger_1.ApiQuery)({ name: 'relations', required: false, type: Array }),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, search_item_dto_1.SearchItemDto]),
    __metadata("design:returntype", void 0)
], ItemController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create Item' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: item_entity_1.ItemEntity,
        description: 'Item created successfully',
    }),
    (0, swagger_1.ApiBody)({ type: item_entity_1.ItemEntity }),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, auth_user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], ItemController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update Item' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: item_entity_1.ItemEntity,
        description: 'Item updated successfully',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Item ID' }),
    (0, swagger_1.ApiBody)({ type: item_entity_1.ItemEntity }),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    (0, common_1.Patch)(':id'),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, item_entity_1.ItemEntity]),
    __metadata("design:returntype", void 0)
], ItemController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Items using query' }),
    (0, swagger_1.ApiQuery)({ type: search_item_dto_1.SearchItemDto }),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_item_dto_1.SearchItemDto]),
    __metadata("design:returntype", void 0)
], ItemController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Delete by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Item ID' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "remove", null);
ItemController = __decorate([
    (0, swagger_1.ApiTags)('Item'),
    (0, common_1.Controller)('item'),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemController);
exports.ItemController = ItemController;
//# sourceMappingURL=item.controller.js.map