export const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};
export const handlePending = (state) => {
  state.isLoading = true;
};
