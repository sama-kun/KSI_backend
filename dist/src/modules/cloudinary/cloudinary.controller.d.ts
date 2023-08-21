/// <reference types="multer" />
import { CloudinaryService } from './clodinary.service';
import { CloudinaryResponse } from './dto/cloudinary-response.dto';
export declare class CloudinaryController {
    private readonly cloudinaryService;
    constructor(cloudinaryService: CloudinaryService);
    uploadImage(file: Express.Multer.File): Promise<CloudinaryResponse>;
    uploadImages(files: Express.Multer.File[]): Promise<CloudinaryResponse[]>;
    uploadPdf(file: Express.Multer.File): Promise<any>;
}
