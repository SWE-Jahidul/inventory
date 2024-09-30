import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { endpoints } from "../api/auth";

const slice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    data: JSON.parse(localStorage.getItem("user") || "null"),
    error: null,
  },
  reducers: {
    logOut: (state: any, { payload }: PayloadAction<void>) => {
      state.data = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(endpoints.login.matchPending, (state: any) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addMatcher(
      endpoints.login.matchFulfilled,
      (state: any, { payload }) => {
        const newState = {
          ...state,
          data: payload,
          loading: false,
        };
        localStorage.setItem("user", JSON.stringify(newState.data));
        return newState;
      }
    );
    builder.addMatcher(
      endpoints.login.matchRejected,
      (state: any, action) => {
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      }
    );
  },
});

export const { logOut } = slice.actions;
export default slice.reducer;

// Selectors
export const selectUser = (state: any) => state.user.data;
export const selectIsLoggedIn = (state: any) => state.user.data !== null;