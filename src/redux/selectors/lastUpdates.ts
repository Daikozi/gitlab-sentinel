import { createSelector } from "@reduxjs/toolkit";

import { getLastUpdatesState } from ".";
import { LastUpdateState } from "../slices/lastUpdatesSlice";

export const getLastUpdates = createSelector(
  getLastUpdatesState,
  (state): LastUpdateState[] => state
);
