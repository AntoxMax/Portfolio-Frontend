import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAdminLogin, fetchAuthAdmin, patchAdmin } from "./thunks";
import { Statuses } from "../common-types";

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
    builder.addCase(patchAdmin.fulfilled, (state) => {
      state.status = Statuses.Success;
    });
    builder.addCase(patchAdmin.rejected, (state) => {
      state.status = Statuses.Error;
    });
  },
});

export const adminReducer = adminSlice.reducer;
export const isAuthSelector = (state: any) => Boolean(state.auth);
export const { logOut } = adminSlice.actions;
