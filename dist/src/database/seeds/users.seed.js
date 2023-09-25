"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const enums_1 = require("../../interfaces/enums");
exports.users = [
    {
        email: 'admin@example.com',
        name: 'Admin',
        password: '$2a$05$MEfmuWzN5iOXZQ79xH/aDeqxksM5QtucTtqv9liM4Iq8dpip2WFiS',
        role: enums_1.RoleEnum.ADMIN,
    },
    {
        email: 'root@example.com',
        name: 'Root',
        password: '$2a$05$MEfmuWzN5iOXZQ79xH/aDeqxksM5QtucTtqv9liM4Iq8dpip2WFiS',
        role: enums_1.RoleEnum.ROOT,
    },
    {
        email: 'user@example.com',
        name: 'User',
        password: '$2a$05$MEfmuWzN5iOXZQ79xH/aDeqxksM5QtucTtqv9liM4Iq8dpip2WFiS',
        role: enums_1.RoleEnum.USER,
    },
];
//# sourceMappingURL=users.seed.js.map