import { createSlice } from "@reduxjs/toolkit";
export const viewBotSlice = createSlice({
  name: "viewBot",
  initialState: {
    value: 0,
  },
  reducers: {
    viewLeft: (state) => {
      state.value -= 1;
    },
    viewRight: (state) => {
      state.value += 1;
    },
    setViewBot: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { viewLeft, viewRight, setViewBot } = viewBotSlice.actions;
export const viewBotReducer = viewBotSlice.reducer;
