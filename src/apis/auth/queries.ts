import { UseQueryOptions, useQuery } from 'react-query';
import { IUser } from './type';
import { secret } from './request';

export const useUser = (option?: UseQueryOptions<{ data: IUser }, Error>) => {
  const { data, ...rest } = useQuery<{ data: IUser }, Error>(['/me'], secret, {
    ...option,
  });
  return { user: data, ...rest, isLogin: !!data };
};
