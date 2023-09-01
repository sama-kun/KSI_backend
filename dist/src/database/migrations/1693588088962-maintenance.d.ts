import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class Maintenance1693588088962 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
