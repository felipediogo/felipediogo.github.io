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
      font-family: ${fonts.FiraCode};
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
        color: ${colors.tacha}
      }

      &.title {
        font-size: 64px;
        line-height: 1.1;
        margin: 0;
        ${media.desktop`font-size: 50px;`};
        ${media.tablet`font-size: 40px;`};
      }
    }

    p {
      color: ${colors.royalPurple}
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
`;

export default GlobalStyle;
