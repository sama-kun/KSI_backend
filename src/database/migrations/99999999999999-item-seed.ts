import { MigrationInterface, QueryRunner } from 'typeorm';
import { items } from '../seeds/item-seed.json';
import categories from '../seeds/category-seed.json';
import { ItemEntity } from '../entities/item.entity';

export class ItemsSeed99999999999999 implements MigrationInterface {
  name = 'ItemsSeed99999999999999';

  public async up(queryRunner: QueryRunner): Promise<void> {
    if (queryRunner.isTransactionActive) await queryRunner.commitTransaction();

    for (const item of items) {
      const index = categories.findIndex((el) => el === item.categoryName);
      if (!item.categoryName) {
        await queryRunner.manager.insert(ItemEntity, {
          ...item,
          category: { id: 46 },
        });
      }
      await queryRunner.manager.insert(ItemEntity, {
        ...item,
        category: { id: index + 1 },
      });
    }

    await queryRunner.startTransaction();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "item"`);
  }
}
