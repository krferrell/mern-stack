import { Formik, FormikHelpers, FormikProps } from 'formik';
import { useState } from 'react';
import CustomCalendar from '../calendar';
import { StyledForm, StyledSubmitButton } from '../calendar/styles';
import { ReusableInput } from '../reusableInput';
import validationSchema from './schema';

export interface IWorkoutValues {
  exercise: string;
  weight: string;
  reps: string;
  date: string;
}

const WorkoutForm = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  return (
    <Formik
      initialValues={{
        exercise: '',
        weight: '',
        reps: '',
        date: '',
      }}
      validationSchema={validationSchema}
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
        const { values, errors, touched } = formikProps;
        const canSubmit: boolean =
          !!values.exercise &&
          !!values.weight &&
          !!values.reps &&
          !!values.date &&
          Object.keys(errors).length === 0;

        return (
          <StyledForm>
            <ReusableInput
              label='Exercise'
              placeHolder='Bench Press'
              fieldName='exercise'
              formikProps={formikProps}
              value={values.exercise}
              touched={touched.exercise}
              errors={errors.exercise}
            />
            <ReusableInput
              label='Weight'
              placeHolder='135'
              fieldName='weight'
              formikProps={formikProps}
              value={values.weight}
              touched={touched.weight}
              errors={errors.weight}
            />
            <ReusableInput
              label='Reps'
              placeHolder='12'
              fieldName='reps'
              formikProps={formikProps}
              value={values.reps}
              touched={touched.reps}
              errors={errors.reps}
            />
            <CustomCalendar
              fieldName='date'
              isCalendarOpen={isCalendarOpen}
              setIsCalendarOpen={setIsCalendarOpen}
              placeHolder={'Fri Jan 14 2006'}
            />
            <StyledSubmitButton
              type='submit'
              disabled={!canSubmit}
              onClick={() => {
                formikProps.handleSubmit();
              }}
            >
              Submit
            </StyledSubmitButton>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default WorkoutForm;
