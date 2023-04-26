import { createSlice } from "@reduxjs/toolkit";
import {
  createVehicle,
  deleteVehicle,
  getAllVehicle,
  readVehicle,
  updateVehicle,
} from "./requestVehicle";

export const vehicleSlice = createSlice({
  name: "vehicles",
  initialState: {
    vehicles: [],
    vehicleId: null,
    loading: false,
  },
  reducers: {
    [createVehicle.fulfilled]: (state, action) => {
      state.loading = false;
      state.vehicles.push(action.payload);
      state.vehicleId = action.payload;
    },

    [readVehicle.fulfilled]: (state, action) => {
      state.loading = false;
      state.vehicles = action.payload;
    },

    [deleteVehicle.fulfilled]: (state, action) => {
      state.loading = false;
      state.vehicles = state.vehicles.filter(
        (vehicle) => vehicle.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllVehicle.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllVehicle.fulfilled, (state, action) => {
        state.loading = false;
        state.vehicles = action.payload;
      })

      .addCase(updateVehicle.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateVehicle.fulfilled, (state, action) => {
        state.loading = false;
        state = { ...state, ...action.payload };
      })
      .addCase(updateVehicle.rejected, (state, action) => {
        state.loading = false;
      });
  },
});
export default vehicleSlice.reducer;
