"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_1 = require("cloudinary");
const streamifier_1 = __importDefault(require("streamifier"));
const console = new common_1.Logger('CloudinaryService');
let CloudinaryService = class CloudinaryService {
    uploadImage(file) {
        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary_1.v2.uploader.upload_stream((error, result) => {
                if (error)
                    return reject(error);
                resolve(result);
            });
            streamifier_1.default.createReadStream(file.buffer).pipe(uploadStream);
        });
    }
    async uploadFiles(files) {
        try {
            const uploadPromises = files.map((file) => this.uploadImage(file));
            return Promise.all(uploadPromises);
        }
        catch (error) {
            console.error('Error uploading files to Cloudinary:', error);
            throw error;
        }
    }
    async getAllImages() {
        try {
            const { resources } = await cloudinary_1.v2.api.resources({
                type: 'upload',
                max_results: 10,
            });
            return resources;
        }
        catch (error) {
            console.error('Error fetching images from Cloudinary:', error);
            throw error;
        }
    }
    async uploadPdf(file) {
        const uploadOptions = {
            folder: 'pdf_files',
            use_filename: true,
            unique_filename: false,
        };
        const uploadResult = await cloudinary_1.v2.uploader.upload(file.path, uploadOptions);
        return uploadResult;
    }
};
CloudinaryService = __decorate([
    (0, common_1.Injectable)()
], CloudinaryService);
exports.CloudinaryService = CloudinaryService;
//# sourceMappingURL=clodinary.service.js.map