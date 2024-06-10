import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { credentials, loginApi } from "./authApi";

export interface AuthState {
  isLogin: boolean;
  userName: string | null;
 
}

const initialState: AuthState = {
  isLogin: false,
  userName: null,
}
  

export const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.userName = action.payload.userName
      state.isLogin = action.payload.isLogin
    })
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.userName = null;
      state.isLogin = false;
    })
  },
});

export const loginThunk  = createAsyncThunk(
  "login",
  async (credentials: credentials, thunkAPi) => {
    const response = await loginApi(credentials);
    return response;
  }
);

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = authSlice.actions;

export default authSlice.reducer;
