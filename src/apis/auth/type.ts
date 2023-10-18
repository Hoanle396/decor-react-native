export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  user: IUser;
}

export interface IUser {
  id: number;
  fullname: string;
  email: string;
  avatar: string;
  roles: string;
  isVerify: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ILoginPayload {
  username: string;
  password: string;
}

export interface IRegisterPayload {
  email: string;
  password: string;
  fullname: string;
}
