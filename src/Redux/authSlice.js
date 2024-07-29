import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoggedIn: false,
}

export const authSplice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state) => { 
      state.isLoggedIn = true;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
    },
  }
});

export const { loginSuccess, logoutSuccess } = authSplice.actions;
export default authSplice.reducer;
