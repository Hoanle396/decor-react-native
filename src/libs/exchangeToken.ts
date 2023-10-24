import { LoginResponse } from '@/apis/auth/type';
import axios from 'axios';
import { API_URL } from './../../env';
export const exchangeToken = async (
  refreshToken: string,
): Promise<LoginResponse> => {
  const url = API_URL + '/auth/refresh';
  return await axios({
    url,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
};
