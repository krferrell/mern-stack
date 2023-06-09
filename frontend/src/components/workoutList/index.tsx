import { FC, useEffect, useState } from 'react';
import {
  useGetAllWorkoutsQuery,
  useDeleteWorkoutMutation,
} from '../../api/workoutApi/workoutApi';
import { IWorkoutValues } from "../newWorkoutForm";
import { StyledWorkoutList } from './styled';
import { IWorkout, IWorkoutListProps } from './types';

const WorkoutList: FC<IWorkoutListProps> = () => {
  const [deleteWorkout, result] = useDeleteWorkoutMutation('');
  const { data, isLoading, isError, error } = useGetAllWorkoutsQuery('', {
    refetchOnMountOrArgChange: true,
  });

  const renderWorkouts = () => {
    return data?.map((workout: IWorkout, i: number) => {
      return (
        <div key={i} style={{ color: 'black' }}>
          <button onClick={() => deleteWorkout(workout._id)}>Delete</button>
          {workout.title}
          {workout.weight}
          {workout.date}
        </div>
      );
    });
  };

  return <StyledWorkoutList>{renderWorkouts()}</StyledWorkoutList>;
};

export default WorkoutList;
