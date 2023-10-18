import { UseQueryOptions, useQuery } from 'react-query';
import { IUser } from './type';
import { secret } from './request';

export const useUser = (option?: UseQueryOptions<IUser, Error>) => {
  const { data, ...rest } = useQuery<IUser, Error>(['/me'], secret, {
    ...option,
  });
  return { user: data, ...rest };
};
