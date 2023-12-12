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
exports.CartItemController = void 0;
const common_1 = require("@nestjs/common");
const cart_item_service_1 = require("./cart-item.service");
const BaseController_1 = require("../../common/base/BaseController");
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../interfaces/enums");
const auth_user_decorator_1 = require("../../common/decorators/auth-user.decorator");
const user_entity_1 = require("../../database/entities/user.entity");
const cart_item_entity_1 = require("../../database/entities/cart-item.entity");
const search_cart_item_dto_1 = require("./dto/search-cart-item.dto");
const roles_quard_1 = require("../../common/guards/roles.quard");
const roles_auth_decorator_1 = require("../../common/decorators/roles-auth.decorator");
let CartItemController = class CartItemController extends BaseController_1.BaseController {
    constructor(dataService) {
        super();
        this.dataService = dataService;
    }
    getOne(id, query) {
        const { relations } = query;
        return this.dataService.findById(id, relations);
    }
    create(data, user) {
        return this.dataService.createMany(data, user);
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
        return this.dataService.remove(id, user);
    }
    plus(id) {
        return this.dataService.plus(id);
    }
    minus(id) {
        return this.dataService.minus(id);
    }
    return(id, body) {
        return this.dataService.return(id, body.initialQuantity);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'CartItem ID' }),
    (0, swagger_1.ApiOperation)({ summary: 'Get CartItem by id' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: cart_item_entity_1.CartItemEntity,
    }),
    (0, swagger_1.ApiQuery)({ name: 'relations', required: false, type: Array }),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, search_cart_item_dto_1.SearchCartItemDto]),
    __metadata("design:returntype", void 0)
], CartItemController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create CartItem' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: cart_item_entity_1.CartItemEntity,
        description: 'CartItem created successfully',
    }),
    (0, swagger_1.ApiBody)({ type: cart_item_entity_1.CartItemEntity }),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, auth_user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], CartItemController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update CartItem' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: cart_item_entity_1.CartItemEntity,
        description: 'CartItem updated successfully',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'CartItem ID' }),
    (0, swagger_1.ApiBody)({ type: cart_item_entity_1.CartItemEntity }),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    (0, common_1.Patch)(':id'),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, cart_item_entity_1.CartItemEntity]),
    __metadata("design:returntype", void 0)
], CartItemController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all CartItems using query' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiQuery)({ type: search_cart_item_dto_1.SearchCartItemDto }),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_cart_item_dto_1.SearchCartItemDto]),
    __metadata("design:returntype", void 0)
], CartItemController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Delete by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'CartItem ID' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(roles_quard_1.RolesQuard),
    (0, roles_auth_decorator_1.Roles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.USER),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], CartItemController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add 1 item to Cart' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: cart_item_entity_1.CartItemEntity,
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
], CartItemController.prototype, "plus", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remove 1 item from Cart' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: cart_item_entity_1.CartItemEntity,
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
], CartItemController.prototype, "minus", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Return items to Base of KSI from Project' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: cart_item_entity_1.CartItemEntity,
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
], CartItemController.prototype, "return", null);
CartItemController = __decorate([
    (0, swagger_1.ApiTags)('CartItem'),
    (0, common_1.Controller)('cart-item'),
    __metadata("design:paramtypes", [cart_item_service_1.CartItemService])
], CartItemController);
exports.CartItemController = CartItemController;
//# sourceMappingURL=cart-item.controller.js.map