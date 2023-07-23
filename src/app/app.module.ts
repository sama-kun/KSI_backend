import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '@/database/prisma.module';
import { UserModule } from '@/modules/users/users.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { XxxModule } from '@/modules/xxx/xxx.module';
import {
  AnyExceptionFilter,
  HttpExceptionFilter,
} from '@/common/filters/HttpException.filter';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
// import { SentryExceptionFilter } from '@/common/filters/SentryException.filter';
import { TransformInterceptor } from '@/common/interceptors/rest-response.interceptor';
import { LoggingInterceptor } from '@/common/interceptors/logging.interceptor';
import { CategoryModule } from '@/modules/category/category.module';
import { ItemModule } from '@/modules/item/item.module';
import { CloudinaryModule } from '@/modules/cloudinary/cloudinary.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    XxxModule,
    CategoryModule,
    ItemModule,
    CloudinaryModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: AnyExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    // {
    //   provide: APP_FILTER,
    //   useClass: SentryExceptionFilter,
    // },
  ],
})
export class AppModule {}
