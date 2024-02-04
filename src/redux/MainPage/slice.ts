import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchMainpageIngo, updateMainpageIngo } from "./thunks";
import { dataObject } from "./types";
import { Statuses } from "../common-types";

export interface MainPageState {
  mainPageIngo: dataObject;
  status: Statuses;
}

const initialState: MainPageState = {
  mainPageIngo: {
    firstBlock: {
      title1: "",
      title2: "",
      imageUrl: "",
    },
    skills: [
      {
        title: "",
        skills: [],
      },
    ],
    textAboutMe: {
      text: "",
      imageUrl: "",
    },
    contacts: [
      {
        iconUrl: "",
        textContact: "",
        urlContact: "",
      },
    ],
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
      state.status = Statuses.Success;
    });
    builder.addCase(updateMainpageIngo.rejected, (state) => {
      state.status = Statuses.Error;
    });
  },
});

export const mainPageReducer = mainPageSlice.reducer;
