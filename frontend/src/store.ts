import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { workoutApi } from './api/workoutApi/workoutApi';

export const store = configureStore({
  reducer: {
    [workoutApi.reducerPath]: workoutApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(workoutApi.middleware),
});

setupListeners(store.dispatch);
