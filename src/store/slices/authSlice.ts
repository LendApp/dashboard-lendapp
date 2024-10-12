import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id:string;
  nombre:string;
  rol:string;
  username:string
}

interface AuthState {
  token: string | null;
  user: User | null ;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ token: string, user: User }>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
    revalidateToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true; 
    },
  },
});

export const { loginSuccess, logout, revalidateToken } = authSlice.actions;
export default authSlice.reducer;
