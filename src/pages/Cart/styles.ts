import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 3.5rem);
  min-height: calc(100vh - 4rem);
  display: grid;
  place-items: center;

  margin: 4rem 0 0 3.5rem;
  padding: 3rem;
`;

export const Content = styled.main`
  width: 80%;
  max-width: 1300px;
  padding: 1.5rem;

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    button.clear {
      background-color: transparent;
      border: none;
      color: var(--color-primary);
      display: flex;
      align-items: center;
      cursor: pointer;

      img {
        margin-right: 0.5rem;
      }
    }
  }
`;
