import { createSelector } from "@reduxjs/toolkit";

import { getLoginInfosState } from ".";

export const getLoginInfos = createSelector(
  getLoginInfosState,
  ({ domain, token, username }) => ({ domain, token, username })
);
