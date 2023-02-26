import { Formik, Field, Form, FormikHelpers, FormikProps } from 'formik';
import { useState } from 'react';
import CustomCalendar from '../calendar';

export interface IWorkoutValues {
  exercise: string;
  weight: number;
  repetitions: number;
  date: string;
}

const WorkoutForm = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  return (
    <Formik
      initialValues={{
        exercise: '',
        weight: 0,
        repetitions: 0,
        date: '',
      }}
      onSubmit={(
        values: IWorkoutValues,
        { setSubmitting }: FormikHelpers<IWorkoutValues>
      ) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {(formikProps: FormikProps<IWorkoutValues>) => {
        const { values, errors } = formikProps;
        const canSubmit: boolean =
          !!values.exercise &&
          !!values.weight &&
          !!values.repetitions &&
          !!values.date;
        return (
          <Form
            style={{ display: 'flex', flexDirection: 'column', width: '500px' }}
          >
            <label htmlFor='exercise'>Exercise</label>
            <Field id='exercise' name='exercise' placeholder='Bench Press' />
            <label htmlFor='weight'>Weight</label>
            <Field id='weight' name='weight' placeholder='125' />
            <label htmlFor='repetitions'>Repetitions</label>
            <Field id='repetitions' name='repetitions' placeholder='10' />
            <CustomCalendar
              fieldName='date'
              isCalendarOpen={isCalendarOpen}
              setIsCalendarOpen={setIsCalendarOpen}
            />
            <button type='submit' disabled={!canSubmit}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default WorkoutForm;
