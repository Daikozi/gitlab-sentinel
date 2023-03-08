import isIdentified from "./slices/identificationSlice";
import loginInfos from "./slices/loginInfosSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  isIdentified,
  loginInfos,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;
