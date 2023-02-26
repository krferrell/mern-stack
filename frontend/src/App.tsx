import WorkoutList from './features/workouts/components/workoutList';
import { useState } from 'react';
import Calendar from 'react-calendar';
import WorkoutForm from './features/workouts/components/workoutForm';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = (value: Date) => {
    setIsFormOpen(true);
    console.log(value);
  };

  return (
    <div>
      {/* <WorkoutList /> */}
      <WorkoutForm />
    </div>
  );
}

export default App;
