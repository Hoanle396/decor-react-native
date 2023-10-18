import request from '../axios';
import { ILoginPayload, IRegisterPayload } from './type';

export const login = async (payload: ILoginPayload) => {
  const { data } = await request({
    url: '/auth/login',
    method: 'POST',
    data: payload,
  });
  return data;
};

export const register = async (payload: IRegisterPayload) => {
  const { data } = await request({
    url: '/auth/register',
    method: 'POST',
    data: payload,
  });
  return data;
};

export const secret = async () => {
  const { data } = await request({
    url: '/auth/secret',
    method: 'GET',
  });
  return data;
};
