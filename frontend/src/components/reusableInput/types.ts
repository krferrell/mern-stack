import { IWorkoutValues } from '../workoutForm';
import { InputHTMLAttributes } from 'react';
import { FormikProps } from 'formik';

export interface IReusableInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeHolder: string;
  fieldName: string;
  formikProps: FormikProps<IWorkoutValues>;
  value: string;
  errors: string | undefined;
  touched: boolean | undefined;
}
