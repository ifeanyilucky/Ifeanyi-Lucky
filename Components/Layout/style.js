import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body, html, p, div, link, button {
    background-color: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text} !important;
   
}
`;

const FontToken = css`
  @media (min-width: 787px) {
    --font-sm: 0.875em;
    --font-md: 1.124em;
    --font-x-md: 1.667em;
    --font-x-lg: 3.275em;
  }
  @media (max-width: 787px) {
    --font-sm: 0.813em;
    --font-md: 1.011em;
    --font-x-md: 1.517em;
    --font-x-lg: 2.775em;
  }
`;
const LightTheme = css`
  :root {
    --bg: #fff4e9;
    --button-index: #f3e5d9;
    --cw: #000;
    --invert: 0;
    --mark: #f9ede2;
    --theme-amount: 0;
    --gray: #b9ad9a;
    --pattern: transparent;
    --light-gray: #dedede;
    --lighter-gray: #f5f5f5;
    --article-color: #545454;
    --header-bg: rgba(255, 255, 255, 0.8);
    --token: #666;
    --border-color: #e8dacf;
    --sidebar-tag: #efd6c1;
    --gray-alpha: #f7e4d4;
    --sidebar-cta: #ea4e1c;
    --nav-link: rgba(0, 0, 0, 0.5);
    --timeline: #eadfd6;
    ${FontToken}
  }
`;

export const DarkTheme = {
  body: "#121212",
  text: "#fff",
};

export const BodyStyling = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap');
${(props) => (props.theme ? DarkTheme : LightTheme)}
::selection {
    background: var(--token);
    color: #fff;
}
`;
