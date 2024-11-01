import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../redux/slices/themeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
