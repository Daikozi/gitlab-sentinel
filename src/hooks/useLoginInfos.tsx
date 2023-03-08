import { useCallback } from "react";
import { useTypedSelector } from "../redux/rootReducer";
import { getLoginInfos } from "../redux/selectors/loginInfos";
import { useAppDispatch } from "../redux/store";
import {
  LoginInfosState,
  setLoginInfos as setLoginInfosAction,
} from "../redux/slices/loginInfosSlice";

type UseLoginInfosReturnType = {
  loginInfos: LoginInfosState;
  setLoginInfos: (loginInfos: LoginInfosState) => void;
};

export const useLoginInfos = () => {
  const dispatch = useAppDispatch();

  const loginInfos = useTypedSelector(getLoginInfos);

  const setLoginInfos = useCallback(
    (loginInfos: LoginInfosState) => {
      dispatch(setLoginInfosAction(loginInfos));
    },
    [dispatch]
  );

  return {
    loginInfos,
    setLoginInfos,
  } as UseLoginInfosReturnType;
};
