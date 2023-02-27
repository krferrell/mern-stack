import { FC, useState } from 'react';
import { useField } from 'formik';
import { Calendar } from 'react-calendar';
import { StyledCalendarInput, StyledOverlay } from './styles';
import { StyledErrorContainer, StyledErrorText } from '../reusableInput/styles';

interface ICustomCalendarProps {
  fieldName: string;
  setIsCalendarOpen: (value: boolean) => void;
  isCalendarOpen: boolean;
  placeHolder: string;
}

const CustomCalendar: FC<ICustomCalendarProps> = ({
  fieldName,
  setIsCalendarOpen,
  isCalendarOpen,
  placeHolder,
}) => {
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState<string | null>(null);
  const [field, meta, helpers] = useField(fieldName);

  const formatDate = (date: Date) => {
    return date.toString().split(' ', 4).join(' ');
  };

  const onDatePicked = (value: Date, event: any) => {
    setFormattedDate(formatDate(value)!);
    setDate(value);
    setIsCalendarOpen(false);
    helpers.setValue(value);
  };

  return (
    <>
      <label>Date</label>
      <StyledCalendarInput
        onClick={() => setIsCalendarOpen(true)}
        isPlaceHolder={formattedDate}
      >
        <span>{formattedDate ? formattedDate : placeHolder}</span>
      </StyledCalendarInput>
      {isCalendarOpen && (
        <StyledOverlay
          onClick={(e) => {
            setIsCalendarOpen(false);
            helpers.setTouched(true);
          }}
        >
          <div onClick={(e: any) => e.stopPropagation()}>
            <Calendar onChange={onDatePicked} value={date} />
          </div>
        </StyledOverlay>
      )}
      <StyledErrorContainer>
        {meta.error && meta.touched && (
          <StyledErrorText>{meta.error}</StyledErrorText>
        )}
      </StyledErrorContainer>
    </>
  );
};

export default CustomCalendar;
