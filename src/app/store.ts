import { configureStore } from "@reduxjs/toolkit";
import { botsReducer } from "../slices/botSlice";
import { viewBotReducer } from "../slices/viewBotSlice";

export default configureStore({
  reducer: {
    bots: botsReducer,
    viewBot: viewBotReducer,
  },
});
