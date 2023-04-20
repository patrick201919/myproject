import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./usersRedux/authSlice";
import bookingsReducer from "./bookingsRedux/bookingsSlice";
import vehicleSlice from "./vehicleRedux/vehicleSlice";
import usersSlice from "./usersRedux/usersSlice";

export const Store = configureStore({
  reducer: {
    users: usersSlice,
    auth: authSlice,
    bookings: bookingsReducer,
    vehicles: vehicleSlice,
  },
});
export default Store;
