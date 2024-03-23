import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isLoggedIn: boolean;
  name?: string;
}

const initialState: UserState = {
  isLoggedIn: false,
  name: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ name: string }>) => {
      state.isLoggedIn = true;
      state.name = action.payload.name;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.name = undefined;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
