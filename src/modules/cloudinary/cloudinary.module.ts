import { Module } from '@nestjs/common';
import { CloudinaryProvider } from './cloudinary.provider';
import { CloudinaryService } from './clodinary.service';
import { CloudinaryController } from './cloudinary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageEntity } from '@/database/entities/image.entity';

@Module({
  providers: [CloudinaryProvider, CloudinaryService],
  exports: [CloudinaryProvider, CloudinaryService],
  controllers: [CloudinaryController],
  imports: [TypeOrmModule.forFeature([ImageEntity])],
})
export class CloudinaryModule {}
