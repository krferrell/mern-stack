import styled from 'styled-components';
import { Field } from 'formik';

export const StyledField = styled(Field)`
  width: 250px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid lavender;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledErrorContainer = styled.div`
  height: 20px;
  margin-bottom: 10px;
`;

export const StyledErrorText = styled.span`
  color: red;
  font-size: 16px;
`;
