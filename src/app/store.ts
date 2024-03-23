import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// RootState型を定義
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch型を定義
export type AppDispatch = typeof store.dispatch;
