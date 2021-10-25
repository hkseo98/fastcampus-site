// store/modules/user.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CountState = {
  value: number;
};

// 초기 상태
const initialState: CountState = {
  value: 0,
};

// 리듀서 슬라이스
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addAction(state: CountState) {
      state.value = state.value + 1;
    },
    subtractAction(state: CountState) {
      state.value = state.value - 1;
    },
  },
});

// 리듀서 & 액션 리턴
const { reducer, actions } = userSlice;
export const { addAction, subtractAction } = actions;
export default reducer;
