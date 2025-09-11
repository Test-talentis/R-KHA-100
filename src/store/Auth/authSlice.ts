import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading } from "@types";
import actLogin from "./act/ActLogin";
import actRegister from "./act/actRegister";

interface IAuth {
  user: {
    id: number,
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  } | null;
  accessToken: null | string;
  status: TLoading;
  error: null | string;
}

const initialState: IAuth = {
  user: null,
  accessToken : null,
  status: "idle",
  error: null
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      resetUi : (state) => {
        state.status = "idle";
        state.error = null
      },
      resetAuth: (state) => {
        state.user = null;
        state.accessToken = null
      }
    },
    extraReducers: (builder) => {
      //Act Register 
      builder.addCase(actRegister.pending, (state) => {
        state.status = "pending";
        state.error = null;
      }),
      builder.addCase(actRegister.fulfilled, (state, action) => {
        state.status = "fullfield";
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
      }),
      builder.addCase(actRegister.rejected, (state, action) => {
        state.status = "failed";
        if(isString(action.payload)) {
          state.error = action.payload;
        }
      })
      // Act Login
        builder.addCase(actLogin.pending, (state) => {
            state.status = "pending";
            state.error = null
        }),
        builder.addCase(actLogin.fulfilled, (state, action) => {
            state.status = "fullfield";
            state.user = action.payload.user
            state.accessToken = action.payload.accessToken
        }),
        builder.addCase(actLogin.rejected, (state, action) => {
            state.status = "failed";
            if(isString(action.payload)) {
                state.error = action.payload
            }
        })
    }
})

export {actLogin, actRegister}
export const {resetAuth, resetUi} = authSlice.actions;
export default authSlice.reducer;
