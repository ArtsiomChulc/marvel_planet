import axiosInstance from '../api/instance';
import { ApiResponse } from './types/charactersTypes';
import { ApiResponseStories } from './types/storiesType';
import { IResponseCreator } from './types/creatorsType';

export const apiMain = {
  getCharacters(offset: number = 0, limit: number = 10) {
        return axiosInstance.get<ApiResponse>(`characters?offset=${offset}&limit=${limit}`);
  },
  getCharacterBySearch(nameStartsWith: string) {
    return axiosInstance.get<ApiResponse>(`characters?nameStartsWith=${nameStartsWith}`);
  },
  getCharactersById(id: number) {
    return axiosInstance.get<ApiResponse>(`characters/${id}`);
  },
  getStories() {
    return axiosInstance.get<ApiResponseStories>('stories');
  },
  getCreators() {
    return axiosInstance.get<IResponseCreator>('creators');
  },
};
