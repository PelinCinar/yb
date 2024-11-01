// themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: true,
  mode: 'dark',
  colors: {
    dark: {
      cardBackground: '#1a1d1c',
      textColor: '#ffffff',
      linkColor: '#1e90ff'
    },
    light: {
      cardBackground: '#ae8447',
      textColor: '#ffff',
      linkColor: '#0f3474'
    }
  }
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      state.mode = state.isDarkMode ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
