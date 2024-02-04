import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "./Admin/slice";
import { oneProjectReducer } from "./oneProject/slice";
import { mainPageReducer } from "./MainPage/slice";
import { projectReducer } from "./Project/slice";

export const store = configureStore({
  reducer: {
    mainPage: mainPageReducer,
    projects: projectReducer,
    oneProject: oneProjectReducer,
    admin: adminReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
