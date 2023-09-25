"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryProvider = void 0;
const config_1 = require("../../config");
const cloudinary_1 = require("cloudinary");
exports.CloudinaryProvider = {
    provide: 'Cloudinary',
    useFactory: () => {
        return cloudinary_1.v2.config({
            cloud_name: config_1.config.cloufinary.name,
            api_key: config_1.config.cloufinary.key,
            api_secret: config_1.config.cloufinary.secret,
        });
    },
};
//# sourceMappingURL=cloudinary.provider.js.map