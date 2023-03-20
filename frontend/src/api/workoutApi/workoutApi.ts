// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IWorkoutValues } from '../../components/workoutForm';

// Define a service using a base URL and expected endpoints
export const workoutApi: any = createApi({
  reducerPath: 'workoutApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  tagTypes: ['Workouts'],
  endpoints: (builder) => ({
    getAllWorkouts: builder.query<any, string>({
      query: () => `api/workouts/`,
      providesTags: ['Workouts'],
    }),
    deleteWorkout: builder.mutation<any, IWorkoutValues>({
      query: (id) => ({ url: `api/workouts/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Workouts'],
    }),
    createWorkout: builder.mutation<any, IWorkoutValues>({
      query: (payload) => ({
        url: 'api/workouts',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Workouts'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllWorkoutsQuery,
  useCreateWorkoutMutation,
  useDeleteWorkoutMutation,
} = workoutApi;
