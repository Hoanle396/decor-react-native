import request from '../axios';
import { IPayloadCreatePost } from './types';

export const createPost = async (payload: IPayloadCreatePost) => {
  // Upload the image using the fetch and FormData APIs
  const formData = new FormData();
  formData.append('name', payload.name);
  formData.append('category', payload.category);
  formData.append('description', payload.description);
  payload.files.forEach(file => {
    let localUri = file.uri;
    let filename = localUri.split('/').pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : 'image';
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
