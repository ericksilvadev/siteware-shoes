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
        strong {
          font-size: 1.5rem;
        }
      }
    }
  }
`;
