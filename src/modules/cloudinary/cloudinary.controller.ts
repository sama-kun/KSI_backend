import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CloudinaryService } from './clodinary.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CloudinaryResponse } from './dto/cloudinary-response.dto';
import { RolesQuard } from '@/common/guards/roles.quard';
import { RoleEnum } from '@/interfaces/enums';
import { Roles } from '@/common/decorators/roles-auth.decorator';
import { AuthUser } from '@/common/decorators/auth-user.decorator';
import { UserEntity } from '@/database/entities/user.entity';
import { SearchFileDto } from './dto/search-file.dto';
const console = new Logger('CloudinaryController');

@Controller('cloud')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}
  @Post('image')
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(
    @AuthUser() user: UserEntity,
    @UploadedFile() file: Express.Multer.File,
    @Body() data: any,
  ) {
    console.debug(data.item);
    return this.cloudinaryService.uploadFile(
      user,
      file,
      { folder: data.folder },
      data.item,
    );
  }

  // @Get()
  // async getAllImages(): Promise<any> {
  //   return this.cloudinaryService.getAllImages();
  // }

  @Post('upload-multiply')
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  @UseInterceptors(FilesInterceptor('files')) // Up to 10 images can be uploaded
  async uploadImages(
    @AuthUser() user: UserEntity,
    @UploadedFiles() files: Express.Multer.File[],
    @Body() data: any,
  ): Promise<CloudinaryResponse[]> {
    return await this.cloudinaryService.uploadFiles(
      user,
      data.item,
      files,
      'item',
    );
  }

  @Post('pdf')
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  @UseInterceptors(FileInterceptor('file'))
  uploadPdf(
    @AuthUser() user: UserEntity,
    @UploadedFile() File: Express.Multer.File,
  ) {
    return this.cloudinaryService.uploadPdf(user, File);
  }

  @Get()
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  findAll(query: SearchFileDto) {
    const { pagination, sort, relations, filter, search } = query;
    return this.cloudinaryService.findAll(
      pagination,
      sort,
      relations,
      filter,
      search,
    );
  }

  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number, @Query() query: SearchFileDto) {
    const { relations } = query;
    return this.cloudinaryService.findById(id, relations);
  }
}
