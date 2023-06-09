import React, { useState } from "react";
import CustomCalendar from "../../components/calendar";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <>
      <CustomCalendar setSelectedDate={setSelectedDate} date={selectedDate} />
    </>
  );
};

export default CalendarPage;
