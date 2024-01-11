import { configureStore } from "@reduxjs/toolkit";
import { projectReducer } from "./Project/projectSlice";
import { mainPageReducer } from "./MainPage/mainpageSlice";

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    mainPage: mainPageReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
