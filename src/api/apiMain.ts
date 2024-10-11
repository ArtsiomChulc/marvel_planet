import axiosInstance from '../api/instance';
import { ApiResponse } from './types/types';
import { ApiResponseStories } from './types/storiesType';

export const apiMain = {
  getCharacters() {
    return axiosInstance.get<ApiResponse>('characters');
  },
  getCharactersById(id: number) {
    return axiosInstance.get<ApiResponse>(`characters/${id}`);
  },
  getStories() {
    return axiosInstance.get<ApiResponseStories>('stories');
  },
};
