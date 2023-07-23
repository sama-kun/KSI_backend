import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { INestApplication } from '@nestjs/common';

export default (app: INestApplication) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('KSI Platform')
    // .setDescription(pkg.description)
    .setVersion('1.0.0')
    .setContact('Samgar Seriknur', '', 'samgar.robot@gmail.com')
    .addBearerAuth({
      type: 'http',
      description: 'Can be received at `/auth/login` endpoint',
      name: 'Authorization',
      in: '/auth/login',
    })
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(`/docs`, app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
};
