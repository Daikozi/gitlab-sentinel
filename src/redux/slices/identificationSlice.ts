import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type IsIdentifiedState = boolean;

const defaultState =
  JSON.parse(localStorage.getItem("isIdentified") as string) ?? false;

export const isIdentifiedSlice = createSlice({
  name: "isIdentified",
  initialState: defaultState,
  reducers: {
    setIsIdentified: (
      state: IsIdentifiedState,
      action: PayloadAction<IsIdentifiedState>
    ) => {
      const isIdentified = action.payload;

      state = isIdentified;

      localStorage.setItem("isIdentified", JSON.stringify(state));

      return state;
    },
  },
});

export const { setIsIdentified } = isIdentifiedSlice.actions;

export default isIdentifiedSlice.reducer;
