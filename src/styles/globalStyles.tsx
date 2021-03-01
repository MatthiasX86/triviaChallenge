import {createGlobalStyle, css} from "styled-components";
import {Colors} from "./mixins";

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

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 90px;
    color: ${Colors.white};
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    line-height: 1.2;
    text-align: center;
    letter-spacing: 0px;
  }

  h2 {
    line-height: 1.2;
    font-weight: 600;
    font-style: normal;
    font-family: "Poppins", serif;
    color: ${Colors.white};
    letter-spacing: 0.8px;
    font-size: 28px;
    text-align: center;
    margin-bottom: 25px;
  }
`
