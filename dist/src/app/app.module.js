"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
const dotenv = __importStar(require("dotenv"));
const maintenance_module_1 = require("../modules/maintenance/maintenance.module");
dotenv.config();
console.log(process.env.POSTGRES_PORT);
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
            maintenance_module_1.MaintenanceModule,
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
                synchronize: true,
                autoLoadEntities: true,
                logging: false,
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