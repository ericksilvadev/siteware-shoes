import styled from 'styled-components';

export const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 3.5rem;
  background-color: var(--color-primary);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 0;

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    filter: invert(100%);
  }

  .logo {
    width: 100%;
    height: auto;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  h1 {
    font-size: 2rem;
    position: absolute;
    top: 0.5rem;
    right: -15.3rem;
    width: 14rem;
    color: var(--color-primary);
    font-weight: 400;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

    .icon-container {
      width: 85%;
      border-radius: 3px;
      padding: 0.3rem 0;

      display: flex;
      align-items: center;
      justify-content: center;

      &.selected {
        background-color: white;

        .icon {
          filter: invert(0%);
        }
      }
      + div {
        margin-top: 1rem;
      }
    }

    .popup-nav {
      position: fixed;
      top: 0;
      z-index: -1;
      left: -20rem;
      height: 100vh;
      background-color: var(--color-primary-light);
      width: 16rem;
      padding: 4.9rem 1rem;
      list-style-type: none;
      opacity: 0;

      box-shadow: 2px 0 8px 2px rgba(0, 0, 0, 0.2);
      transition: all 0.4s;
      li {
        margin-top: 1.38rem;
        width: 111%;
        height: 2rem;

        a {
          display: flex;
          border-radius: 0 3px 3px 0;

          align-items: center;

          padding-left: 0.5rem;
          color: var(--color-text);
          height: 100%;

          &.selected {
            box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.1);
            background-color: white;
          }
        }
      }

      &.show {
        opacity: 1;
        left: 3.5rem;
      }

      &:hover {
        opacity: 1;
        left: 3.5rem;
      }
    }
  }
`;
