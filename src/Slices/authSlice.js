import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../Services/authAPI";

const initialState = {
  userInfo:  JSON.parse(localStorage.getItem('userInfo'))
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null,
  authError: null,
  registerStatus: null,
}

export const login = createAsyncThunk(
  "auth/login",
  async (account) => {
    try {
      const data = await authAPI.login(account);
      return data;
    } catch (error) {
      throw error
    }
  }
);

export const registerAccount = createAsyncThunk(
  "auth/registerAccount",
  async (account) => {
    try {
      const data = await authAPI.registerAccount(account);
      return data;
    } catch (error) {
      throw error
    }
  }
);

const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers: {
    getLoginStatus: (state , {payload}) => {
      state.loginStatus = payload;
    },
    resetAuthError: (state , ) => {
      state.authError = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.userInfo = payload;
    });
    builder.addCase(login.rejected, (state, { error }) => {
      if (error.name === "Error") {
        state.authError = "Login Failed: Account or Password is incorrect";
      } else {
        state.authError = "Login Failed: Please check your network";
      }
    });

    builder.addCase(registerAccount.fulfilled, (state, { payload }) => {
      state.registerStatus = "You've successfully registered!"
    });
    builder.addCase(registerAccount.rejected, (state, { error }) => {
      state.registerStatus = `Register failed !!! Please try again`
    });
  },
})

export const {getLoginStatus, resetAuthError} = authSlice.actions;
export default authSlice.reducer;