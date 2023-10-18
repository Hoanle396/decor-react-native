import request from '@/apis/axios';
import { API_URL } from './../../env';
import { LoginResponse } from '@/apis/auth/type';
export const exchangeToken = async (
  refreshToken: string,
): Promise<LoginResponse> => {
  const url = API_URL + '/auth/refresh';
  return await request({
    url,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
};
