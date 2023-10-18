import request from '@/apis/axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullname: '',
  email: '',
  avatar: '',
};

export const incrementAsync = createAsyncThunk('auth', async () => {
  const response = await request.get('/auth/secret');
  return response.data?.data;
});

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state += action.payload;
    });
  },
});

export const { setUser } = counterSlice.actions;

export const selectUser = state => state.auth;
export default counterSlice.reducer;
