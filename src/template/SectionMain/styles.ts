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
  }

  .title {
    margin-bottom: 2rem;

    span {
      font-size: 1.5rem;
      color: ${C.COLOR_GRAY};
    }
  }
`;
