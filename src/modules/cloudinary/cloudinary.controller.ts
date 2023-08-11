import {
  Controller,
  Get,
  Logger,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { CloudinaryService } from './clodinary.service';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { CloudinaryResponse } from './dto/cloudinary-response.dto';
const console = new Logger('CloudinaryController');

@Controller('cloud')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}
  @Post('image')
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return this.cloudinaryService.uploadImage(file);
  }

  // @Get()
  // async getAllImages(): Promise<any> {
  //   return this.cloudinaryService.getAllImages();
  // }

  @Post('upload-multiply')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'files' }])) // Up to 10 images can be uploaded
  async uploadImages(
    @UploadedFiles() files: Express.Multer.File[],
  ): Promise<CloudinaryResponse[]> {
    console.log(files);
    return this.cloudinaryService.uploadFiles(files);
  }

  @Post('pdf')
  @UseInterceptors(FileInterceptor('file'))
  uploadPdf(@UploadedFile() file: Express.Multer.File) {
    return this.cloudinaryService.uploadPdf(file);
  }
}
