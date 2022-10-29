import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPreloading: true,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    resetUi: (state) => {
      return { ...state, ...initialState };
    },
    updateUi: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { resetUi, updateUi } = uiSlice.actions;

export default uiSlice.reducer;

export const selectUiState = createSelector(
  (state) => state.ui,
  (ui) => ui
);
