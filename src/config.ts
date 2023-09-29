import dotenv from 'dotenv';
import * as process from 'process';
import * as fs from 'fs-extra';

dotenv.config();

export type DBType =
  | 'mysql'
  | 'mariadb'
  | 'postgres'
  | 'cockroachdb'
  | 'sqlite'
  | 'mssql';

export const config = {
  env: process.env.NODE_ENV || 'local',
  url: process.env.APP_URL,
  port: process.env.PORT || 3000,
  database: {
    local: {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT || '5432') || 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_NAME,
      autoLoadEntities: true,
      entities: ['src/database/entities/**/*.entity{.ts,.js}'],
      synchronize: true,
      migrationsRun: process.env.NODE_ENV !== 'development',
      migrations: ['src/database/migrations/**/*.ts'],
      subscribers: ['src/database/subscribers/**/*.subscriber{.ts,.js}'],
      cli: {
        entitiesDir: 'src/modules/',
        migrationsDir: 'src/database/migrations/',
        seedsDir: 'src/database/seeds/',
      },
    },
    stage: {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT || '5432') || 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_NAME,
      autoLoadEntities: true,
      entities: ['src/database/entities/**/*.entity{.ts,.js}'],
      synchronize: true,
      migrationsRun: process.env.NODE_ENV !== 'development',
      migrations: ['src/database/migrations/**/*.ts'],
      subscribers: ['src/database/subscribers/**/*.subscriber{.ts,.js}'],
      cli: {
        entitiesDir: 'src/modules/',
        migrationsDir: 'src/database/migrations/',
        seedsDir: 'src/database/seeds/',
      },
      ssl: process.env.DB_SSl || false,
      extra: {
        ssl: {
          ca: fs.readFileSync('./ksi_db.crt'),
        },
      },
    },
  },
  swagger: {
    path: process.env.SWAGGER_PATH || 'docs',
  },
  security: {
    jwt_secret: process.env.JWT_SECRET_KEY || 'secret',
    jwt_expires_in: process.env.JWT_TOKEN_EXPIRES || '1d',
  },
  cloufinary: {
    name: process.env.CLOUD_NAME,
    key: process.env.CLOUD_KEY,
    secret: process.env.CLOUD_SECRET,
  },
};
