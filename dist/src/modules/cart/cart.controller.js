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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const roles_quard_1 = require("../../common/guards/roles.quard");
const enums_1 = require("../../interfaces/enums");
const roles_auth_decorator_1 = require("../../common/decorators/roles-auth.decorator");
const auth_user_decorator_1 = require("../../common/decorators/auth-user.decorator");
const user_entity_1 = require("../../database/entities/user.entity");
const cart_entity_1 = require("../../database/entities/cart.entity");
const search_cart_dto_1 = require("./dto/search-cart.dto");
const search_query_dto_1 = require("../../common/base/dto/search-query.dto");
const swagger_1 = require("@nestjs/swagger");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    createCustom(user, data) {
        return this.cartService.createMany(data, user);
    }
    getOne(id, query) {
        const { relations } = query;
        return this.cartService.findById(id, relations);
    }
    update(user, data, id) {
        return this.cartService.update(user, id, data);
    }
    plus(id) {
        return this.cartService.plus(id);
    }
    minus(id) {
        return this.cartService.minus(id);
    }
    return(id, body) {
        return this.cartService.return(id, body.initialQuantity);
    }
    findAll(query) {
        const { pagination, sort, relations, filter, search } = query;
        return this.cartService.findAll(pagination, sort, relations, filter, search);
    }
    async remove(user, id) {
        console.log(user);
        return this.cartService.delete(user, id);
    }
    async sendToProject(user, ids, projectId) {
        console.log(ids);
        return this.cartService.send(user, ids, projectId);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create cart' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: cart_entity_1.CartEntity,
        description: 'Cart created successfully',
    }),
    (0, swagger_1.ApiBody)({ type: cart_entity_1.CartEntity }),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "createCustom", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Cart ID' }),
    (0, swagger_1.ApiOperation)({ summary: 'Get Cart by id' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: cart_entity_1.CartEntity,
        description: 'Cart created successfully',
    }),
    (0, swagger_1.ApiQuery)({ name: 'relations', required: false, type: Array }),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, search_cart_dto_1.SearchCartDto]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update cart' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: cart_entity_1.CartEntity,
        description: 'Cart updated successfully',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Cart ID' }),
    (0, swagger_1.ApiBody)({ type: cart_entity_1.CartEntity }),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    (0, common_1.Patch)(':id'),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        cart_entity_1.CartEntity, Number]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Add 1 item to Cart' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: cart_entity_1.CartEntity,
        description: 'Cart updated successfully',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Cart ID' }),
    (0, common_1.Get)(':id/plus'),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "plus", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Remove 1 item from Cart' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: cart_entity_1.CartEntity,
        description: 'Cart updated successfully',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Cart ID' }),
    (0, common_1.Get)(':id/minus'),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "minus", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Return items to Base of KSI from Project' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: cart_entity_1.CartEntity,
        description: 'Items returned succesfully',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Cart ID' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                initialQuantity: {
                    type: 'number',
                    example: 10,
                    description: 'The initial quantity of the cart',
                },
            },
        },
    }),
    (0, common_1.Post)(':id/return'),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "return", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all carts using query' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiQuery)({ type: search_cart_dto_1.SearchCartDto }),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_query_dto_1.SearchQueryDto]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Cart ID' }),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Send to the Project' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                ids: {
                    type: 'array',
                    example: [1, 2, 3, 4],
                    description: 'The array of ids carts',
                },
            },
        },
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Project ID' }),
    (0, common_1.Patch)('send/:projectId'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, common_1.Body)('ids')),
    __param(2, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Array, Number]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "sendToProject", null);
CartController = __decorate([
    (0, swagger_1.ApiTags)('Cart'),
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
exports.CartController = CartController;
//# sourceMappingURL=cart.controller.js.map