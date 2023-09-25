"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("./config");
exports.default = (app) => {
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('KSI Platform')
        .setVersion('1.0.0')
        .setContact('Samgar Seriknur', 'khbdk', 'samgar.robot@gmail.com')
        .addBearerAuth({
        type: 'http',
        description: 'Can be received at `/auth/login` endpoint',
        name: 'Authorization',
        in: 'header',
    })
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup(config_1.config.swagger.path, app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });
};
//# sourceMappingURL=swagger.js.map