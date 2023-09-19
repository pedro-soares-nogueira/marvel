import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.white};
    }

    body, input, textarea, button {
        font-family:  "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

`;

export const Container = styled.div`
  max-width: 1320px;
  margin: auto;
  padding: 0 24px;
`;
