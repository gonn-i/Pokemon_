import { configureStore } from '@reduxjs/toolkit';
import { pokemonReducer } from './pokemon-slice';
import { themeReducer } from './theme-slice';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    darkMode: themeReducer,
  },
  // action에 직렬화가 불가능한 값을 전달할때에, object 형태의 값을 string 형태로 변환
  // 미들 웨어를 추가해줌
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
