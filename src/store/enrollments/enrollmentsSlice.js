import { createSlice } from "@reduxjs/toolkit";
import {
  getEnrollmentsThunk,
  getMasterEnrollmentsThunk,
} from "./enrollmentsThunk";
import { handlePending, handleRejected } from "./enrollmentsOperation";

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState: {
    enrollments: [],
    enrollmentsM: [],
    isLoading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMasterEnrollmentsThunk.fulfilled, (state, { payload }) => {
        state.enrollmentsM = [...payload];
        state.isLoading = false;
        state.error = "";
      })
      .addCase(getEnrollmentsThunk.fulfilled, (state, { payload }) => {
        state.enrollments = [...payload];
        state.isLoading = false;
        state.error = "";
      })
      .addMatcher((action) => action.type.endsWith("/rejected"), handleRejected)
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending);
  },
});

export const enrollmentsReducer = enrollmentsSlice.reducer;
