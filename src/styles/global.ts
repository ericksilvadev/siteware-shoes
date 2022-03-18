import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #e31b23;
    --color-primary-light: #f2e7e7;
    --color-accent: #309e16;
    --color-accent-darker: #2e9414;
    --color-sale-secondary: #7b1adc;
    --color-sale-secondary-background: #7b1adc33;
    --color-sale: #f2790f;
    --color-sale-background: #f2790f33;
    --color-background: #f7f7f7;
    --color-box-background: #fff;
    --color-text: #333;
    --color-text-complementary: #8a8a8a;
    --color-border: #acacac;
  }

  * {
    padding: 0;
    margin: 0;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: system-ui, sans-serif;
    color: var(--color-text);
    background-color: var(--color-background);
  }

  .icon {
    width: 1rem;
    height: 1rem;
  }

  button.green {
    background-color: var(--color-accent);
    border: none;
    cursor: pointer;
    height: 2.2rem;
    border-radius: 5px;
    width: 100%;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.2s;

    img {
      filter: invert(100%);
      width: 1.2rem;
      height: 1.2rem;
      margin-right: 0.5rem;

      transform: translateY(-2px);
    }
    &:hover {
      background-color: var(--color-accent-darker);
    }
  }

  .sale-label {
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
  }
`;
