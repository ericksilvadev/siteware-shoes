import styled from 'styled-components';

export const Lable = styled.span`
  position: relative;
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
    border-left: 0.8rem solid transparent;
    border-right: 0.8rem solid transparent;

    border-bottom: 1.3rem solid var(--color-sale);

    position: absolute;
    left: -0.7rem;
    bottom: 0;
  }

  &.purple {
    background-color: var(--color-sale-secondary);

    &::before {
      border-bottom: 1.3rem solid var(--color-sale-secondary);
    }

    &::after {
      border-bottom: 1.3rem solid var(--color-sale-secondary);
    }
  }
`;
