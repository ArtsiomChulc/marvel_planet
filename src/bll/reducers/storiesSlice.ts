import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiMain } from '../../api/apiMain';
import {
  ApiResponseStories,
  InitialStateStoriesI,
  Item,
} from '../../api/types/storiesType';

const initialState: InitialStateStoriesI = {
  data: {
    code: 0,
    status: '',
    copyright: '',
    attributionText: '',
    attributionHTML: '',
    data: {
      offset: 0,
      limit: 20,
      total: 0,
      count: 0,
      results: [] as Item[], // Изменение на Item
    },
    etag: '',
  },
  loading: false,
  error: null,
};

export const getStories = createAsyncThunk<ApiResponseStories, void>(
  'storiesSlice/getStories',
  async () => {
    const response = await apiMain.getStories();
    return response.data;
  }
);

export const storiesSlice = createSlice({
  name: 'storiesSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getStories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getStories.fulfilled,
      (state, action) => {
        state.loading = false;
        state.data = action.payload;
      }
    );
  },
});

