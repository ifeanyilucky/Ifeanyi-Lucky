import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body, html, p, div, link, button {
    background-color: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text} !important;
   
}
`;

export const LightTheme = {
  body: "#fff",
  text: "#121212",
};

export const DarkTheme = {
  body: "#121212",
  text: "#fff",
};
