import styled from 'styled-components';
import * as C from 'styles/constants';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5rem;
  width: 100%;
  height: 45rem;
  font-size: 5rem;
  font-weight: bold;

  .content {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 65%;

    @media (max-width: ${C.MD}) {
      width: inherit;
    }
  }

  .title {
    margin-bottom: 2rem;

    span {
      font-size: 1.5rem;
      color: ${C.COLOR_GRAY_DARK};

      @media (max-width: ${C.MD}) {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: ${C.MD}) {
    font-size: 2rem;
    height: 30rem;
    padding: 1rem;
  }
`;
