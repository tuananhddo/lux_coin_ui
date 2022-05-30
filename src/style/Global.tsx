import { createGlobalStyle } from 'styled-components'
import Color from "style/color";

import Fonts from 'assets/font/font'

const GlobalStyle = createGlobalStyle`
 @font-face {
  font-family: 'OswaldBold';
  src: url(${Fonts.OswaldBold}) format('woff');
}
@font-face {
  font-family: 'OswaldExtraLight';
  src: url(${Fonts.OswaldExtraLight}) format('woff');
}
@font-face {
  font-family: 'OswaldLight';
  src: url(${Fonts.OswaldLight}) format('woff');
}
@font-face {
  font-family: 'OswaldMedium';
  src: url(${Fonts.OswaldMedium}) format('woff');
}
@font-face {
  font-family: 'OswaldRegular';
  src: url(${Fonts.OswaldRegular}) format('woff');
}
@font-face {
  font-family: 'OswaldSemiBold';
  src: url(${Fonts.OswaldSemiBold}) format('woff');
}

  body {
    font-family: OswaldLight;
    box-sizing: border-box;
    color: ${Color.primary};
    img {
      height: auto;
      max-width: 100%;
    }
  }

  /* *{
    
  } */

`

export default GlobalStyle
