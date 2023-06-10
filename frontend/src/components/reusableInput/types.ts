import { INewWorkoutValues } from "../newWorkoutForm";
import { InputHTMLAttributes } from "react";
import { FormikProps } from "formik";

export interface IReusableInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeHolder: string;
  fieldName: string;
  formikProps: FormikProps<INewWorkoutValues>;
  value: string;
  errors: string | undefined;
  touched: boolean | undefined;
}
