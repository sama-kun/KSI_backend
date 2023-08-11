// import { MigrationInterface, QueryRunner } from 'typeorm'
// import { UserGroupEntity } from '@/database/entities/user-group.entity'
// import { UserEntity } from '@/database/entities/user.entity'
// import { userGroups, users } from '@/database/seeds/users-and-groups.seed'

// export class PermissionsSeed9999999999999 implements MigrationInterface {
// 	name = 'PermissionsSeed9999999999999'

// 	public async up(queryRunner: QueryRunner): Promise<void> {
// 		if (queryRunner.isTransactionActive) await queryRunner.commitTransaction()

// 		const ugis = []
// 		for (const u of userGroups) {
// 			const ug = await queryRunner.manager.insert<UserGroupEntity>(
// 				UserGroupEntity,
// 				u,
// 			)
// 			const ugi = await queryRunner.manager.findOne<UserGroupEntity>(
// 				UserGroupEntity,
// 				{ where: ug.identifiers[0] },
// 			)
// 			ugis.push(ugi)
// 		}

// 		for (const u of users) {
// 			const i = await queryRunner.manager.insert<UserEntity>(UserEntity, {
// 				...u,
// 				group: ugis.filter((g) => g.name === u.name + 's')[0],
// 			})
// 			if (queryRunner.isTransactionActive) await queryRunner.commitTransaction()
// 			const ui = await queryRunner.manager.findOne<UserEntity>(UserEntity, {
// 				where: i.identifiers[0],
// 			})
// 			await ui.save({ reload: true })
// 		}

// 		await queryRunner.startTransaction()
// 	}

// 	public async down(queryRunner: QueryRunner): Promise<void> {
// 		await queryRunner.query(`DELETE FROM "user"`)
// 		await queryRunner.query(`DELETE FROM "user-group"`)
// 	}
// }
