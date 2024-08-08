import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './type';

export const GlobalStyles = createGlobalStyle`
${reset};

  // * {
  //   // 드래그 하지 못하게
  //   user-select: none; 
  //   -webkit-user-drag: none;
  //   -moz-user-drag: none;
  //   -o-user-drag: none;
  //   user-drag: none;
  // }


  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    top: 0;
    right: 0;
    left: 0;
  }

  a{
    text-decoration: none; 
    color: inherit; 
  }

  p{
    font-family: 'Pretendard-Regular';
  }

  button {
    border: none;
    background: none;
  }
  :root {
    overflow-x: hidden;
    margin:0;

    //폰트 크기
    --font-size-extralarge: 45px; 
    --font-size-large: 30px; 
    --font-size-stat: 20px; 
    --font-size-resultName: 25px; 
    --font-size-normal: 13px; 
    --font-size-small: 10px; 

    //폰트 굵기
    --font-weight-types: 300;

    //배경색
    --background-color-dark: #000000;
    --background-color-light: #FFFFFF;
  
    //폰트 색
    --text-color-main: #FFFFFF;
    --text-color-grey: #949494;
    --text-color-black: #000000;
    --text-color-dark-serach: #bbb;

    //토큰 버튼 색
    --toggle-background-light:#fcd659;
    --toggle-background-dark: #333;


    //박스 그림자
    --box-shadow-normal: rgba(0, 0, 0, 0.15) 4px 10px 10px 4px;
    --text-shadow-normal: 5px 5px #858585b0;
  }

  // 폰트 
    @font-face {
      font-family: 'yg-jalnan';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
      font-size: x-large;
      font-style: normal;
  }

  @font-face {
    font-family: 'DungGeunMo';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
`;
