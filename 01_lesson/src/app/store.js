import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

//thunk란? 특정작업을 나중에 할수 있도록 미루기 위해 함수형태로 감싼 것
