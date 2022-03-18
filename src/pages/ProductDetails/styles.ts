import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% -3.5rem);
  height: 100%;
  display: grid;
  place-items: center;

  margin: 4rem 0 0 3.5rem;
  padding: 3rem;
`;

export const Content = styled.main`
  width: 90%;
  min-height: 37rem;
  height: 60vh;
  padding: 1.5rem;
  max-width: 1300px;
  background-color: var(--color-box-background);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;
  align-items: center;

  .heading {
    min-width: 560px;
    align-self: center;
    height: 100%;

    h1 {
      font-weight: 500;
    }

    .images {
      margin-top: 2rem;
      display: flex;

      .miniatures {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 6rem;

        img {
          width: 100%;

          &:nth-child(2),
          &:nth-child(5) {
            transform: rotateY(180deg);
          }
          &:nth-child(3) {
            transform: rotateX(180deg);
          }
          &:nth-child(4) {
            transform: rotate(180deg);
          }
        }
      }

      > img {
        margin-left: 1.5rem;
        width: 80%;
        max-width: 500px;
        max-height: 500px;
      }
    }
  }

  .details {
    width: 22rem;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      font-size: 1.2rem;
    }

    .sale-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .sale-label {
        margin-left: 0.7rem;
      }

      .sale {
        color: var(--color-sale);
        background-color: var(--color-sale-background);
        padding: 0.6rem;
        border: 1px solid var(--color-sale);
        width: 100%;

        &.purple {
          color: var(--color-sale-secondary);
          border-color: var(--color-sale-secondary);
          background-color: var(--color-sale-secondary-background);
        }
      }
    }

    .colors-list,
    .sizes-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      width: 100%;
      margin-top: 0.5rem;

      button {
        background-color: transparent;
        border: 1px solid var(--color-border);
        border-radius: 100px;
        padding: 0.4rem 1rem;
        font-size: 0.9rem;
        cursor: pointer;

        &.selected {
          border-color: #006eff;
        }
      }
    }

    .rating {
      display: flex;
      flex-direction: column;

      .rating-stars {
        margin-left: -4px;
      }
    }
  }

  .pricing {
    align-self: flex-start;
    margin-top: 3.5rem;
    width: 12rem;

    .default-price {
      color: var(--color-text-complementary);
      font-size: 0.9rem;
      text-decoration: line-through;
    }

    .price {
      display: block;
      font-size: 2.2rem;
      font-weight: 500;
    }

    button {
      height: 3rem;
      font-size: 1.1rem;
      margin-top: 1rem;

      img {
        width: 1.6rem;
        height: 1.6rem;
      }
      a {
        color: white;
      }
    }
  }
`;
