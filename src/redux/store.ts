import { useDispatch } from "react-redux";
import { configureStore, Store } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./rootReducer";

export const createMyStore = (
  initialState?: Partial<RootState>
): Store<RootState> =>
  configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });

const store = createMyStore();

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

export default store;
