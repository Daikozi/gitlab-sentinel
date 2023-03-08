import isIdentified from "./slices/identificationSlice";
import loginInfos from "./slices/loginInfosSlice";
import lastUpdates from "./slices/lastUpdatesSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  isIdentified,
  loginInfos,
  lastUpdates,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;
