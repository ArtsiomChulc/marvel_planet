import { configureStore } from '@reduxjs/toolkit';
import { mainSlice } from '../reducers/mainSlice';
import { storiesSlice } from '../reducers/storiesSlice';

export const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
    stories: storiesSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
