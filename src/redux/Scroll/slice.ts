import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    scrollToId: null,
  },
  reducers: {
    setScrollToId: (state, action) => {
      state.scrollToId = action.payload;
    },
  },
});

export const { setScrollToId } = scrollSlice.actions;

export default scrollSlice.reducer;
