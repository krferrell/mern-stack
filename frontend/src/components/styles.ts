import styled from 'styled-components';

interface IStyledButtonProps {
  backgroundColor?: string;
  color?: string;
}

export const StyledButton = styled.div<IStyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 150px;
  border-radius: 40px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'lavender'};
  color: ${({ color }) => (color ? color : 'black')};
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
`;
