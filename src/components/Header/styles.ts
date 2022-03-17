import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: rgba(255, 255, 255, 0.2);
  height: 4rem;
  width: 100%;
  box-shadow: 0 1px 4px 2px rgba(0, 0, 0, 0.1);
  padding: 0 3rem 0 calc(2rem + 3rem);

  position: fixed;
  top: 0;

  h1 {
    color: var(--color-primary);
    font-weight: 400;
  }

  .search-input {
    position: relative;
    width: 40%;
    max-width: 30rem;

    input {
      height: 2.2rem;
      padding: 0 2rem 0 3rem;
      border: 1px solid var(--color-text-complementary);
      border-radius: 5px;
      width: 100%;

      &::placeholder {
        font-size: 1rem;
      }
    }

    .icon {
      position: absolute;
      left: 0.8rem;
      top: calc(50% - 0.5rem);
      filter: contrast(30%);
    }
  }

  .buttons {
    display: flex;
    align-items: center;

    div {
      padding: 0 1rem;
      display: flex;
      align-items: center;

      .icon {
        margin-right: 0.5rem;
      }
    }

    button {
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: 600;
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: 0.1s;

      + button {
        margin-left: 1rem;
      }

      &:hover {
        color: var(--color-primary);
      }
    }

    .login {
      border-right: 1px solid var(--color-text-complementary);
    }

    .cart {
      position: relative;
      padding-right: 0;

      .empty-cart {
        cursor: default;
        position: absolute;
        right: 0;
        bottom: -0.6rem;
        font-size: 0.7rem;
      }

      .items-quantity {
        position: absolute;
        right: -0.8rem;
        top: -0.8rem;

        font-size: 0.7rem;
        color: white;
        background-color: var(--color-accent);
        height: 1rem;
        width: 1rem;
        border-radius: 50%;

        text-align: center;
      }
    }
  }
`;
