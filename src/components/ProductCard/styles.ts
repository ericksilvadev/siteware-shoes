import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  z-index: -1;
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

  .sale {
    position: absolute;
    top: 1rem;
    left: 0;
    background-color: var(--color-sale);
    color: white;
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
    border-radius: 0 100px 100px 0;

    &::before {
      // Reference: CSS Triangle https://css-tricks.com/snippets/css/css-triangle/
      content: '';
      width: 0;
      height: 0;
      border-left: 13px solid transparent;
      border-right: 13px solid transparent;

      border-bottom: 20px solid var(--color-sale);

      position: absolute;
      left: -0.7em;
      top: 0;
      transform: rotate(180deg);
    }

    &::after {
      // Reference: CSS Triangle https://css-tricks.com/snippets/css/css-triangle/
      content: '';
      width: 0;
      height: 0;
      border-left: 13px solid transparent;
      border-right: 13px solid transparent;

      border-bottom: 20px solid var(--color-sale);

      position: absolute;
      left: -0.7rem;
      bottom: 0;
    }

    &.purple {
      background-color: var(--color-sale-secondary);

      &::before {
        border-bottom: 20px solid var(--color-sale-secondary);
      }

      &::after {
        border-bottom: 20px solid var(--color-sale-secondary);
      }
    }
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
`;
