import styled, { css } from 'styled-components'
import { ButtonVariant } from '.';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  
  background-color: ${props => props.theme['green-300']};

  /* ${({ variant }) => css`
    background-color: ${buttonVariants[variant]}
  `} */
`;