//@ts-nocheck
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

export const fetchAuthAdmin = createAsyncThunk(
  "admin/fetchAuthMe",
  async () => {
    const { data } = await axios.get("/admin/getAuth");
    return data;
  }
);

interface adminState {
  data: Object | null;
  auth: Boolean;
  status: Statuses;
}

const initialState: adminState = {
  data: null,
  auth: false,
  status: Statuses.Loading,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    logOut: (state) => {
      state.data = null;
      state.auth = false;
      state.status = Statuses.Loading;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdminLogin.pending, (state) => {
      state.data = null;
      state.auth = false;
      state.status = Statuses.Loading;
    });
    builder.addCase(
      fetchAdminLogin.fulfilled,
      (state, action: PayloadAction<Object>) => {
        state.data = action.payload;
        state.auth = true;
        state.status = Statuses.Success;
      }
    );
    builder.addCase(fetchAdminLogin.rejected, (state) => {
      state.data = null;
      state.auth = false;
      state.status = Statuses.Error;
    });
    builder.addCase(fetchAuthAdmin.pending, (state) => {
      state.data = null;

      state.auth = false;
      state.status = Statuses.Loading;
    });
    builder.addCase(
      fetchAuthAdmin.fulfilled,
      (state, action: PayloadAction<Object>) => {
        state.data = action.payload;
        state.auth = true;
        state.status = Statuses.Success;
      }
    );
    builder.addCase(fetchAuthAdmin.rejected, (state) => {
      state.data = null;
      state.auth = false;
      state.status = Statuses.Error;
    });
  },
});

export const adminReducer = adminSlice.reducer;
//@ts-ignore
export const isAuthSelector = (state: any) => Boolean(state.auth);
export const { logOut } = adminSlice.actions;
