import styled from 'styled-components';
import * as C from 'styles/constants';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5rem;

  button {
    display: inline-flex;
    align-items: center;
    background: ${C.COLOR_GRAY_DARK};
    color: #fff;
    border: 0;
    font-size: 1.2rem;
    padding: 1.2rem;
    margin: 0 0.2rem;
    cursor: pointer;
    border-radius: 0.5rem;
    border: 0.2rem solid transparent;
    outline: 0;
    transition: 0.4s all ease;

    &:hover {
      background: ${C.COLOR_SECONDARY};
      color: #fff;
    }
    &.disable {
      visibility: hidden;
    }

    &.prev,
    &.next {
      display: flex;
      background: #000;
      font-weight: bold;
      letter-spacing: 0.1rem;
      &:hover {
        background: ${C.COLOR_PRIMARY};
        color: #fff;
        box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.4);
      }
    }
  }
  div {
    > button {
      &.active {
        background: ${C.COLOR_SECONDARY};
        color: #fff;
        box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.3);
      }
    }
  }

  @media (max-width: ${C.MD}) {
    justify-content: center;

    button {
      font-size: 1rem;
      padding: 1rem;
      margin: 0 0.2rem;

      &.prev,
      &.next,
      &.hidden__md {
        display: none;
      }
    }
  }
`;
