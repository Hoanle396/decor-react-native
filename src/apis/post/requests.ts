import request from '../axios';
import { IParamsGetPost, IPayloadCreatePost } from './types';

export const createPost = async (payload: IPayloadCreatePost) => {
  const formData = new FormData();
  formData.append('name', payload.name);
  formData.append('category', payload.category);
  formData.append('description', payload.description);
  payload.files.forEach(file => {
    let localUri = file.uri;
    let filename = localUri.split('/').pop();

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : 'image';
    //@ts-ignore
    formData.append('files', { uri: localUri, name: filename, type });
  });

  const { data } = await request({
    url: '/post',
    method: 'POST',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export const getCategories = async () => {
  const { data } = await request({
    url: '/post/category',
    method: 'GET',
  });
  return data;
};

export const getPostByCategory = async ({
  id,
  ...paginate
}: IParamsGetPost) => {
  const { data } = await request({
    url: `/post/category/${id}`,
    method: 'GET',
    params: paginate,
  });
  return data;
};

export const getPostById = async (id: string) => {
  const { data } = await request({
    url: `/post/${id}`,
    method: 'GET',
  });
  return data;
};

export const postCommentsById = async ({
  id,
  text,
}: {
  id: string;
  text: string;
}) => {
  const { data } = await request({
    url: `/post/${id}`,
    method: 'POST',
    data: { text },
  });
  return data;
};

export const getCommentsByPostId = async (id: string) => {
  const { data } = await request({
    url: `/post/comments/${id}`,
    method: 'GET',
  });
  return data;
};
