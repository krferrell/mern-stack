import styled from 'styled-components';
import { Form } from 'formik';

export const StyledCalendarInput = styled.div<{ isPlaceHolder: string | null }>`
  width: 250px;
  border-radius: 5px;
  border: 1px solid lavender;
  color: ${({ isPlaceHolder }) => (isPlaceHolder ? 'black' : 'grey')};
  span {
    padding: 8px;
    display: block;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

export const StyledSubmitButton = styled.button<{ disabled: boolean }>`
  padding: 5px;
  border-radius: 50px;
  border: 1px solid black;
  background-color: ${({ disabled }) => (disabled ? 'grey' : 'lavender')};
  width: 50%;
  align-self: center;
  margin-top: 30px;
`;

export const StyledOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
