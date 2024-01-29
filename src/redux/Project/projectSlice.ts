import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import axios from "../../axios";

export const fetchProjectsCategory = createAsyncThunk(
  "project/fetchProjectsCategory",
  async (category?: string) => {
    if (category) {
      const { data } = await axios.get(
        `/projects-category/?category=${category}`
      );
      return data;
    } else {
      const { data } = await axios.get(`/projects`);
      return data;
    }
  }
);

export const deleteProject = createAsyncThunk(
  "project/deleteProject",
  async (id: string) => {
    await axios.delete(`/projects/${id}`);
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
    builder.addCase(deleteProject.fulfilled, (state) => {
      state.projects.status = Statuses.Success;
    });
    builder.addCase(deleteProject.rejected, (state) => {
      state.projects.status = Statuses.Error;
    });
  },
});

export const projectReducer = projectSlice.reducer;
