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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const HttpException_filter_1 = require("./common/filters/HttpException.filter");
const common_1 = require("@nestjs/common");
const rest_response_interceptor_1 = require("./common/interceptors/rest-response.interceptor");
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const logging_interceptor_1 = require("./common/interceptors/logging.interceptor");
const swagger_1 = __importDefault(require("./swagger"));
const bodyParser = __importStar(require("body-parser"));
const config_1 = require("./config");
async function bootstrap() {
    const logger = new common_1.Logger('KSI');
    logger.log(`Application [KSI] is starting...`);
    console.debug(config_1.config.database[config_1.config.env]);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    (0, swagger_1.default)(app);
    await app.listen(config_1.config.port);
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    app.useLogger(logger);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new HttpException_filter_1.AnyExceptionFilter(), new HttpException_filter_1.HttpExceptionFilter());
    app.useGlobalInterceptors(new rest_response_interceptor_1.TransformInterceptor(), new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)), new logging_interceptor_1.LoggingInterceptor());
    app.use((0, express_rate_limit_1.default)({
        windowMs: 5 * 60 * 1000,
        max: 1000,
        handler: (request, response) => {
            return response.status(501).send({
                error: {
                    message: 'Too many requests. Please keep calm and get slow down.',
                    details: `More then 100 requests in last minute from your IP`,
                },
            });
        },
    }));
    app.enableCors();
    console.log(`
  KSI_BACKEND ver.1.0 by Samgar Seriknur @lieproger
  Started at ${config_1.config.url}
  NODE_ENV= ${config_1.config.env}
  `);
}
bootstrap().catch((e) => {
    throw new Error(e);
});
//# sourceMappingURL=main.js.map