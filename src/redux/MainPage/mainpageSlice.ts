import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import axios from "../../axios";

export const fetchMainpageIngo = createAsyncThunk(
  "posts/fetchMainpageIngo",
  async () => {
    const { data } = await axios.get("/mainpage");
    return data;
  }
);

export enum Statuses {
  Loading = "LOADING",
  Success = "SUCCESS",
  Error = "ERROR",
}

export type skillsType = { name: string; value: string[] };

interface MainPageState {
  skills: skillsType[];
  textAboutMe: String;
  status: Statuses;
}

const initialState = {
  mainPageIngo: <MainPageState>{
    skills: [],
    textAboutMe: "",
    status: Statuses.Loading,
  },
};

const mainPageSlice = createSlice({
  name: "mainpage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMainpageIngo.pending, (state) => {
      state.mainPageIngo.status = Statuses.Loading;
    });
    builder.addCase(
      fetchMainpageIngo.fulfilled,
      (state, action: PayloadAction<[{ skills: []; textAboutMe: String }]>) => {
        state.mainPageIngo.skills = action.payload[0].skills;
        state.mainPageIngo.textAboutMe = action.payload[0].textAboutMe;
        state.mainPageIngo.status = Statuses.Success;
      }
    );
    builder.addCase(fetchMainpageIngo.rejected, (state) => {
      state.mainPageIngo.skills = [];
      state.mainPageIngo.textAboutMe = "";
      state.mainPageIngo.status = Statuses.Error;
    });
  },
});

export const mainPageReducer = mainPageSlice.reducer;
