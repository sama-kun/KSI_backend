import { Injectable, Logger } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryResponse } from './dto/cloudinary-response.dto';
import streamifier from 'streamifier';
const console = new Logger('CloudinaryService');

@Injectable()
export class CloudinaryService {
  uploadImage(file: Express.Multer.File): Promise<CloudinaryResponse> {
    return new Promise<CloudinaryResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );

      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }

  async uploadFiles(
    files: Express.Multer.File[],
  ): Promise<CloudinaryResponse[]> {
    try {
      const uploadPromises = files.map((file) => this.uploadImage(file));
      return Promise.all(uploadPromises);
    } catch (error) {
      console.error('Error uploading files to Cloudinary:', error);
      throw error;
    }
  }

  async getAllImages(): Promise<any> {
    try {
      const { resources } = await cloudinary.api.resources({
        type: 'upload', // Specify the type only once here
        max_results: 10,
      });
      return resources;
    } catch (error) {
      console.error('Error fetching images from Cloudinary:', error);
      throw error;
    }
  }

  async uploadPdf(file: Express.Multer.File): Promise<any> {
    const uploadOptions = {
      folder: 'pdf_files', // Specify the folder where you want to save the PDF files in Cloudinary
      use_filename: true,
      unique_filename: false,
    };

    const uploadResult = await cloudinary.uploader.upload(
      file.path,
      uploadOptions,
    );

    return uploadResult;
  }
}
