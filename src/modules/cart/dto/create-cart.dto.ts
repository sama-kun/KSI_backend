import { CartEntity } from '@/database/entities/cart.entity';
import { PartialType } from '@nestjs/swagger';

export class CreateCartDto extends PartialType(CartEntity) {}
