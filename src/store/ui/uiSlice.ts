import { Language, Theme, UIState } from "@/contracts/types/TUiStore";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    theme: "system",
    language: "en",
  } as UIState,
  reducers: {
    onCheckingTheme: (state) => {
      state.theme = "system";
    },
    onCheckingLanguage: (state) => {
      state.language = "en";
    },
    onSetTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    onSetLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  onCheckingTheme,
  onCheckingLanguage,
  onSetTheme,
  onSetLanguage,
} = uiSlice.actions;
