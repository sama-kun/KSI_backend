import { PartialType } from '@nestjs/swagger';

import { CartItemEntity } from '@/database/entities/cart-item.entity';

export class CreateCartItemDto extends PartialType(CartItemEntity) {}
