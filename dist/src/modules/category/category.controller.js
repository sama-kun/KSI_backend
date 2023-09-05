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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const roles_auth_decorator_1 = require("../../common/decorators/roles-auth.decorator");
const roles_quard_1 = require("../../common/guards/roles.quard");
const category_service_1 = require("./category.service");
const BaseController_1 = require("../../common/base/BaseController");
const category_entity_1 = require("../../database/entities/category.entity");
const search_category_dto_1 = require("./dto/search-category.dto");
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../interfaces/enums");
const auth_user_decorator_1 = require("../../common/decorators/auth-user.decorator");
const user_entity_1 = require("../../database/entities/user.entity");
let CategoryController = class CategoryController extends BaseController_1.BaseController {
    constructor(categoryService) {
        super();
        this.categoryService = categoryService;
        this.dataService = categoryService;
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
        return this.dataService.findAll(pagination, sort, relations, filter, search);
    }
    async remove(user, id) {
        console.log(user);
        return this.dataService.delete(user, id);
    }
};
__decorate([
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Category ID' }),
    (0, swagger_1.ApiOperation)({ summary: 'Get Category by id' }),
    (0, swagger_1.ApiQuery)({ name: 'relations', required: false, type: Array }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: category_entity_1.CategoryEntity,
    }),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, search_category_dto_1.SearchCategoryDto]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create Category' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: category_entity_1.CategoryEntity,
        description: 'Category created successfully',
    }),
    (0, swagger_1.ApiBody)({ type: category_entity_1.CategoryEntity }),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, auth_user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Category' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: category_entity_1.CategoryEntity,
        description: 'Category updated successfully',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Category ID' }),
    (0, swagger_1.ApiBody)({ type: category_entity_1.CategoryEntity }),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    (0, common_1.Patch)(':id'),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, category_entity_1.CategoryEntity]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all Categorys using query' }),
    (0, swagger_1.ApiQuery)({ type: search_category_dto_1.SearchCategoryDto }),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_category_dto_1.SearchCategoryDto]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Category ID' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "remove", null);
CategoryController = __decorate([
    (0, swagger_1.ApiTags)('Category'),
    (0, common_1.Controller)('category'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map