import { errorMessages } from '../../utils/constants';
import { IWorkoutValues } from './index';

import * as Yup from 'yup';

const validationSchema: Yup.Schema<IWorkoutValues> = Yup.object().shape({
  date: Yup.string().required(errorMessages.REQUIRED),
  duration: Yup.string().required(errorMessages.REQUIRED),
});

export default validationSchema;
