import { findByLabelText } from "@testing-library/react";
import { FC } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface ICustomCalendarProps {
  setSelectedDate: (date: Date) => void;
  date: Date | null;
}

const CustomCalendar: FC<ICustomCalendarProps> = ({
  setSelectedDate,
  date,
}) => {
  const onDatePicked = (value: any) => {
    setSelectedDate(value);
    console.log(value);
  };

  const dateArray = [
    { date: new Date("March 12, 2023 03:24:00") },
    { date: new Date("March 13, 2023 03:24:00") },
    { date: new Date("March 14, 2023 03:24:00") },
  ];

  const highlightDaysWithWorkout = (date: Date) => {
    const dateobj = dateArray.find((x) => {
      return (
        date.getDay() === new Date(x.date).getDay() &&
        date.getMonth() === new Date(x.date).getMonth() &&
        date.getDate() === new Date(x.date).getDate()
      );
    });
    return dateobj ? "black" : "";
  };

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Calendar
        onChange={onDatePicked}
        value={date}
        tileClassName={({ date }) => highlightDaysWithWorkout(date)}
      />
    </div>
  );
};

export default CustomCalendar;
