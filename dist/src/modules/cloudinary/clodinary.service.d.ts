/// <reference types="multer" />
import { CloudinaryResponse } from './dto/cloudinary-response.dto';
export declare class CloudinaryService {
    uploadImage(file: Express.Multer.File): Promise<CloudinaryResponse>;
    uploadFiles(files: Express.Multer.File[]): Promise<CloudinaryResponse[]>;
    getAllImages(): Promise<any>;
    uploadPdf(file: Express.Multer.File): Promise<any>;
}
