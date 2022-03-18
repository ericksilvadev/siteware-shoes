import styled from 'styled-components';

export const Container = styled.section`
  a {
    position: relative;
    width: 16rem;
    background-color: var(--color-box);
    padding: 1.4rem;
    border-radius: 10px;
    border: 1px solid var(--color-text-complementary);
    box-shadow: 0 4px 5px 2px rgba(0, 0, 0, 0.1);

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
      font-weight: 600;
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
        font-weight: 600;
      }
    }

    button {
      margin-top: 0.5rem;
    }
  }
`;
