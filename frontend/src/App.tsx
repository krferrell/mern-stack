import { useGetAllWorkoutsQuery } from './api/workoutApi/workoutApi';

function App() {

  const { data } = useGetAllWorkoutsQuery("");

  console.log(data);
  return (
    <div>

    </div>
  );
}

export default App;
