import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    counterIncremented: (state) => {
      state.counter++;
    },
    counterDecremented: (state) => {
      state.counter--;
    },
  },
});

export const { counterIncremented, counterDecremented } = counterSlice.actions;
export default counterSlice.reducer;
