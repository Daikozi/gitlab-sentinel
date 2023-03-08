import { createSelector } from "@reduxjs/toolkit";

import { getIsIdentifiedState } from ".";

export const isIdentified = createSelector(
  getIsIdentifiedState,
  (state): boolean => state
);
