import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { workoutApi } from './api/workoutApi/workoutApi';
import userSlice from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    [workoutApi.reducerPath]: workoutApi.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(workoutApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
