import styled from 'styled-components';
import * as C from 'styles/constants';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  ul {
    width: 40%;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${C.COLOR_GRAY_DARK};

    li {
      cursor: pointer;
    }

    @media (max-width: ${C.MD}) {
      display: none;
    }
  }

  @media (max-width: ${C.MD}) {
    padding: 1rem;
  }
`;
