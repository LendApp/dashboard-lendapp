
import api from '../api';
import { store } from '../../store/store';
import { revalidateToken } from '../../store/slices/authSlice';


export const authLogin = async (credentials: { username: string; password: string }) => {
  const response = await api.post('/auth/login', credentials);
  return response.data; 
};


export const revalidateAuthToken = async () => {
  try {
    const response = await api.get('/auth/revalidate'); 
    const newToken = response.data.token;
    store.dispatch(revalidateToken(newToken));
    localStorage.setItem('token', newToken); 
    return newToken;
  } catch (error) {
    console.error('Error during token revalidation:', error);
    throw error;
  }
};
