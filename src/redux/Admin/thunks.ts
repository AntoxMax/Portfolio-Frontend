import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/axios";

export const fetchAdminLogin = createAsyncThunk(
  "posts/fetchAdminLogin",
  async (authData: object) => {
    const { data } = await axios.post("/admin/login", authData);
    console.log(data);
    return data;
  }
);

export const fetchAuthAdmin = createAsyncThunk(
  "admin/fetchAuthMe",
  async () => {
    const { data } = await axios.get("/admin/getAuth");
    return data;
  }
);
