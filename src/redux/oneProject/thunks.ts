import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/axios";

export const fetchProject = createAsyncThunk(
  "project/fetchProject",
  async (id: string | undefined) => {
    if (!id) return "Error";

    const { data } = await axios.get(`/projects/${id}`);
    return data;
  }
);

export const createProject = createAsyncThunk(
  "project/createProject",
  async (fields: object) => {
    await axios.post(`/projects`, fields);
  }
);

export const deleteProject = createAsyncThunk(
  "project/deleteProject",
  async (id: string) => {
    await axios.delete(`/projects/${id}`);
  }
);

export const patchProject = createAsyncThunk(
  "project/patchProject",
  async ({ id, fields }: { id: string | undefined; fields: object }) => {
    await axios.patch(`/projects/${id}`, fields);
  }
);
