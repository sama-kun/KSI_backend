import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class Statuses1693903590150 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
