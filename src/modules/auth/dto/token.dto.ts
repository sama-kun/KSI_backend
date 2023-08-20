import { UserEntity } from '@/database/entities/user.entity';
import { IsNotEmpty, IsString } from 'class-validator';

export class Token {
  @IsNotEmpty()
  @IsString()
  accessToken: string;

  @IsNotEmpty()
  user: Partial<UserEntity>;
}
