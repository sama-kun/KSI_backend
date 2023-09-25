import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from './src/config';
import dotenv from 'dotenv';
import * as process from 'process';
import * as fs from 'fs-extra';

dotenv.config();


console.log(
  `Uses postgres database ${process.env.POSTGRES_NAME} at ${process.env.POSTGRES_HOST}:${process.env.POSTGRES_POR}`,
);
export const appDataSource = new DataSource({
  type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT || 5432,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 12345678,
      database: process.env.POSTGRES_NAME,
      entities: [__dirname + '/../../src/database/entities/*.entity{.ts,.js}'],
      subscribers: [
        __dirname + '/../../src/database/subscribers/*.subscriber{.ts,.js}',
      ],
      synchronize: true,
      autoLoadEntities: true,
      logging: false,
      migrations: [__dirname + '/../../src/database/migrations/*{.ts,.js}'],
      ssl: Boolean(process.env.DB_SSl) || false,
      extra: {
        ssl: {
          ca: fs.readFileSync('./ksi_db.crt'),
        },
      },
} as DataSourceOptions);