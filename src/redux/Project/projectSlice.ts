import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import axios from "../../axios";

export const fetchProjectsCategory = createAsyncThunk(
  "posts/fetchProjectsCategory",
  async (category: string) => {
    const { data } = await axios.get(
      `/projects-category/?category=${category}`
    );
    return data;
  }
);

export enum Statuses {
  Loading = "LOADING",
  Success = "SUCCESS",
  Error = "ERROR",
}

interface ProjectState {
  items: [];
  status: Statuses;
}

const initialState = {
  projects: <ProjectState>{
    items: [],
    status: Statuses.Loading,
  },
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjectsCategory.pending, (state) => {
      state.projects.status = Statuses.Loading;
    });
    builder.addCase(
      fetchProjectsCategory.fulfilled,
      (state, action: PayloadAction<[]>) => {
        state.projects.items = action.payload;
        state.projects.status = Statuses.Success;
      }
    );
    builder.addCase(fetchProjectsCategory.rejected, (state) => {
      state.projects.items = [];
      state.projects.status = Statuses.Error;
    });
  },
});

export const projectReducer = projectSlice.reducer;
