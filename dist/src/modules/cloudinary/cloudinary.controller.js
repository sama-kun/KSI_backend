"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryController = void 0;
const common_1 = require("@nestjs/common");
const clodinary_service_1 = require("./clodinary.service");
const platform_express_1 = require("@nestjs/platform-express");
const console = new common_1.Logger('CloudinaryController');
let CloudinaryController = class CloudinaryController {
    constructor(cloudinaryService) {
        this.cloudinaryService = cloudinaryService;
    }
    uploadImage(file) {
        return this.cloudinaryService.uploadImage(file);
    }
    async uploadImages(files) {
        console.log(files);
        return this.cloudinaryService.uploadFiles(files);
    }
    uploadPdf(file) {
        return this.cloudinaryService.uploadPdf(file);
    }
};
__decorate([
    (0, common_1.Post)('image'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CloudinaryController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Post)('upload-multiply'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'files' }])),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CloudinaryController.prototype, "uploadImages", null);
__decorate([
    (0, common_1.Post)('pdf'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CloudinaryController.prototype, "uploadPdf", null);
CloudinaryController = __decorate([
    (0, common_1.Controller)('cloud'),
    __metadata("design:paramtypes", [clodinary_service_1.CloudinaryService])
], CloudinaryController);
exports.CloudinaryController = CloudinaryController;
//# sourceMappingURL=cloudinary.controller.js.map