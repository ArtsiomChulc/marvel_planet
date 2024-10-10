import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com:443',
});

// Добавляем интерсептор для добавления apiKey к каждому запросу
instance.interceptors.request.use(
  config => {
    const apiKey = 'd49d5329a3a2479eaaedabc40e26a511';
    config.params = {
      ...config.params,
      apikey: apiKey, // Добавляем apiKey в параметры запроса
    };
    return config;
  },
  (error: Error) => {
    return Promise.reject(error);
  }
);

export default instance;
