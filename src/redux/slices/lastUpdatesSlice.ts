import { createSlice } from "@reduxjs/toolkit";

export type LastUpdateState = {
  id: number;
  lastUpdate: Date;
  lastView?: Date;
  isRead?: boolean;
};

const initialState: LastUpdateState[] = localStorage.getItem("lastUpdates")
  ? JSON.parse(localStorage.getItem("lastUpdates") as string)
  : [];

export const lastUpdatesSlice = createSlice({
  name: "lastUpdates",
  initialState,
  reducers: {
    setLastUpdates: (state, action) => {
      const { id, lastUpdate, lastView } = action.payload;

      const index = state.findIndex((item) => item.id === id);

      if (index === -1) {
        state.push({
          id,
          lastUpdate,
          lastView,
          isRead: lastUpdate <= lastView,
        });
      } else {
        state[index].lastUpdate = lastUpdate;
        state[index].lastView = lastView;
        state[index].isRead = lastUpdate <= lastView;
      }

      localStorage.setItem("lastUpdates", JSON.stringify(state));
    },
  },
});

export const { setLastUpdates } = lastUpdatesSlice.actions;

export default lastUpdatesSlice.reducer;
