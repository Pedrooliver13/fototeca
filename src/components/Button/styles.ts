import styled, { css } from 'styled-components';
import * as C from 'styles/constants';

type ButtonProps = {
  secondary?: boolean;
  disabled?: boolean;
};

const buttonModifier = {
  primary: {
    backgroundColor: `${C.COLOR_PRIMARY}`,
    color: `${C.COLOR_WHITE}`
  },
  secondary: {
    backgroundColor: `${C.COLOR_SECONDARY}`,
    color: `${C.COLOR_WHITE}`,
    borderRadius: '8rem',
    padding: '1rem 2rem'
  },
  disabled: {
    backgroundColor: `${C.COLOR_GRAY_LIGHT}`,
    color: `${C.COLOR_GRAY_DARK}`,
    cursor: 'none',
    pointerEvents: 'none'
  }
};

export const Wrapper = styled.a<ButtonProps>`
  font-size: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  transition: all 0.2s ease-in-out;

  ${({ secondary, disabled }) => css`
    ${!secondary && buttonModifier.primary}
    ${secondary && buttonModifier.secondary}
    ${disabled && buttonModifier.disabled}
  `}

  &:hover {
    cursor: pointer;
  }
`;
