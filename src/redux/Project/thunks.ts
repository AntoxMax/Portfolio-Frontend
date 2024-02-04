import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/axios";

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
