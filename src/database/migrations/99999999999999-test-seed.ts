import { MigrationInterface, QueryRunner } from 'typeorm';
import { projects } from '../seeds/test.seed';
import { ProjectEntity } from '../entities/project.entity';

export class TestSeed99999999999999 implements MigrationInterface {
  name = 'TestSeed99999999999999';

  public async up(queryRunner: QueryRunner): Promise<void> {
    if (queryRunner.isTransactionActive) await queryRunner.commitTransaction();

    for (const project of projects) {
      await queryRunner.manager.insert(ProjectEntity, {
        ...project,
        date: new Date(),
      } as ProjectEntity);
    }

    await queryRunner.startTransaction();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "item"`);
    await queryRunner.query(`DELETE FROM "project"`);
  }
}
