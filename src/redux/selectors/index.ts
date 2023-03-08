import { RootState } from "../rootReducer";
import { IsIdentifiedState } from "../slices/identificationSlice";
import { LoginInfosState } from "../slices/loginInfosSlice";
import { LastUpdateState } from "../slices/lastUpdatesSlice";

export const getIsIdentifiedState = (state: RootState): IsIdentifiedState =>
  state.isIdentified;

export const getLoginInfosState = (state: RootState): LoginInfosState =>
  state.loginInfos;

export const getLastUpdatesState = (state: RootState): LastUpdateState[] =>
  state.lastUpdates;
