import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {
  AnyExceptionFilter,
  HttpExceptionFilter,
} from './common/filters/HttpException.filter';
import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { TransformInterceptor } from './common/interceptors/rest-response.interceptor';
import RateLimit from 'express-rate-limit';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import swaggerInit from '@/swagger';
import pkg from '../package.json';

// import * as Sentry from '@sentry/node';

async function bootstrap() {
  const logger = new Logger('KSI');
  logger.log(`Application [${pkg.name}] is starting...`);
  const app = await NestFactory.create(AppModule);
  swaggerInit(app);
  await app.listen(process.env.PORT);
  app.useLogger(logger);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AnyExceptionFilter(), new HttpExceptionFilter());
  app.useGlobalInterceptors(
    new TransformInterceptor(),
    new ClassSerializerInterceptor(app.get(Reflector)),
    new LoggingInterceptor(),
  );
  app.use(
    RateLimit({
      windowMs: 5 * 60 * 1000, // 1 minutes
      max: 1000, // limit each IP to 100 requests per windowMs
      handler: (request, response) => {
        return response.status(501).send({
          error: {
            message: 'Too many requests. Please keep calm and get slow down.',
            details: `More then 100 requests in last minute from your IP`,
          },
        });
      },
    }),
  );
  app.enableCors();

  // app.use(Sentry.Handlers.requestHandler());
  // app.use(Sentry.Handlers.tracingHandler());
  // app.use(Sentry.Handlers.errorHandler());

  console.log(`
    ${pkg.name} version ${pkg.version} by ${pkg.author} @lieproger
    Started at ${process.env.APP_URL}
    NODE_ENV=${process.env.NODE_ENV}
    `);
}
bootstrap().catch((e) => {
  throw new Error(e);
});
