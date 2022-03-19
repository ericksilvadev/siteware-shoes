import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 1.5rem;
  width: 30%;
  min-width: 350px;
  margin: 0 auto;
  height: 13rem;

  h2 {
    font-weight: 500;
  }

  p {
    font-size: 1.1rem;
    color: var(--color-text-complementary);
  }

  a {
    width: 100%;
  }
`;
