import { createSlice, isAnyOf } from "@reduxjs/toolkit";
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
      .addMatcher(
        isAnyOf(getMasterEnrollmentsThunk.pending, getEnrollmentsThunk.pending),
        handlePending
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});

export const enrollmentsReducer = enrollmentsSlice.reducer;
