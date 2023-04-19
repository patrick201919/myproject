import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./usersRedux/authSlice";
import usersReducer from "./usersRedux/usersSlice";
import bookingsReducer from "./bookingsRedux/bookingsSlice";
import vehicleSlice from "./vehicleRedux/vehicleSlice";

export const Store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authSlice,
    bookings: bookingsReducer,
    vehicles: vehicleSlice,
  },
});
export default Store;
