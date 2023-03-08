import { useCallback } from "react";
import { useTypedSelector } from "../redux/rootReducer";
import { getIsIdentifiedState } from "../redux/selectors";
import { useAppDispatch } from "../redux/store";
import { setIsIdentified as setIsIdentifiedAction } from "../redux/slices/identificationSlice";

export const useIdentification = () => {
  const dispatch = useAppDispatch();

  const isIdentified = useTypedSelector(getIsIdentifiedState);

  const setIsIdentified = useCallback((isIdentified: boolean) => {
    dispatch(setIsIdentifiedAction(isIdentified));
  }, []);

  return {
    isIdentified,
    setIsIdentified,
  };
};
