import { Formik, FormikProps } from 'formik';
import { StyledForm, StyledSubmitButton } from "../calendar/styles";
import { ReusableInput } from "../reusableInput";
import { useState } from "react";
import validationSchema from "./schema";

export interface IWorkoutValues {
  duration: string;
  date: string;
  exercises: IExercise[];
}

export interface IExercise {
  name: string;
  repetitions: string;
  weight: string;
  rpe: string;
}

export interface INewWorkoutValues {
  date: string;
  duration: string;
}

const WorkoutForm = () => {
  const [newWorkoutValues, setNewWorkoutValues] = useState<INewWorkoutValues>({
    date: "",
    duration: "",
  });
  const handleSubmit = (values: INewWorkoutValues) => {
    setNewWorkoutValues(values);
  };

  return (
    <Formik
      initialValues={{
        date: "",
        duration: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {(formikProps: FormikProps<INewWorkoutValues>) => {
        const { values, errors, touched } = formikProps;
        const canSubmit: boolean =
          !!values.duration &&
          !!values.date &&
          Object.keys(errors).length === 0;

        return (
          <StyledForm>
            <ReusableInput
              label="Date"
              placeHolder="Date"
              fieldName="date"
              formikProps={formikProps}
              value={values.date}
              touched={touched.date}
              errors={errors.date}
            />
            <ReusableInput
              label="Duration"
              placeHolder="55"
              fieldName="duration"
              formikProps={formikProps}
              value={values.duration}
              touched={touched.duration}
              errors={errors.duration}
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
