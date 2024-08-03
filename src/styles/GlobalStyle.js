import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './type';

export const GlobalStyles = createGlobalStyle`
${reset};
  :root {
    //폰트 크기
    --font-size-large: 27px; 
    --font-size-normal: 13px; 

    //폰트 굵기
    --font-weight-types: 300;

    //배경색
    --background-color-dark: #000000;
    --background-color-light: #FFFFFF;
  
    //폰트 색
    --text-color-main: #FFFFFF;
    --text-color-grey: #949494;

    //토큰 버튼 색
    --toggle-background-light:#fcd659;
    --toggle-background-dark: #333;

  }

  // 폰트 
    @font-face {
      font-family: 'yg-jalnan';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
      font-size: x-large;
      font-style: normal;
  }
`;
