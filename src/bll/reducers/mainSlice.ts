import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiResponse, InitialStateI } from '../../api/types/types';
import { apiMain } from '../../api/apiMain';

const initialState: InitialStateI = {
  data: {
    offset: 0,
    limit: 20,
    total: 0,
    count: 0,
    results: [],
  },
  loading: false,
  error: null,
};

export const getMain = createAsyncThunk<ApiResponse, void>(
  'mainSlice/getMain',
  async () => {
    const response = await apiMain.getAllProducts();
    return (response.data) as ApiResponse;
  }
);

export const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getMain.pending, (state: InitialStateI) => {
      state.loading = true;
    });
    builder.addCase(
      getMain.fulfilled,
      (state, action) => {
        state.loading = false;
        state.data.results = action.payload.results;
      }
    );
  },
  // selectors: {
  //   loading: (state) => state.loading,
  //   error: (state) => state.error,
  //   results: (state) => state.data.results,
  // },
});

// export const { loading, results, error } = mainSlice.selectors;
