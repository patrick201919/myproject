import { createSlice } from "@reduxjs/toolkit";
import { createMedia, updateMedia } from "./requestMedia";

export const mediaSlice = createSlice({
  name: "medias",
  initialState: {
    medias: [],
    loading: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(createMedia.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createMedia.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createMedia.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(updateMedia.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateMedia.fulfilled, (state, action) => {
        state.loading = false;
        state = { ...state, ...action.payload };
      })
      .addCase(updateMedia.rejected, (state, action) => {
        state.loading = false;
      });
  },
});
// export const { createMedia= mediaSlice.actions;
export default mediaSlice.reducer;
