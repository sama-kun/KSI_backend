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
import * as dotenv from 'dotenv';
import * as fs from 'fs-extra';
import { MaintenanceModule } from '@/modules/maintenance/maintenance.module';
import { CartItemModule } from '@/modules/cart-item/cart-item.module';
import { ItemModule } from '@/modules/item/item.module';
dotenv.config();

console.log(process.env.POSTGRES_PORT);

@Module({
  imports: [
    UserModule,
    AuthModule,
    CartItemModule,
    ItemModule,
    // XxxModule,
    CategoryModule,
    ItemGroupModule,
    CloudinaryModule,
    CartModule,
    ProjectModule,
    MaintenanceModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      // port: process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_NAME,
      entities: [__dirname + '/../../src/database/entities/*.entity{.ts,.js}'],
      subscribers: [
        __dirname + '/../../src/database/subscribers/*.subscriber{.ts,.js}',
      ],
      synchronize: true,
      // migrationsRun: process.env.NODE_ENV !== 'development',
      autoLoadEntities: true,
      logging: false,
      migrations: [__dirname + '/../../src/database/migrations/*{.ts,.js}'],
      ssl: Boolean(process.env.DB_SSl) || false,
      extra: {
        ssl: {
          ca: fs.readFileSync('./cer_ksi.crt'),
        },
      },
    }),
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
