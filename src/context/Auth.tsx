import { useUser } from '@/apis/auth';
import { useAuthStore } from '@/redux';
import { FCC } from '@/types';
import * as SecureStore from 'expo-secure-store';
import React from 'react';

const AuthProvider: FCC<{}> = ({ children }) => {
  const { updateFullName, updateIsLogin } = useAuthStore(state => state);
  useUser({
    onSuccess: data => {
      updateFullName(data?.data?.fullname ?? '');
      updateIsLogin(!!data);
    },
    onError: async () => {
      await SecureStore.deleteItemAsync('access_token');
      await SecureStore.deleteItemAsync('refresh_token');
      updateFullName('');
      updateIsLogin(false);
    },
  });
  return <>{children}</>;
};

export default AuthProvider;
