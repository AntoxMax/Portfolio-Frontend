//@ts-nocheck

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import axios from "../../axios";

export const fetchMainpageIngo = createAsyncThunk(
  "mainPage/fetchMainpageIngo",
  async () => {
    const { data } = await axios.get("/mainpage");
    return data;
  }
);
export const updateMainpageIngo = createAsyncThunk(
  "mainPage/updateMainpageIngo",
  async (params) => {
    const { data } = await axios.patch("/mainpage", params);
    return data;
  }
);

export enum Statuses {
  Loading = "LOADING",
  Success = "SUCCESS",
  Error = "ERROR",
}

export type skillsType = { name: string; value: string[] } | null;

type dataObject = {
  firstBlock: Object;
  skills: skillsType;
  textAboutMe: Object;
  contacts: Object[];
};

interface MainPageState {
  mainPageIngo: dataObject;
  status: Statuses;
}

const initialState: MainPageState = {
  mainPageIngo: {
    firstBlock: {},
    skills: null,
    textAboutMe: {},
    contacts: [{}],
  },
  status: Statuses.Loading,
};

const mainPageSlice = createSlice({
  name: "mainpage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMainpageIngo.pending, (state) => {
      state.status = Statuses.Loading;
    });
    builder.addCase(
      fetchMainpageIngo.fulfilled,
      (state, action: PayloadAction<dataObject[]>) => {
        state.mainPageIngo = action.payload[0];
        state.status = Statuses.Success;
      }
    );
    builder.addCase(fetchMainpageIngo.rejected, (state) => {
      state.status = Statuses.Error;
    });
    builder.addCase(updateMainpageIngo.fulfilled, (state, action: any) => {
      // state.mainPageIngo = action.payload[0];
      state.status = Statuses.Success;
    });
    builder.addCase(updateMainpageIngo.rejected, (state) => {
      state.status = Statuses.Error;
    });
  },
});

export const mainPageReducer = mainPageSlice.reducer;
