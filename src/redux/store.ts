import { configureStore } from "@reduxjs/toolkit";
import { projectReducer } from "./Project/projectSlice";
import { mainPageReducer } from "./MainPage/mainpageSlice";
import { adminReducer } from "./Admin/adminSlice";

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    mainPage: mainPageReducer,
    admin: adminReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
