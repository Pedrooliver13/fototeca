import styled from 'styled-components';
import * as C from 'styles/constants';

export const Wrapper = styled.footer`
  width: 100%;
  font-size: 1.6rem;
  margin-top: 20rem;

  .infos {
    display: flex;
    line-height: 2;

    ul + ul {
      margin-left: 4rem;
    }

    ul li:first-child {
      font-weight: bold;
      line-height: 3;
    }
    ul:last-child {
      margin-left: auto;
    }

    @media (max-width: ${C.MD}) {
      display: none;
    }
  }

  .copy {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    color: ${C.COLOR_GRAY_DARK};
    border-top: 1px solid ${C.COLOR_GRAY_LIGHT};

    margin-top: 5rem;
    padding: 2rem 1rem;

    &_heart {
      color: red;
    }

    span {
      font-weight: bold;
    }

    @media (max-width: ${C.SM}) {
      font-size: 1.3rem;
      line-height: 2;
      justify-content: center;
    }
  }
`;
