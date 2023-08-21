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
const item_module_1 = require("../modules/item/item.module");
const cloudinary_module_1 = require("../modules/cloudinary/cloudinary.module");
const cart_module_1 = require("../modules/cart/cart.module");
const project_module_1 = require("../modules/project/project.module");
const typeorm_1 = require("@nestjs/typeorm");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UserModule,
            auth_module_1.AuthModule,
            category_module_1.CategoryModule,
            item_module_1.ItemModule,
            cloudinary_module_1.CloudinaryModule,
            cart_module_1.CartModule,
            project_module_1.ProjectModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: parseInt(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_NAME,
                entities: [__dirname + '/../../src/database/entities/*.entity{.ts,.js}'],
                subscribers: [
                    __dirname + '/../../src/database/subscribers/*.subscriber{.ts,.js}',
                ],
                synchronize: process.env.NODE_ENV === 'development',
                migrationsRun: process.env.NODE_ENV !== 'development',
                autoLoadEntities: true,
                logging: 'all',
                migrations: [__dirname + '/../../src/database/migrations/*{.ts,.js}'],
            }),
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