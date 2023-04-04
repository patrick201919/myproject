// import { createAsyncThunk } from "@reduxjs/toolkit";
// const token = localStorage.getItem("token");

// export const getUsers = createAsyncThunk(
//   "users/getUsers",
//   async (_, thunkAPI) => {
//     try {
//       const response = await fetch("http://localhost:3006/users/readall");
//       if (!response.ok) {
//         const responseError = await response.json();
//         return thunkAPI.rejectWithValue(responseError);
//       }
//       const data = await response.json();
//       const users = data.data;
//       return users;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.reponse.data);
//     }
//   }
// );

// //--------------Login User

// // -------Read User
// export const readUser = createAsyncThunk(
//   "user/readUser",
//   async (_, thunkAPI) => {
//     try {
//       const response = await fetch("http://localhost:3006/users/read", {
//         headers: {
//           Authorization: token,
//         },
//       });
//       const data = await response.json();
//       const user = data.data;
//       return user;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.reponse.data);
//     }
//   }
// );

// // ------Create User
// export const createUser = createAsyncThunk(
//   "user/createUser",
//   async (newUser, thunkAPI) => {
//     try {
//       const response = await fetch("http://localhost:3006/users/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newUser),
//       });
//       if (newUser.password !== newUser.confirmPassword) {
//         console.log(newUser.confirmPassword);
//         alert("Les mots de passe saisis ne sont pas identiques.");
//         return;
//       }
//       const data = await response.json();
//       return data.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// // ----Update User
// export const updateUser = createAsyncThunk(
//   "user/updateUser",
//   async (state, thunkAPI) => {
//     try {
//       const response = await fetch("http://localhost:3006/users/update", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: token,
//         },
//         body: JSON.stringify(state),
//       });
//       // if (userState.password !== userState.confirmPassword) {
//       //   alert("Les mots de passe saisis ne sont pas identiques.");
//       //   return;
//       // }
//       const data = await response.json();
//       return data.data;
//     } catch (error) {
//       console.log("acess");
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// // ------Delete User
// export const deleteUser = createAsyncThunk(
//   "user/deletedUser",
//   async (_, thunkAPI) => {
//     try {
//       const response = await fetch("http://localhost:3006/users/delete", {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: token,
//         },
//       });
//       const data = await response.json();
//       return data.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );
