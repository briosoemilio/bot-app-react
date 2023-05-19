import { createSlice } from "@reduxjs/toolkit";

interface Bot {
  id: number;
  name: string;
  purpose: string;
  attack: number;
  defense: number;
  health: number;
  energy: number;
  intelligence: number;
  picture: string;
  isRare: boolean;
  isFavorite: boolean;
}

export const botSlice = createSlice({
  name: "bots",
  initialState: {
    value: [] as Bot[],
  },
  reducers: {
    setAllBots: (state, action) => {
      const sortedBots = action.payload.sort((a: Bot, b: Bot) => a.id - b.id);
      state.value = sortedBots;
    },
    favoriteBot: (state, action) => {
      const botId = action.payload;
      const currentBots: Bot[] = state.value;
      const newBots = currentBots.map((bot: Bot) => {
        if (bot.id === botId) {
          return {
            ...bot,
            isFavorite: !bot.isFavorite,
          };
        } else {
          return bot;
        }
      });
      state.value = newBots;
    },
    editBot: (state, action) => {
      const botId = action.payload.botId;
      const data = action.payload.data;
      const currentBots: Bot[] = state.value;
      const newBots = currentBots.map((bot: Bot) => {
        if (bot.id === botId) {
          return {
            ...bot,
            ...data,
          };
        } else {
          return bot;
        }
      });
      state.value = newBots;
    },
    deleteBot: (state, action) => {
      const botId = action.payload;
      const currentBots: Bot[] = state.value;
      const newBots = currentBots.filter((bot: Bot) => bot.id !== botId);
      state.value = newBots;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllBots, favoriteBot, editBot, deleteBot } = botSlice.actions;

export const botsReducer = botSlice.reducer;
