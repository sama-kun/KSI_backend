"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projects = exports.items = void 0;
const enums_1 = require("../../interfaces/enums");
exports.items = [
    {
        itemGroup: 1,
        items: ['testItem1', 'testItem2', 'testItem3', 'testItem4', 'testItem5'],
    },
    {
        itemGroup: 2,
        items: ['testItem1', 'testItem2', 'testItem3', 'testItem4', 'testItem5'],
    },
];
exports.projects = [
    {
        name: 'Kashagan',
        description: 'This is test project in seeds',
        status: enums_1.ProjectStatusEnum.detailing,
    },
    {
        name: 'Zhanaozen',
        description: 'This is test project in seeds',
        status: enums_1.ProjectStatusEnum.detailing,
    },
];
//# sourceMappingURL=test.seed.js.map