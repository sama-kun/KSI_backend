import { CartItemEntity } from '@/database/entities/cart-item.entity';
import { PartialType } from '@nestjs/swagger';

export class CreateCartDto extends PartialType(CartItemEntity) {}
