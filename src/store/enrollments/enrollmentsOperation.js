export const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};
export const handlePending = (state) => {
  state.isLoading = true;
};
export const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = "";
};
