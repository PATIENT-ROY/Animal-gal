// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import dogSlice from './dogSlice';

export const store = configureStore({
  reducer: {
    dogs: dogSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
