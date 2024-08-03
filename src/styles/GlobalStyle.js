import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './type';

export const GlobalStyles = createGlobalStyle`
${reset};
  :root {
    //폰트 크기
    --font-size-large: 27px; 
    --font-size-normal: 13px; 

    //배경색
    --background-color-light: #FFFFFF;
    --text-color-light: #000000;
    --toggle-background-light: #CCCCCC;
    --toggle-ball-light: #FFFFFF;

  }

  // 폰트 
    @font-face {
      font-family: 'yg-jalnan';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
      font-size: x-large;
      font-style: normal;
  }
`;
