import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #e31b23;
    --color-primary-light: #f2e7e7;
    --color-accent: #309e16;
    --color-accent-darker: #2e9414;
    --color-sale-secondary: #7b1adc;
    --color-sale: #f2790f;
    --color-background: #f7f7f7;
    --color-box-background: #fff;
    --color-text: #333;
    --color-text-complementary: #8a8a8a;
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
  }

  .icon {
    width: 1rem;
    height: 1rem;
  }
`;
