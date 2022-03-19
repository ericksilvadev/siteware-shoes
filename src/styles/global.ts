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

  h1, strong {
    font-weight: 500;
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
  
  .default-box {
    background-color: var(--color-box-background);
    border: 1px solid var(--color-border);
    border-radius: 10px;
    box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.2);
  }
`;
