import { Prisma, Role } from '@prisma/client';
import { IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class GetUserDto {
  @IsOptional()
  id?: number;

  @IsEmail()
  email: string;

  @IsOptional()
  role?: Role;

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  updatedAt?: Date;
}
