"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestSeed99999999999999 = void 0;
const test_seed_1 = require("../seeds/test.seed");
const project_entity_1 = require("../entities/project.entity");
class TestSeed99999999999999 {
    constructor() {
        this.name = 'TestSeed99999999999999';
    }
    async up(queryRunner) {
        if (queryRunner.isTransactionActive)
            await queryRunner.commitTransaction();
        for (const project of test_seed_1.projects) {
            await queryRunner.manager.insert(project_entity_1.ProjectEntity, project);
        }
        await queryRunner.startTransaction();
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM "item"`);
        await queryRunner.query(`DELETE FROM "project"`);
    }
}
exports.TestSeed99999999999999 = TestSeed99999999999999;
//# sourceMappingURL=99999999999999-test-seed.js.map