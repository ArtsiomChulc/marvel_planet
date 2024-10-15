import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiMain } from '../../api/apiMain';
import {
  InitialStateCreator,
  IResponseCreator,
  IResults,
} from '../../api/types/creatorsType';

const initialState: InitialStateCreator = {
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
      results: [] as IResults[],
    },
    etag: '',
  },
  loading: false,
  error: null,
};

export const getCreators = createAsyncThunk<IResponseCreator, void>(
  'creatorsSlice/getCreators',
  async () => {
    const response = await apiMain.getCreators();
    return response.data;
  }
);

export const creatorsSlice = createSlice({
  name: 'creatorsSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCreators.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getCreators.fulfilled,
      (state, action) => {
        state.loading = false;
        state.data = action.payload;
      }
    );
  },
});

