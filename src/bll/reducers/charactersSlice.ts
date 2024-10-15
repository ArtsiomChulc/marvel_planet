import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiResponse, Character, InitialStateI } from '../../api/types/charactersTypes';
import { apiMain } from '../../api/apiMain';

const initialState: InitialStateI = {
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
      results: [] as Character[],
    },
    etag: '',
  },
  selectCharacter: {} as Character[],
  loading: false,
  error: null,
};

export const getCharacters = createAsyncThunk<ApiResponse, string | undefined>(
  'mainSlice/getCharacters',
  async (value) => {
    const response = await apiMain.getCharacters(value);
    return response.data;
  },
);

export const getCharacterById = createAsyncThunk<ApiResponse, number>(
  'mainSlice/getCharactersById',
  async (id: number) => {
    const response = await apiMain.getCharactersById(id);
    return response.data;
  },
);

export const charactersSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    clearSelectedCharacter: (state) => {
      state.selectCharacter = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(getCharacters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getCharacters.fulfilled,
      (state, action) => {
        state.loading = false;
        state.data = action.payload;
      },
    );
    builder.addCase(getCharacterById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCharacterById.fulfilled, (state, action) => {
      state.loading = false;
      state.selectCharacter = action.payload.data.results;
    });
  },
});

export const { clearSelectedCharacter } = charactersSlice.actions;

