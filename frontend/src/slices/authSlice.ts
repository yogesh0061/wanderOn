import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { credentials, loginApi, verifyToken } from "./authApi";

export interface AuthState {
  isLoggedin: boolean;
  name: string | null;
  loading : boolean;
 
}

const initialState: AuthState = {
  isLoggedin: false,
  name: null,
  loading :true
}
  

export const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(verifyTokenThunk.fulfilled, (state, action) => {
      state.name = action.payload.name
      state.isLoggedin = true
      state.loading = false
      
    })
    builder.addCase(verifyTokenThunk.rejected, (state, action) => {

      state.name = null;
      state.isLoggedin = false;
      state.loading = false
    })
    builder.addCase(verifyTokenThunk.pending, (state, action) => {
      state.loading = true
      
    })
  
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.name = action.payload.name
      state.isLoggedin = action.payload.isLoggedin
      state.loading = false
      
    })
    builder.addCase(loginThunk.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.name = null;
      state.isLoggedin = false;
      state.loading = false
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

export const verifyTokenThunk  = createAsyncThunk(
  "verifyToken",
  async ( thunkAPi) => {
    const response = await verifyToken();

    return response;
  }
);


export default authSlice.reducer;
