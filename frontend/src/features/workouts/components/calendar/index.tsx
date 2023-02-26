import { FC, useState } from 'react';
import { useField } from 'formik';
import { Calendar } from 'react-calendar';

interface ICustomCalendarProps {
  fieldName: string;
  setIsCalendarOpen: (value: boolean) => void;
  isCalendarOpen: boolean;
}

const CustomCalendar: FC<ICustomCalendarProps> = ({
  fieldName,
  setIsCalendarOpen,
  isCalendarOpen,
}) => {
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState<string>('');
  const [field, meta, helpers] = useField(fieldName);

  const formatDate = (date: Date) => {
    return date.toString().split(' ', 4).join(' ');
  };

  const onDatePicked = (value: Date) => {
    setFormattedDate(formatDate(value)!);
    setDate(value);
    setIsCalendarOpen(false);
    helpers.setValue(value);
  };

  return (
    <>
      <div
        placeholder='10'
        onClick={() => setIsCalendarOpen(true)}
        style={{
          height: '24px',
          width: '500px',
          backgroundColor: 'white',
          color: 'black',
        }}
      >
        {formattedDate}
      </div>
      {isCalendarOpen && <Calendar onChange={onDatePicked} value={date} />}
    </>
  );
};

export default CustomCalendar;
