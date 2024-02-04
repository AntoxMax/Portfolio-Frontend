import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/axios";

export const fetchMainpageIngo = createAsyncThunk(
  "mainPage/fetchMainpageIngo",
  async () => {
    const { data } = await axios.get("/mainpage");
    return data;
  }
);
export const updateMainpageIngo = createAsyncThunk(
  "mainPage/updateMainpageIngo",
  async (params: Object) => {
    const { data } = await axios.patch("/mainpage", params);
    return data;
  }
);
