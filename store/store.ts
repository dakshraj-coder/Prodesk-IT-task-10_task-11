import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import filterReducer from "./filterSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filterReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;