import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        -webkit-transition: 0.5s;
        transition: 0.5s;
    }
    body {
        background: ${(props) => props.theme.backgroundColor};
    }
`;
