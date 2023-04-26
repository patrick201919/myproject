import { createSlice } from "@reduxjs/toolkit";
import {
  createUser,
  deleteUser,
  getAllUser,
  readUser,
  updatePassword,
  updateUser,
  updateUserAdmin,
} from "./requestUser";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {
    [deleteUser.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      //Create User
      .addCase(createUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
      })
      //Read all Users
      .addCase(getAllUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllUser.rejected, (state, action) => {
        state.loading = false;
      })

      // read User
      .addCase(readUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(readUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(readUser.rejected, (state, action) => {
        state.loading = false;
      })

      // Update User
      .addCase(updateUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state = { ...state, ...action.payload };
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
      })

      // Update User By Admin
      .addCase(updateUserAdmin.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateUserAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state = { ...state, ...action.payload };
      })
      .addCase(updateUserAdmin.rejected, (state, action) => {
        state.loading = false;
      })

      // Update Password
      .addCase(updatePassword.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.loading = false;
        state = { ...state, ...action.payload };
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default usersSlice.reducer;





















// .addCase(updateUser.pending, (state, action) => {
//   state.loading = true;
// })
// .addCase(updateUser.fulfilled, (state, action) => {
//   state.loading = false;
//   state = { ...state, ...action.payload };
//   // const { key, value } = action.payload;
//   // state[key] = value;
// })

// .addCase(updateUser.rejected, (state, action) => {
//   state.loading = false;
// })

// .addCase(updateUser.fulfilled, (state, action) => {
//   state.loading = false;
//   const updatedUser = action.payload;
//   const userIndex = state.users.findIndex(
//     (user) => user.id === updatedUser.id
//   );
//   if (userIndex !== -1) {
//     state.users[userIndex] = {
//       ...state.users[userIndex],
//       ...updatedUser,
//     };
//   }
// })

// .addCase(updateUser.pending, (state, action) => {
//   state.loading = true;
// })
// .addCase(updateUser.fulfilled, (state, action) => {
//   state.loading = false;
//   const userIndex = state.users.findIndex(
//     (user) => user.id === action.payload.id
//   );
//   if (userIndex !== -1) {
//     state.users[userIndex] = action.payload;
//   }
// })
// .addCase(updateUser.rejected, (state, action) => {
//   state.loading = false;
// })
