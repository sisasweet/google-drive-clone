import { configureStore } from '@reduxjs/toolkit';
import boolReducer from "../slices/Bool/boolSlice";

export const store = configureStore({
  reducer: {
    bool: boolReducer,
  },
});
