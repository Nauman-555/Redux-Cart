import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice";
export const store = configureStore({
  reducer: {
    AllCart: cartReducer,
  },
});
