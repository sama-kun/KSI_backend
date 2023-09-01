import { RoleEnum } from '@/interfaces/enums';
import { UserEntity } from '../entities/user.entity';

export const users: Partial<UserEntity>[] = [
  {
    email: 'admin@example.com',
    password: '$2a$05$MEfmuWzN5iOXZQ79xH/aDeqxksM5QtucTtqv9liM4Iq8dpip2WFiS',
    role: RoleEnum.ADMIN,
  },
  {
    email: 'root@example.com',
    password: '$2a$05$MEfmuWzN5iOXZQ79xH/aDeqxksM5QtucTtqv9liM4Iq8dpip2WFiS',
    role: RoleEnum.ROOT,
  },
  {
    email: 'user@example.com',
    password: '$2a$05$MEfmuWzN5iOXZQ79xH/aDeqxksM5QtucTtqv9liM4Iq8dpip2WFiS',
    role: RoleEnum.USER,
  },
];
