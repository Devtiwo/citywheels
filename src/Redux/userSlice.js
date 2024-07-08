import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
}

export const userSplice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: () => {

    }
  }
});

export default userSplice.reducer;