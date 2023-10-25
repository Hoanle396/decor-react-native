import { UseQueryOptions, useQuery } from 'react-query';
import {
  getCategories,
  getCommentsByPostId,
  getPostByCategory,
  getPostById,
} from './requests';
import {
  IParamsGetPost,
  IPost,
  IResponseCategory,
  IResponseComments,
  IResponsePost,
} from './types';

export const useCategory = (
  option?: UseQueryOptions<IResponseCategory, Error>,
) => {
  return useQuery<IResponseCategory, Error>(
    ['category'],
    () => getCategories(),
    { ...option },
  );
};

export const usePostByCategoryId = (
  params: IParamsGetPost,
  option?: UseQueryOptions<IResponsePost, Error>,
) => {
  return useQuery<IResponsePost, Error>(
    ['category/id', params],
    () => getPostByCategory(params),
    {
      ...option,
    },
  );
};

export const usePostById = (
  id: string,
  option?: UseQueryOptions<IPost, Error>,
) => {
  return useQuery<IPost, Error>(['post/id', id], () => getPostById(id), {
    ...option,
  });
};

export const useCommentsByPostId = (
  id: string,
  option?: UseQueryOptions<IResponseComments, Error>,
) => {
  return useQuery<IResponseComments, Error>(
    ['comments/id', id],
    () => getCommentsByPostId(id),
    {
      ...option,
    },
  );
};
