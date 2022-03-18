import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin-top: 1.5rem;
    padding: 0 2rem 0 calc(2rem + 3.5rem);
    width: 80%;
    max-width: 1600px;

    color: var(--color-primary);
    font-weight: 400;
  }
`;
