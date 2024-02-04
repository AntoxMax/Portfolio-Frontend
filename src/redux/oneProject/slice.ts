import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Project, Statuses, projectCategories } from "../common-types";
import {
  createProject,
  deleteProject,
  fetchProject,
  patchProject,
} from "./thunks";

interface ProjectState {
  project: Project;
  status: Statuses;
}

const initialState: ProjectState = {
  project: {
    _id: "",
    title: "",
    text: "",
    imageUrl: "",
    skills: [],
    category: projectCategories.NoCategory,
    link: "",
    gitLink: "",
  },
  status: Statuses.Loading,
};

const OneProjectSlice = createSlice({
  name: "oneProject",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProject.pending, (state) => {
      state.status = Statuses.Loading;
    });
    builder.addCase(
      fetchProject.fulfilled,
      (state, action: PayloadAction<Project>) => {
        state.project = action.payload;
        state.status = Statuses.Success;
      }
    );
    builder.addCase(fetchProject.rejected, (state) => {
      state.status = Statuses.Error;
    });
    builder.addCase(createProject.fulfilled, (state) => {
      state.status = Statuses.Success;
    });
    builder.addCase(createProject.rejected, (state) => {
      state.status = Statuses.Error;
    });
    builder.addCase(deleteProject.fulfilled, (state) => {
      state.status = Statuses.Success;
    });
    builder.addCase(deleteProject.rejected, (state) => {
      state.status = Statuses.Error;
    });
    builder.addCase(patchProject.fulfilled, (state) => {
      state.status = Statuses.Success;
    });
    builder.addCase(patchProject.rejected, (state) => {
      state.status = Statuses.Error;
    });
  },
});

export const oneProjectReducer = OneProjectSlice.reducer;
