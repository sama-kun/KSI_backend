export declare type DBType = 'mysql' | 'mariadb' | 'postgres' | 'cockroachdb' | 'sqlite' | 'mssql';
export declare const config: {
    env: string;
    url: string;
    port: string | number;
    database: {
        local: {
            type: string;
            host: string;
            port: number;
            username: string;
            password: string;
            database: string;
            autoLoadEntities: boolean;
            entities: string[];
            synchronize: boolean;
            migrationsRun: boolean;
            migrations: string[];
            subscribers: string[];
            cli: {
                entitiesDir: string;
                migrationsDir: string;
                seedsDir: string;
            };
        };
        stage: {
            type: string;
            host: string;
            port: number;
            username: string;
            password: string;
            database: string;
            autoLoadEntities: boolean;
            entities: string[];
            synchronize: boolean;
            migrationsRun: boolean;
            migrations: string[];
            subscribers: string[];
            cli: {
                entitiesDir: string;
                migrationsDir: string;
                seedsDir: string;
            };
            ssl: string | boolean;
            extra: {
                ssl: {
                    ca: any;
                };
            };
        };
    };
    swagger: {
        path: string;
    };
    security: {
        jwt_secret: string;
        jwt_expires_in: string;
    };
    cloufinary: {
        name: string;
        key: string;
        secret: string;
    };
};
