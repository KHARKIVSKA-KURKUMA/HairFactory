import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  deleteEnrollmentsThunk,
  getEnrollmentsThunk,
  getMasterEnrollmentsThunk,
  postEnrollmentsThunk,
  putEnrollmentsThunk,
} from "./enrollmentsThunk";
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from "./enrollmentsOperation";

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState: {
    enrollments: [],
    isLoading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMasterEnrollmentsThunk.fulfilled, (state, { payload }) => {
        state.enrollments = [...payload];
      })
      .addCase(getEnrollmentsThunk.fulfilled, (state, { payload }) => {
        state.enrollments = [...payload];
      })
      .addCase(postEnrollmentsThunk.fulfilled, (state, { payload }) => {
        state.enrollments.push(payload);
      })
      .addCase(deleteEnrollmentsThunk.fulfilled, (state, { meta }) => {
        const index = state.enrollments.findIndex(
          (enrolment) => enrolment._id === meta.arg
        );
        state.enrollments.splice(index, 1);
      })
      .addCase(putEnrollmentsThunk.fulfilled, (state, { payload }) => {
        const index = state.enrollments.findIndex(
          (enrolment) => enrolment._id === payload._id
        );
        state.enrollments.splice(index, 1, payload);
      })
      .addMatcher(
        isAnyOf(
          getMasterEnrollmentsThunk.pending,
          getEnrollmentsThunk.pending,
          postEnrollmentsThunk.pending,
          deleteEnrollmentsThunk.pending,
          putEnrollmentsThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getMasterEnrollmentsThunk.fulfilled,
          getEnrollmentsThunk.fulfilled,
          postEnrollmentsThunk.fulfilled,
          deleteEnrollmentsThunk.fulfilled,
          putEnrollmentsThunk.fulfilled
        ),
        handleFulfilled
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});

export const enrollmentsReducer = enrollmentsSlice.reducer;
