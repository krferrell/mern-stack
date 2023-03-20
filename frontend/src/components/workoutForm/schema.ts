import { errorMessages } from '../../utils/constants';
import { IWorkoutValues } from './index';

import * as Yup from 'yup';

const validationSchema: Yup.Schema<IWorkoutValues> = Yup.object().shape({
  title: Yup.string().required(errorMessages.REQUIRED),
  weight: Yup.string().required(errorMessages.REQUIRED),
  reps: Yup.string().required(errorMessages.REQUIRED),
  date: Yup.date().required(errorMessages.REQUIRED),
});

export default validationSchema;
