import { createGlobalStyle } from "styled-components";

import Fonts from "./fonts";
import theme from "../styles/theme";
import media from "./media";

const { colors, fonts, fontSizes } = theme;

const GlobalStyle = createGlobalStyle`
    ${Fonts}
    html {
        box-sizing: border-box;
        width: 100%;
        scroll-behavior: smooth;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
    }

    body {
      margin: 0;
      width: 100%;
      min-height: 100%;
      overflow-x: hidden;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      background-color: ${colors.blackRock};
      color: ${colors.lavenderPurple};
      line-height: 1.3;
      font-family: ${fonts.Calibre};
      font-size: ${fontSizes.xl};
      ${media.phablet`font-size: ${fontSizes.lg};`}
    }

    ::selection {
      background-color: ${colors.jacarta}
    }

    #root {
      min-height: 100%;
      display: grid;
      grid-template-rows: 1fr auto;
      grid-template-columns: 100%;
    }

    h1 {
      &.big-title {
        font-size: 80px;
        line-height: 1.1;
        margin: 0;
        ${media.desktop`font-size: 70px;`};
        ${media.tablet`font-size: 60px;`};
        ${media.phablet`font-size: 50px;`};
        ${media.phone`font-size: 40px;`};
        font-family: ${fonts.FiraCode};
        color: ${colors.tacha}
      }

      &.title {
        font-size: 64px;
        line-height: 1.1;
        margin: 0;
        font-family: ${fonts.FiraCode};
        ${media.desktop`font-size: 50px;`};
        ${media.tablet`font-size: 40px;`};
      }

      &.header {
        font-size: 42px;
        color: ${colors.tacha};
        font-family: ${fonts.FiraCode};
        line-height: 1.1;
        margin: 0;
        ${media.tablet`font-size: 32px;`};
      }
    }

    p {
      color: ${colors.royalPurple};
      text-align: justify;
      text-justify: inter-word;
    }

    ul {
      font-size: 14px;
      font-family: ${fonts.SFMono};
      width: 100%;
    }

    a {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      color: inherit;
      position: relative;
      transition: ${theme.transition};
      cursor: pointer;

      &:hover,
      &:focus {
        color: ${colors.green};
      }
    }

    .navigation {
      padding-top: 8px;
      margin-left: auto;
      margin-right: auto;
      max-width: 832px;
      width: 100%;

    }

    .navigation > ul {
      display: flex;
      padding-inline-start: 0px;
      justify-content: space-between;
      ${media.desktop`
        justify-content: space-around;
      `};
    }

    .navigation > ul > li {
      list-style-type: none;
      display: inline;
    }

    .navigation > ul > li > a {
      font-weight: 900;
      color: black;
    }
`;

export default GlobalStyle;
