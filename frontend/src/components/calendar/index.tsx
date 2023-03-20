import { FC } from 'react';
import Calendar from 'react-calendar';
import { StyledOverlay } from './styles';
import 'react-calendar/dist/Calendar.css';

interface ICustomCalendarProps {
  fieldName: string;
  setIsCalendarOpen: (value: boolean) => void;
  isCalendarOpen: boolean;
  placeHolder: string;
  setSelectedDate: (date: Date) => void;
  date: Date | null;
}

const CustomCalendar: FC<ICustomCalendarProps> = ({
  fieldName,
  setIsCalendarOpen,
  isCalendarOpen,
  placeHolder,
  setSelectedDate,
  date,
}) => {
  const onDatePicked = (value: any) => {
    setSelectedDate(value);
    console.log(value);
    setTimeout(() => {
      setIsCalendarOpen(false);
    }, 200);
  };

  const dateArray = [
    { date: new Date('March 12, 2023 03:24:00') },
    { date: new Date('March 13, 2023 03:24:00') },
    { date: new Date('March 14, 2023 03:24:00') },
  ];

  const highlightDaysWithWorkout = (date: Date) => {
    const dateobj = dateArray.find((x) => {
      return (
        date.getDay() === new Date(x.date).getDay() &&
        date.getMonth() === new Date(x.date).getMonth() &&
        date.getDate() === new Date(x.date).getDate()
      );
    });
    return dateobj ? 'black' : '';
  };

  return (
    <>
      {isCalendarOpen && (
        <StyledOverlay
          onClick={(e) => {
            setIsCalendarOpen(false);
          }}
        >
          <div onClick={(e: any) => e.stopPropagation()}>
            <Calendar
              onChange={onDatePicked}
              value={date}
              tileClassName={({ date }) => highlightDaysWithWorkout(date)}
            />
          </div>
        </StyledOverlay>
      )}
    </>
  );
};

export default CustomCalendar;
