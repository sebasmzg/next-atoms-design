"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
    };
    body {
        min-height: 100vh;
        width: 100%;
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        background: linear-gradient(
        to bottom,
        ${(props) => props.theme.colors.background.gradient.lightPurple},
        ${(props) => props.theme.colors.background.gradient.pink},
        ${(props) => props.theme.colors.background.gradient.red}
    );
    }
`;
