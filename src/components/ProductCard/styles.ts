import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  width: 16rem;
  padding: 1.4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  .sale-label {
    position: absolute;
    top: 1rem;
    left: 0;
  }

  > img {
    width: 80%;
    align-self: center;
  }

  h1 {
    font-size: 1.3rem;
  }

  .pricing {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .default-price {
      align-self: flex-end;
      font-size: 0.9rem;
      text-decoration: line-through;
      color: var(--color-text-complementary);
    }

    .price {
      font-size: 1.7rem;
      font-weight: 500;
    }
  }

  button {
    margin-top: 0.5rem;
  }
`;
