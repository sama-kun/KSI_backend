import { MigrationInterface, QueryRunner } from 'typeorm';
import { itemGroups } from '../seeds/item-groups-seed.json';
import categories from '../seeds/category-seed.json';
import { ItemGroupEntity } from '../entities/item-group.entity';

export class ItemGroupsSeed99999999999999 implements MigrationInterface {
  name = 'ItemGroupsSeed99999999999999';

  public async up(queryRunner: QueryRunner): Promise<void> {
    if (queryRunner.isTransactionActive) await queryRunner.commitTransaction();

    for (const item of itemGroups) {
      const index = categories.findIndex((el) => el === item.categoryName);
      if (!item.categoryName) {
        await queryRunner.manager.insert(ItemGroupEntity, {
          ...item,
          category: { id: 46 },
        });
      }
      await queryRunner.manager.insert(ItemGroupEntity, {
        ...item,
        category: { id: index + 1 },
      });
    }

    await queryRunner.startTransaction();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "item-group"`);
  }
}
