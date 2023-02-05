import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },

    logOut(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    },
  },
});

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer,
});
