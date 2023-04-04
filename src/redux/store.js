import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./usersRedux/authSlice";
import usersReducer from "./usersRedux/usersSlice";
import bookingsReducer from "./bookingsRedux/bookingsSlice";

export const Store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authSlice,
    bookings: bookingsReducer,
  },
});
export default Store;
