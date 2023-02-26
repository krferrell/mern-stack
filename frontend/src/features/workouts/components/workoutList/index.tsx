import { FC } from 'react';
import { useGetAllWorkoutsQuery } from '../../../../api/workoutApi/workoutApi';
import { StyledWorkoutList } from './styled';
import { IWorkout, IWorkoutListProps } from './types';

const WorkoutList: FC<IWorkoutListProps> = () => {
  const { data, isLoading, isError, error } = useGetAllWorkoutsQuery('');

  const renderWorkouts = () => {
    console.log(data);
    return data?.map((workout: IWorkout) => {
      return (
        <div key={workout.reps} style={{ color: 'white' }}>
          {workout.title}
          {workout.weight}
          {workout.reps}
        </div>
      );
    });
  };

  return <StyledWorkoutList>{renderWorkouts()}</StyledWorkoutList>;
};

export default WorkoutList;
