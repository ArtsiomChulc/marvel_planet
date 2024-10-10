import axiosInstance from '../api/instance';
import { ApiResponse } from './types/types';

export const apiMain = {
  getAllProducts() {
    return axiosInstance.get<ApiResponse>('/v1/public/characters');
  },
};
