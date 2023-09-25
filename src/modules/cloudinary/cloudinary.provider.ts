import { config } from '@/config';
import { v2 } from 'cloudinary';

export const CloudinaryProvider = {
  provide: 'Cloudinary',
  useFactory: (): any => {
    return v2.config({
      cloud_name: config.cloufinary.name,
      api_key: config.cloufinary.key,
      api_secret: config.cloufinary.secret,
    });
  },
};
