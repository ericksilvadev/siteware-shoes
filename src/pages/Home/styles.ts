import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin-top: 1rem;
    width: 70%;
    max-width: 1350px;

    color: var(--color-primary);
    font-weight: 400;
  }
`;
