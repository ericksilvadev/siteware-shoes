import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 50vh;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0 7px 4px rgba(0, 0, 0, 0.2);
  padding-bottom: 0.4rem;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  transition: background 0.4s;

  .button-wrapper {
    width: 1.2rem;
    height: 1.2rem;
    background-color: white;
    border-radius: 50%;

    display: grid;
    place-content: center;

    button {
      width: 0.8rem;
      height: 0.8rem;
      background-color: white;
      border: 2px solid var(--color-text);
      border-radius: 50%;
      cursor: pointer;

      &.selected {
        background-color: var(--color-text);
      }
    }

    + div {
      margin-left: 0.5rem;
    }
  }
`;
