import React from 'react';
import { StyledButton } from '../styles';
import { StyledHomePage } from './styles';
import { useState } from 'react';
import CustomCalendar from '../calendar';
import WorkoutForm from '../workoutForm';
import WorkoutList from '../workoutList';

const HomePage = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <StyledHomePage>
      <StyledButton onClick={() => setIsCalendarOpen(true)}>
        Add Workout
      </StyledButton>
      {isCalendarOpen && (
        <CustomCalendar
          placeHolder='Place Holder'
          isCalendarOpen={isCalendarOpen}
          setIsCalendarOpen={setIsCalendarOpen}
          setSelectedDate={setSelectedDate}
          date={selectedDate}
          fieldName='calendar'
        />
      )}
      {!isCalendarOpen && selectedDate && <WorkoutForm date={selectedDate} />}
      <WorkoutList />
    </StyledHomePage>
  );
};

export default HomePage;
