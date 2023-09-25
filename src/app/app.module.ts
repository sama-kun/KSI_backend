import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '@/modules/users/users.module';
import { AuthModule } from '@/modules/auth/auth.module';
import {
  AnyExceptionFilter,
  HttpExceptionFilter,
} from '@/common/filters/HttpException.filter';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from '@/common/interceptors/rest-response.interceptor';
import { LoggingInterceptor } from '@/common/interceptors/logging.interceptor';
import { CategoryModule } from '@/modules/category/category.module';
import { ItemGroupModule } from '@/modules/item-group/item-group.module';
import { CloudinaryModule } from '@/modules/cloudinary/cloudinary.module';
import { CartModule } from '@/modules/cart/cart.module';
import { ProjectModule } from '@/modules/project/project.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceModule } from '@/modules/maintenance/maintenance.module';
import { CartItemModule } from '@/modules/cart-item/cart-item.module';
import { ItemModule } from '@/modules/item/item.module';
import { ConfigModule } from '@nestjs/config';
import { config } from '@/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [() => config],
    }),
    UserModule,
    AuthModule,
    CartItemModule,
    ItemModule,
    CategoryModule,
    ItemGroupModule,
    CloudinaryModule,
    CartModule,
    ProjectModule,
    MaintenanceModule,
    TypeOrmModule.forRoot(config.database[config.env]),
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
