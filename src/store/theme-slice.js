import { createSlice } from '@reduxjs/toolkit';

const Initial = {
  isDarkActive: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: Initial,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkActive = !state.isDarkActive;
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const themeActions = themeSlice.actions;
