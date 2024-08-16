<div align="center">
  <h2> PokeDex 🎮 </h2>
  201 종의 포켓몬의 도감을 만나볼 수 있는 웹사이트입니다 🃏👀 
</div>

---

![pokemon_logo](https://github.com/user-attachments/assets/1a644316-ab20-49c9-937a-0b7ebab2cfcb)

[배포링크🔗](https://gonspokedex.netlify.app/)

<div align="center">
  <h1> 사용한 기술 스택 ⚒️</h1>
</div>

---

<div align="center">
  <img alt='react' src="https://img.shields.io/badge/react-61DAFB.svg?&style=flat-square&logo=react&logoColor=white"> 
  <img alt="redux" src ="https://img.shields.io/badge/redux-764ABC.svg?&style=flat-square&logo=redux&logoColor=white"/>
  <img alt="axios" src ="https://img.shields.io/badge/axios-5A29E4.svg?&style=flat-square&logo=axios&logoColor=white"/>
  <img alt="styled-components" src ="https://img.shields.io/badge/styled-components-DB7093.svg?&style=flat-square&logo=styled-components&logoColor=white"/>
  <img alt="vite" src ="https://img.shields.io/badge/vite-646CFF.svg?&style=flat-square&logo=vite&logoColor=white"/>
</div>

<div align="center">
  <h1> 작업 페이지 ⚒️</h1>
</div>

---

### 기본 화면

| Main 페이지                                                                               | Detail 페이지                                                                             |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![image](https://github.com/user-attachments/assets/c10bb021-c2b6-4c6d-a184-c4f7d394ee07) | ![image](https://github.com/user-attachments/assets/f82053b9-2749-4da4-aa98-6e19963dc398) |
| 포켓몬 도감 리스트 📋                                                                     | 상세정보와 스탯 확인 🔍                                                                   |

### 다크 모드

| Main 페이지                                                                               | Detail 페이지                                                                             |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![image](https://github.com/user-attachments/assets/7ba8cf52-7b7e-4c4b-8cb0-50fcd349bb7d) | ![image](https://github.com/user-attachments/assets/17d48f45-e1dc-423d-9b60-38f3021c76e8) |
| 포켓몬 도감 리스트 📋                                                                     | 상세정보와 스탯 확인 🔍                                                                   |

### 검색 기능

| 검색 결과 🙆🏻‍♀️                                                                              | 검색 결과 🙆🏻‍♀️                                                                              | 검색 결과 🙅🏻‍♀️                                                                              |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![image](https://github.com/user-attachments/assets/d15eca36-0105-4ca8-89a8-f081c01ee58c) | ![image](https://github.com/user-attachments/assets/0eb309bb-b39c-4206-aa39-f85805e0ab3c) | ![image](https://github.com/user-attachments/assets/33c36fb7-f62c-4f70-a802-49eb853a734e) |
| light 모드 ☀️                                                                             | dark 모드 🌝                                                                              | 검색 결과가 없는 경우                                                                     |

### 로딩 & 404 에러 핸들링

| 로딩 모달                                                                                              | 404 페이지                                                                                           |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| ![loading](https://velog.velcdn.com/images/gonn-i/post/f070b564-86cb-4422-9b6d-04940e4d0b12/image.gif) | ![error](https://velog.velcdn.com/images/gonn-i/post/f479e42e-c0e2-41d2-9ec2-b66ebe0920b1/image.gif) |
| 포켓몬볼 애니메이션 ☄️                                                                                 | random 포켓몬 gif 👾                                                                                 |

### 반응형

| Main 페이지                                                                               | 404 페이지                                                                                | 검색 가능                                                                                 |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![image](https://github.com/user-attachments/assets/b07fb626-c89e-4aa5-8601-316d3fe33701) | ![image](https://github.com/user-attachments/assets/d85b0f7e-3c27-4679-b353-6c8009fcf2c9) | ![image](https://github.com/user-attachments/assets/1b7bfd79-742b-4067-b941-2dac25cbe1f0) |

<div align="center">
  <h1> 구현 내용 🧐 </h1>
</div>

---

- `redux Toolkit`을 통한 전역관리, `redux-persist`로 local storage에 저장 ⚔️
  - 다크모드/ 라이트모드 구현 및 list data 임시저장
  - 새로고침에도 데이터 손실을 방지
- `Axios`를 이용한 Http request 🎯
  - `instance` 생성을 통해, 코드 중복 방지
  - `interceptors`로 에러 핸들링
- `lazy` `Suspense`를 이용한 코드 스플리팅을 통한 최적화 🏄🏻
- `Portal`을 통해 Loading Modal 최상단에 띄우기 🎈
