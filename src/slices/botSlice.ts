import { createSlice } from "@reduxjs/toolkit";
import { apiService } from "../services/Api.service";

export const botSlice = createSlice({
  name: "bots",
  initialState: {
    value: [],
  },
  reducers: {
    setAllBots: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllBots } = botSlice.actions;

export const botsReducer = botSlice.reducer;
