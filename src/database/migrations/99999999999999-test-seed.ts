import { MigrationInterface, QueryRunner } from 'typeorm';
import { items, projects } from '../seeds/test.seed';
import { ItemEntity } from '../entities/item.entity';
import { ProjectEntity } from '../entities/project.entity';

export class TestSeed99999999999999 implements MigrationInterface {
  name = 'TestSeed99999999999999';

  public async up(queryRunner: QueryRunner): Promise<void> {
    if (queryRunner.isTransactionActive) await queryRunner.commitTransaction();

    for (const itemGroups of items) {
      for (const item of itemGroups.items) {
        const id = itemGroups.itemGroup;
        await queryRunner.manager.insert(ItemEntity, {
          uuid: item,
          itemGroup: { id },
        });
      }
    }

    for (const project of projects) {
      await queryRunner.manager.insert(ProjectEntity, project as ProjectEntity);
    }

    await queryRunner.startTransaction();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "item"`);
    await queryRunner.query(`DELETE FROM "project"`);
  }
}
