import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;

    .download {
      background: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.body};
    }

    .downloadText {
      color: ${({ theme }) => theme.text};
    }
  }
  `;
