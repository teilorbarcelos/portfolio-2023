import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }
    body {
        background: ${(props) => props.theme.backgroundColor};
    }
`;
