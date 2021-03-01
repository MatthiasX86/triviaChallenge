import {createGlobalStyle, css} from "styled-components";
import {Colors, UIStyles} from "./mixins";

const Reset = css`
  {/* 
    http://meyerweb.com/eric/tools/css/reset/ 
     v2.0 | 20110126
     License: none (public domain)
  */}


  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

export const GlobalStyles = createGlobalStyle`
  ${Reset}

  p, span {
    letter-spacing: 0px;
    color: ${Colors.black};
    text-align: center;
    line-height: 1.8;
    font-size: 22px;
    font-weight: 600;
    font-style: normal;
    font-family: "Poppins", serif;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 90px;
    color: ${Colors.white};
    text-shadow: ${UIStyles.textShadow};
    line-height: 1.2;
    text-align: center;
    letter-spacing: 0px;
  }

  h2 {
    line-height: 1.2;
    font-weight: 600;
    font-style: normal;
    font-family: "Poppins", sans-serif;
    color: ${Colors.white};
    letter-spacing: 0.8px;
    font-size: 28px;
    text-align: center;
    margin-bottom: 25px;
  }

  h3 {
    font-weight: 600;
    font-style: normal;
    font-family: "Poppins", serif;
    letter-spacing: 0px;
    line-height: 1.2;
    color: ${Colors.white};
    font-size: 20px;
    text-align: center;
  }

  h4 {
    color: ${Colors.white};
    line-height: 1.2;
    letter-spacing: 0;
    font-weight: 400;
    font-style: normal;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.8px;
    font-size: 14px;
    text-align: center;
  }

  button {
    border: none;
    background-color: ${Colors.white};
    width: 274px;
    height: 60px;
    box-shadow: ${UIStyles.boxShadow};
    background-color: #ffffff;
    border-radius: 30px;
  }
`
