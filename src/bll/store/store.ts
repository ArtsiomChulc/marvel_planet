import { configureStore } from '@reduxjs/toolkit';
import { charactersSlice } from '../reducers/charactersSlice';
import { storiesSlice } from '../reducers/storiesSlice';
import { creatorsSlice } from '../reducers/creatorsSlice';

export const store = configureStore({
  reducer: {
    creators: creatorsSlice.reducer,
    characters: charactersSlice.reducer,
    stories: storiesSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
