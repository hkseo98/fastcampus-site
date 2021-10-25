import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";
import { addAction, subtractAction } from "./counter";

// 커스텀 훅
export default function useCounter() {
  const { value } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const add = useCallback(() => {
    dispatch(addAction());
  }, []);

  const subtract = useCallback(() => {
    dispatch(subtractAction());
  }, []);

  return { value, add, subtract };
}
