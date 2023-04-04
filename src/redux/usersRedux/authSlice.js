import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { API_URL } from "../../constants/ApiConstant";
// import {
//   getItem,
//   setItem,
//   removeItem,
// } from "../../components/utils/locatStorage";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:3006/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      localStorage.setItem("token", data.token);
      return data.token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    error: null,
  },

  reducers: {
    logout(state) {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload;
        state.error = null;
        localStorage.setItem("token", action.payload);
        // window.location.href = "/";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.token = null;
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
