import styled from 'styled-components';
import * as C from 'styles/constants';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5rem;

  button {
    background: ${C.COLOR_GRAY_DARK};
    height: 3rem;
    padding: 5rem;
    color: #fff;
    border-radius: 5px;
    border: 0;
    margin: 0 2px;
    cursor: pointer;
    border: 2px solid transparent;
    outline: 0;
    font-size: 1rem;
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
      display: none;
      background: #000;
      font-weight: bold;
      letter-spacing: 1px;
      &:hover {
        background: ${C.COLOR_PRIMARY};
        color: #fff;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
      }
    }
  }
  div {
    > button {
      &.active {
        background: ${C.COLOR_SECONDARY};
        color: #fff;
        border: 2px solid ${C.COLOR_GRAY};
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
      }
    }
  }
  @media (min-width: ${C.SM}) {
    justify-content: space-between;
    button {
      font-size: 1rem;
      padding: 5px 10px;
      &.prev,
      &.next {
        display: inherit;
      }
    }
  }
`;
