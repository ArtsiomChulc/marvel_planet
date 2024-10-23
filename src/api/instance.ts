import axios from 'axios';
import { apiKeyMarvel } from './constants';

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/',
});

// Добавляем интерсептор для добавления apiKey к каждому запросу
instance.interceptors.request.use(
  config => {
    config.params = {
      ...config.params,
      apikey: apiKeyMarvel, // Добавляем apiKey в параметры запроса
    };
    return config;
  },
  (error: Error) => {
    return Promise.reject(error);
  }
);

export default instance;
