import styled, { css } from 'styled-components';

type CardProps = {
  loading?: boolean;
};

export const Wrapper = styled.div`
  position: relative;
  display: block;

  max-width: 36.9rem;
  width: 100%;
  margin: 2px;

  img {
    position: relative;
    border-radius: 1rem;
  }
`;

const CardModifiers = {
  isLoading: { opacity: 0, height: 0, width: 0 },
  normal: { opacity: 1, height: 'auto', width: 'auto' }
};

export const Card = styled.div<CardProps>`
  ${({ loading }) => css`
    ${loading ? CardModifiers.isLoading : CardModifiers.normal}
  `}
  transition: all 0.3s ease-in-out;
`;
