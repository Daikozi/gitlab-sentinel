import { DEFAULT_DOMAIN } from "../../constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type LoginInfosState = {
  username: string;
  token: string;
  domain: string;
};

const initialState: LoginInfosState = localStorage.getItem("loginInfos")
  ? JSON.parse(localStorage.getItem("loginInfos") as string)
  : { username: "", token: "", domain: DEFAULT_DOMAIN };

export const loginInfosSlice = createSlice({
  name: "loginInfos",
  initialState,
  reducers: {
    setLoginInfos: (state, action: PayloadAction<LoginInfosState>) => {
      const { username, token, domain } = action.payload;

      state.username = username;
      state.token = token;
      state.domain = domain;

      localStorage.setItem("loginInfos", JSON.stringify(state));

      return state;
    },
  },
});

export const { setLoginInfos } = loginInfosSlice.actions;

export default loginInfosSlice.reducer;
