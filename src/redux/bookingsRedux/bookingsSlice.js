import { createSlice } from "@reduxjs/toolkit";
import { getAllBooking } from "./requestBooking";

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    bookings: [],
    loading: false,
  },
  reducers: {
    bookingUpdate: (state, action) => {
      const { key, value } = action.payload;
      return { ...state, [key]: value };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooking.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload;
      })
      .addCase(getAllBooking.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { bookingUpdate } = bookingsSlice.actions;
export default bookingsSlice.reducer;
