import styled, { css } from 'styled-components';

import { CardStyleProps } from 'types/Card';

export const Wrapper = styled.div`
  position: relative;
  display: block;

  max-width: 35.9rem;
  width: 100%;
  margin: 0.5rem;
  padding: 0.5rem;

  .skeleton,
  img {
    position: relative;
    border-radius: 1rem;
    padding: 0.5rem;
  }
`;

const CardModifiers = {
  isLoading: { opacity: 0, height: 0, width: 0 },
  normal: { opacity: 1, height: 'auto', width: 'auto' }
};

export const Card = styled.div<CardStyleProps>`
  ${({ loading }) => css`
    ${loading ? CardModifiers.isLoading : CardModifiers.normal}
  `}
  transition: all 0.3s ease-in-out;
`;
