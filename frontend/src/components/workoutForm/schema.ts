import { errorMessages } from '../../utils/constants';
import { IWorkoutValues } from './index';

import * as Yup from 'yup';

const validationSchema: Yup.Schema<IWorkoutValues> = Yup.object().shape({
  exercise: Yup.string().required(errorMessages.REQUIRED),
  weight: Yup.string().required(errorMessages.REQUIRED),
  reps: Yup.string().required(errorMessages.REQUIRED),
  date: Yup.string().required(errorMessages.REQUIRED),
});

export default validationSchema;
