import styled from 'styled-components';

interface CardProps {
  loading?: string;
}

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

export const Card = styled.div`
  ${(props: CardProps) =>
    props.loading === 'isLoading'
      ? { opacity: 0, height: 0, width: 0 }
      : { opacity: 1, height: 'auto', width: 'auto' }};
`;
