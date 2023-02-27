import { FC } from 'react';
import {
  StyledErrorContainer,
  StyledErrorText,
  StyledField,
  StyledInputContainer,
} from './styles';
import { IReusableInputProps } from './types';

export const ReusableInput: FC<IReusableInputProps> = ({
  formikProps: { handleBlur, handleChange },
  label,
  placeHolder,
  fieldName,
  value,
  errors,
  touched,
}) => {
  return (
    <StyledInputContainer>
      <label>{label}</label>
      <StyledField
        id={fieldName}
        name={fieldName}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={placeHolder}
      />
      <StyledErrorContainer>
        {errors && touched && <StyledErrorText>{errors}</StyledErrorText>}
      </StyledErrorContainer>
    </StyledInputContainer>
  );
};
