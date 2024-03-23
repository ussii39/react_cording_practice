import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../features/users/usersSlice";
// 他のReducerがあればインポート

export const mockStore = configureStore({
  reducer: {
    user: userReducer,
    // 他のReducerをここに追加
  },
  // テストやデモ用の初期状態を設定することもできます
});
