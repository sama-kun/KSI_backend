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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const BaseController_1 = require("../../common/base/BaseController");
const swagger_1 = require("@nestjs/swagger");
const update_user_dto_1 = require("./dto/update-user.dto");
const user_entity_1 = require("../../database/entities/user.entity");
const auth_user_decorator_1 = require("../../common/decorators/auth-user.decorator");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let UserController = class UserController extends BaseController_1.BaseController {
    constructor(userService) {
        super();
        this.userService = userService;
        this.dataService = userService;
    }
    update(user, id, updateUserDto) {
        return this.dataService.update(user, id, updateUserDto);
    }
};
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('cats'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [users_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=users.controller.js.map