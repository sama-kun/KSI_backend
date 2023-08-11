import { DataSource, DataSourceOptions } from 'typeorm'
import * as dotenv from 'dotenv';
dotenv.config();
console.log(`Uses postgres database ${process.env.POSTGRES_NAME} at ${process.env.POSTGRES_HOST}:${process.env.POSTGRES_POR}`);

export const appDataSource = new DataSource({
	type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_NAME,
	autoLoadEntities: true,
	entities: ['src/database/entities/**/*.entity{.ts,.js}'],
	synchronize: process.env.NODE_ENV === 'development',
	migrationsRun: process.env.NODE_ENV !== 'development',
	migrations: ['src/database/migrations/**/*.ts'],
	subscribers: ['src/database/subscribers/**/*.subscriber{.ts,.js}'],
	cli: {
		entitiesDir: 'src/modules/',
		migrationsDir: 'src/database/migrations/',
		seedsDir: 'src/database/seeds/',
	},
} as DataSourceOptions)