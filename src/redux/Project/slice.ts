import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Project, Statuses } from "../common-types";
import { fetchProjectsCategory } from "./thunks";

interface ProjectState {
  items: Project[];
  status: Statuses;
}

const initialState = {
  projects: {
    items: [],
    status: Statuses.Loading,
  } as ProjectState,
};

const ProjectSlice = createSlice({
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

export const projectReducer = ProjectSlice.reducer;
