import { Formik, FormikProps } from 'formik';
import { StyledForm, StyledSubmitButton } from "../calendar/styles";
import { ReusableInput } from "../reusableInput";
import validationSchema from "./schema";

export interface IWorkoutValues {
  duration: string;
  date: string;
}

const WorkoutForm = () => {

  const handleSubmit = (values: IWorkoutValues) => {
    // @TODO pass data to new workout page
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
      {(formikProps: FormikProps<IWorkoutValues>) => {
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
