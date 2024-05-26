import { combineReducers } from "@reduxjs/toolkit";
import { languagesReducer } from "./languages/languagesReducer";

const appReducer = combineReducers({
  languages: languagesReducer,
});

export type RootState = ReturnType<typeof appReducer>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = (state: RootState | undefined, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
