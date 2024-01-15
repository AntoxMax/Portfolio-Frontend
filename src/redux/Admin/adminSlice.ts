import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import axios from "../../axios";
import { Statuses } from "../Project/projectSlice";

export const fetchAdminLogin = createAsyncThunk(
  "posts/fetchAdminLogin",
  async (authData: object) => {
    const { data } = await axios.post("/admin/login", authData);
    console.log(data);
    return data;
  }
);

interface adminState {
  auth: Boolean;
  status: Statuses;
}

const initialState: adminState = {
  auth: false,
  status: Statuses.Loading,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAdminLogin.pending, (state) => {
      state.status = Statuses.Loading;
    });
    builder.addCase(
      fetchAdminLogin.fulfilled,
      (state, action: PayloadAction) => {
        state.auth = true;
        state.status = Statuses.Success;
      }
    );
    builder.addCase(fetchAdminLogin.rejected, (state) => {
      state.status = Statuses.Error;
    });
  },
});

export const adminReducer = adminSlice.reducer;
