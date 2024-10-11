import axios from 'axios';
import { store } from '../store/store';
import Notiflix from 'notiflix';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleAxiosError = (error: any) => {
  if (error.response && error.response.data && error.response.data.msg) {
   
    Notiflix.Notify.failure(error.response.data.msg);
  } else {
   
    Notiflix.Notify.failure('Error inesperado, por favor intenta de nuevo.');
  }
  return Promise.reject(error); 
};


api.interceptors.request.use((config) => {
  const token = store.getState().auth.token; 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

api.interceptors.response.use(
  (response) => response, 
  (error) => handleAxiosError(error) 
);

export default api;
