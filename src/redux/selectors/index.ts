import { RootState } from "../rootReducer";
import { IsIdentifiedState } from "../slices/identificationSlice";
import { LoginInfosState } from "../slices/loginInfosSlice";

export const getIsIdentifiedState = (state: RootState): IsIdentifiedState =>
  state.isIdentified;

export const getLoginInfosState = (state: RootState): LoginInfosState =>
  state.loginInfos;
