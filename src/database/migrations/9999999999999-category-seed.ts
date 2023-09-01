import { MigrationInterface, QueryRunner } from 'typeorm';
import categories from '../seeds/category-seed.json';
import { CategoryEntity } from '../entities/category.entity';

export class CategoriesSeed9999999999999 implements MigrationInterface {
  name = 'CategoriesSeed9999999999999';

  public async up(queryRunner: QueryRunner): Promise<void> {
    if (queryRunner.isTransactionActive) await queryRunner.commitTransaction();

    for (const category of categories) {
      await queryRunner.manager.insert(CategoryEntity, { name: category });
    }

    await queryRunner.startTransaction();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "category"`);
  }
}
