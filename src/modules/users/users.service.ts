import { Prisma } from '@prisma/client';
import { PrismaService } from '@/database/prisma.service';
import { User } from '@prisma/client';
import { BaseService } from '@/common/base/BaseService';
import { GetUserDto } from './dto/get-user.dto';
import { Injectable, Logger } from '@nestjs/common';
const console = new Logger('UserService');

@Injectable()
export class UserService extends BaseService<
  User,
  Partial<Prisma.UserUncheckedCreateInput>,
  Prisma.UserCreateInput
> {
  protected readonly model = Prisma.ModelName.User;
  constructor(prisma: PrismaService) {
    super();
    this.prisma = prisma;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    console.log(user);

    return user;
  }

  // async findById(id: string): Promise<User> {
  //   const user = await this.userRepository
  //     .findById(id)
  //     .select('-password')
  //     .exec();
  //   console.log(user);
  //   return user;
  // }
}
