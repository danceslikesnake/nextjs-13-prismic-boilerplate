import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './slices/ui';
// SLICE IMPORT

export default configureStore({
  reducer: {
    ui: uiSlice,
    // SLICE REDUCER
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
