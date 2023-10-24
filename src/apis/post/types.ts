import { ImageTypes } from '@/types/utils';

export interface IPayloadCreatePost {
  name: string;
  description: string;
  category: string;
  files: ImageTypes[];
}
