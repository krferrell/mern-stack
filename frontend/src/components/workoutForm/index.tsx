import { Formik, FormikProps } from 'formik';
import { useState } from 'react';
import CustomCalendar from '../calendar';
import { StyledForm, StyledSubmitButton } from '../calendar/styles';
import { ReusableInput } from '../reusableInput';
import validationSchema from './schema';
import { useCreateWorkoutMutation } from '../../api/workoutApi/workoutApi';

export interface IWorkoutValues {
  title: string;
  weight: string;
  reps: string;
  date: Date;
}

const WorkoutForm = ({ date }: { date: Date }) => {
  const [createWorkout, result] = useCreateWorkoutMutation();

  return (
    <Formik
      initialValues={{
        title: '',
        weight: '',
        reps: '',
        date: date,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => createWorkout(values)}
    >
      {(formikProps: FormikProps<IWorkoutValues>) => {
        const { values, errors, touched } = formikProps;
        const canSubmit: boolean =
          !!values.title &&
          !!values.weight &&
          !!values.reps &&
          !!values.date &&
          Object.keys(errors).length === 0;

        return (
          <StyledForm>
            <ReusableInput
              label='Exercise'
              placeHolder='Bench Press'
              fieldName='title'
              formikProps={formikProps}
              value={values.title}
              touched={touched.title}
              errors={errors.title}
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
            <StyledSubmitButton
              disabled={!canSubmit}
              onClick={(e) => {
                e.preventDefault();
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
