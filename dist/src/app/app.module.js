"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("../modules/users/users.module");
const auth_module_1 = require("../modules/auth/auth.module");
const HttpException_filter_1 = require("../common/filters/HttpException.filter");
const core_1 = require("@nestjs/core");
const rest_response_interceptor_1 = require("../common/interceptors/rest-response.interceptor");
const logging_interceptor_1 = require("../common/interceptors/logging.interceptor");
const category_module_1 = require("../modules/category/category.module");
const item_group_module_1 = require("../modules/item-group/item-group.module");
const cloudinary_module_1 = require("../modules/cloudinary/cloudinary.module");
const cart_module_1 = require("../modules/cart/cart.module");
const project_module_1 = require("../modules/project/project.module");
const typeorm_1 = require("@nestjs/typeorm");
const maintenance_module_1 = require("../modules/maintenance/maintenance.module");
const cart_item_module_1 = require("../modules/cart-item/cart-item.module");
const item_module_1 = require("../modules/item/item.module");
const config_1 = require("@nestjs/config");
const config_2 = require("../config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true,
                load: [() => config_2.config],
            }),
            users_module_1.UserModule,
            auth_module_1.AuthModule,
            cart_item_module_1.CartItemModule,
            item_module_1.ItemModule,
            category_module_1.CategoryModule,
            item_group_module_1.ItemGroupModule,
            cloudinary_module_1.CloudinaryModule,
            cart_module_1.CartModule,
            project_module_1.ProjectModule,
            maintenance_module_1.MaintenanceModule,
            typeorm_1.TypeOrmModule.forRoot(config_2.config.database[config_2.config.env]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_FILTER,
                useClass: HttpException_filter_1.HttpExceptionFilter,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: HttpException_filter_1.AnyExceptionFilter,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: rest_response_interceptor_1.TransformInterceptor,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: logging_interceptor_1.LoggingInterceptor,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map