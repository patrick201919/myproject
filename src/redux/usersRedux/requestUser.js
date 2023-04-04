import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteRequest,
  postRequest,
  putRequest,
  getRequest,
} from "../../components/api/Api";

export const createUser = createAsyncThunk(
  "/users/create",
  async (form, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    const { status, result, error } = await postRequest("/users/create", form);
    console.log(result);
    return error
      ? rejectWithValue(`Cannot sign up - Error status ${status} - ${error}`)
      : fulfillWithValue(result);
  }
);
export const getAllUser = createAsyncThunk(
  "/users/readall",
  async (_, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    // const token = getItem("token");
    const token = window.localStorage.getItem("token");
    const { status, result, error } = await getRequest(`/users/readall`, token);
    return error
      ? rejectWithValue(`Cannot get user - Error status ${status} - ${error}`)
      : fulfillWithValue(result.data);
  }
);

export const readUser = createAsyncThunk("/users/read", async (_, thunkApi) => {
  const { fulfillWithValue, rejectWithValue } = thunkApi;
  // const token = getItem("token");
  const token = window.localStorage.getItem("token");
  const { status, result, error } = await getRequest(`/users/read`, token);
  return error
    ? rejectWithValue(`Cannot get user - Error status ${status} - ${error}`)
    : fulfillWithValue(result.data);
});

export const updateUser = createAsyncThunk(
  "/users/upadate",
  async (form, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    // const userid = getItem("user_id");
    // const token = getItem("token");

    const token = window.localStorage.getItem("token");

    const { status, result, error } = await putRequest(
      "/users/update",
      form,
      token
    );

    console.log(result);
    return error
      ? rejectWithValue(`Cannot get user - Error status ${status} - ${error}`)
      : fulfillWithValue(result);
  }
);
export const deleteUser = createAsyncThunk(
  "/users/read",
  async (_, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    // const token = getItem("token");
    const token = window.localStorage.getItem("token");
    const { status, result, error } = await deleteRequest(
      "/users/delete",
      token
    );
    return error
      ? rejectWithValue(`Cannot get user - Error status ${status} - ${error}`)
      : fulfillWithValue(result.data);
  }
);
