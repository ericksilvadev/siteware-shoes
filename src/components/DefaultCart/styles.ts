import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  .products-list {
    width: 65%;
  }

  .resume {
    height: 15rem;
    width: 35%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .price-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.2rem;

      span {
        color: var(--color-text-complementary);
      }

      strong {
        font-size: 1.1rem;
      }

      &.total {
        margin: 0.5rem 0;
        align-items: center;
        strong {
          font-size: 1.5rem;
        }
      }
    }

    button {
      font-size: 1rem;
    }
  }
`;
