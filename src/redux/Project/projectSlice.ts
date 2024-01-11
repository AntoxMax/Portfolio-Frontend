import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import axios from "../../axios";

export const fetchProjects = createAsyncThunk(
  "posts/fetchProjects",
  async () => {
    const { data } = await axios.get("/projects");
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
    builder.addCase(fetchProjects.pending, (state) => {
      state.projects.status = Statuses.Loading;
    });
    builder.addCase(
      fetchProjects.fulfilled,
      (state, action: PayloadAction<[]>) => {
        state.projects.items = action.payload;
        state.projects.status = Statuses.Success;
      }
    );
    builder.addCase(fetchProjects.rejected, (state) => {
      state.projects.items = [];
      state.projects.status = Statuses.Error;
    });
  },
});

export const projectReducer = projectSlice.reducer;
