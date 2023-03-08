import { useCallback } from "react";
import { useTypedSelector } from "../redux/rootReducer";
import { getLastUpdates } from "../redux/selectors/lastUpdates";
import { useAppDispatch } from "../redux/store";
import {
  LastUpdateState,
  setLastUpdates as setLastUpdatesAction,
} from "../redux/slices/lastUpdatesSlice";

type UseLastUpdatesReturnType = {
  lastUpdates: LastUpdateState[];
  setLastUpdates: (lastUpdates: LastUpdateState) => void;
};

export const useLastUpdates = () => {
  const dispatch = useAppDispatch();

  const lastUpdates = useTypedSelector(getLastUpdates);

  const setLastUpdates = useCallback(
    (lastUpdates: LastUpdateState) => {
      dispatch(setLastUpdatesAction(lastUpdates));
    },
    [dispatch]
  );

  return {
    lastUpdates,
    setLastUpdates,
  } as UseLastUpdatesReturnType;
};
