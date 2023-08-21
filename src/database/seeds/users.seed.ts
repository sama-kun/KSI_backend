import { Role } from '@/interfaces/enums';
import { UserEntity } from '../entities/user.entity';

export const users: Partial<UserEntity>[] = [
  {
    email: 'admin@example.com',
    password: '$2a$05$MEfmuWzN5iOXZQ79xH/aDeqxksM5QtucTtqv9liM4Iq8dpip2WFiS',
    role: Role.ADMIN,
  },
  {
    email: 'root@example.com',
    password: '$2a$05$MEfmuWzN5iOXZQ79xH/aDeqxksM5QtucTtqv9liM4Iq8dpip2WFiS',
    role: Role.ROOT,
  },
  {
    email: 'user@example.com',
    password: '$2a$05$MEfmuWzN5iOXZQ79xH/aDeqxksM5QtucTtqv9liM4Iq8dpip2WFiS',
    role: Role.USER,
  },
];
