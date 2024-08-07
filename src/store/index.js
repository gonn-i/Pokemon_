import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { pokemonReducer } from './pokemon-slice';
import { themeReducer } from './theme-slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// persist를 통해, 새로고침 후에도 redux 값 유지

// redux-persist 설정 객체
const persistConfig = {
  key: 'root', // 저장소 키
  storage, // 저장소 위치 (local storage)
  whitelist: ['pokemon', 'darkMode'], // 저장할 슬라이스를 명시하여 중복을 피함
};

// 모든 슬라이스 리듀서를 결합
const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  darkMode: themeReducer,
});

// rootReducer를 래핑 + persistConfig에 정의된 저장소에 저장
const persistedReducer = persistReducer(persistConfig, rootReducer);

//  Redux 스토어 생성
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //직렬화되지 않은 값에 대한 경고를 무시
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
