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
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const process = __importStar(require("process"));
const fs = __importStar(require("fs-extra"));
dotenv_1.default.config();
exports.config = {
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
//# sourceMappingURL=config.js.map