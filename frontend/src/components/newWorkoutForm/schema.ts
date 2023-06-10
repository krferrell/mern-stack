import { errorMessages } from '../../utils/constants';
import { INewWorkoutValues } from "./index";

import * as Yup from "yup";

const validationSchema: Yup.Schema<INewWorkoutValues> = Yup.object().shape({
  date: Yup.string().required(errorMessages.REQUIRED),
  duration: Yup.string().required(errorMessages.REQUIRED),
});

export default validationSchema;