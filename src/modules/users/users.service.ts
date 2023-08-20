import { BaseService } from '@/common/base/BaseService';
import { UserEntity } from '@/database/entities/user.entity';
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
const console = new Logger('UserService');

@Injectable()
export class UserService extends BaseService<
  UserEntity,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(
    @InjectRepository(UserEntity) protected repo: Repository<UserEntity>,
  ) {
    super();
  }

  async findByEmail(email: string): Promise<CreateUserDto> {
    const candidate = super.findOne({
      where: email,
    });
    if (!candidate)
      throw new HttpException(
        'Not found email: ' + email,
        HttpStatus.NOT_FOUND,
      );
    return candidate;
  }
}
