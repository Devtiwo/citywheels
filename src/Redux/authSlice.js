import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  isLoggedIn: false,
  status: "idle",
  message: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isLoggedIn = true;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.status = "loading";
        state.message = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoggedIn = true;
        state.message = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload;
      });
  },
});

export const signup = createAsyncThunk(
  "auth/signup",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/user/signup", values);
      if (response.data.status) {
        return response.data.message;
      } else {
        return rejectWithValue(response.data.message);
      }
    } catch (err) {
      return rejectWithValue('Signup failed! Please try again.');
    }
  }
);

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
