import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  padding: 1rem;
  width: 100%;
  height: 15rem;

  + section {
    margin-top: 1rem;
  }

  .sale-label {
    position: absolute;
    left: -0.5rem;
    top: 0.5rem;

    transform: scale(0.95);
  }

  .main-content {
    display: flex;
    justify-content: space-between;
    height: 80%;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;

      img {
        height: 80%;
      }

      .info {
        margin-left: 1.5rem;

        span {
          color: var(--color-text-complementary);
          line-height: 1.9rem;

          strong {
            color: var(--color-text);
          }
        }
      }
    }

    .delete-item {
      cursor: pointer;
      background-color: transparent;
      border: none;
      align-self: flex-start;
    }
  }

  .quantity-and-price {
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .quantity-change {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      button {
        width: 1.3rem;
        height: 1.3rem;
        border: solid 1px var(--color-border);
        border-radius: 50%;
        background-color: var(--color-box-background);
        font-size: 1.3rem;
        cursor: pointer;

        display: flex;
        justify-content: center;

        &:active {
          background-color: #f7f7f7;
        }

        &:nth-child(1) span {
          transform: translateY(-0.3rem);
        }
        &:nth-child(3) span {
          transform: translateY(-0.18rem);
        }
      }

      input {
        width: 2rem;
        height: 2rem;
        background-color: var(--color-box-background);
        border: 1px solid var(--color-border);
        border-radius: 5px;
        text-align: center;
      }
    }

    .sale-info {
      color: var(--color-sale);

      &.purple {
        color: var(--color-sale-secondary);
      }
    }

    .price-info {
      color: var(--color-text-complementary);
      font-size: 0.9rem;

      strong {
        color: var(--color-text);
        font-size: 1.2rem;
      }
    }
  }
`;
