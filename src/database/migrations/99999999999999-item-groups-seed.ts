import { MigrationInterface, QueryRunner } from 'typeorm';
import { itemGroups } from '../seeds/item-groups-seed.json';
import categories from '../seeds/category-seed.json';
import { ItemGroupEntity } from '../entities/item-group.entity';
import { items } from '../seeds/test.seed';
import { ItemEntity } from '../entities/item.entity';

export class ItemGroupsSeed99999999999999 implements MigrationInterface {
  name = 'ItemGroupsSeed99999999999999';

  public async up(queryRunner: QueryRunner): Promise<void> {
    if (queryRunner.isTransactionActive) await queryRunner.commitTransaction();
    const data = [];

    for (const itemGroup of itemGroups) {
      const index = categories.findIndex((el) => el === itemGroup.categoryName);
      if (!itemGroup.categoryName) {
        await queryRunner.manager.insert(ItemGroupEntity, {
          ...itemGroup,
          category: { id: 46 },
        });
      }
      await queryRunner.manager.insert(ItemGroupEntity, {
        ...itemGroup,
        category: { id: index + 1 },
      });
    }
    for (let i = 1; i <= itemGroups.length; i++) {
      for (const item of items) {
        await queryRunner.manager.insert(ItemEntity, {
          uuid: item,
          itemGroup: { id: i },
        });
      }
    }

    await queryRunner.startTransaction();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "item-group"`);
  }
}
