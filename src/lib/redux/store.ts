import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
 // example slice

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Infer the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
