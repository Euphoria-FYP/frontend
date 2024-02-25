import { configureStore } from "@reduxjs/toolkit";
import createPageSlice from "../slices/createPage";

export const store = configureStore({
  reducer: {
    createpage: createPageSlice,
  },
});
