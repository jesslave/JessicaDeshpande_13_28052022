import { configureStore } from '@reduxjs/toolkit';
import loginReducer from "./loginSlice"
import profileReducer from "./profileSlice"

export const store = configureStore({
  reducer: {
    credentials: loginReducer,
    profile: profileReducer
  },
});
