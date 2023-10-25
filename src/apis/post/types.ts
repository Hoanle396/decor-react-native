import { ImageTypes } from '@/types/utils';
import { IUser } from '../auth';

export interface IPayloadCreatePost {
  name: string;
  description: string;
  category: string;
  files: ImageTypes[];
}

export interface IParamsGetPost {
  id: string;
  limit?: number;
  skip?: number;
}

export interface IResponseCategory {
  meta: Meta;
  data: ICategory[];
}

export interface Meta {
  totalItems: number;
  message: string;
  status: number;
  page?: number;
  totalPage?: number;
}

export interface ICategory {
  id: number;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResponsePost {
  meta: Meta;
  data: IPost[];
}
export interface IPost {
  id: number;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  createdBy: IUser;
  images: IImages[];
  category: ICategory;
  description: string;
}
export interface IImages {
  createdAt: string;
  id: number;
  updatedAt: string;
  url: string;
}

export interface IComments {
  createdAt: string;
  createdBy: IUser;
  id: number;
  text: string;
  updatedAt: string;
}

export interface IResponseComments {
  meta: Meta;
  data: IComments[];
}
