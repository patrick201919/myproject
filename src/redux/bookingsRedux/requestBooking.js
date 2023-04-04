import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteRequest,
  postRequest,
  putRequest,
  getRequest,
} from "../../components/api/Api";

export const createBooking = createAsyncThunk(
  "/booking/create",
  async (form, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    const { status, result, error } = await postRequest(
      "/reservations/create",
      form
    );
    console.log(result);
    return error
      ? rejectWithValue(`Cannot sign up - Error status ${status} - ${error}`)
      : fulfillWithValue(result);
  }
);
export const getAllBooking = createAsyncThunk(
  "/booking/readall",
  async (_, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    // const token = getItem("token");
    const token = window.localStorage.getItem("token");
    const { status, result, error } = await getRequest(
      `/reservations/readall`,
      token
    );
    return error
      ? rejectWithValue(`Cannot get user - Error status ${status} - ${error}`)
      : fulfillWithValue(result.data);
  }
);

export const readBooking = createAsyncThunk(
  "/booking/read",
  async (_, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    // const token = getItem("token");
    const token = window.localStorage.getItem("token");
    const { status, result, error } = await getRequest(
      `/reservations/read`,
      token
    );
    return error
      ? rejectWithValue(`Cannot get user - Error status ${status} - ${error}`)
      : fulfillWithValue(result.data);
  }
);

export const updateBooking = createAsyncThunk(
  "/booking/upadate",
  async (form, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    // const userid = getItem("user_id");
    // const token = getItem("token");

    const token = window.localStorage.getItem("token");

    const { status, result, error } = await putRequest(
      "/reservations/update",
      form,
      token
    );

    console.log(result);
    return error
      ? rejectWithValue(`Cannot get user - Error status ${status} - ${error}`)
      : fulfillWithValue(result);
  }
);
export const deleteBooking = createAsyncThunk(
  "/booking/read",
  async (_, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    // const token = getItem("token");
    const token = window.localStorage.getItem("token");
    const { status, result, error } = await deleteRequest(
      "/reservations/delete",
      token
    );
    return error
      ? rejectWithValue(`Cannot get user - Error status ${status} - ${error}`)
      : fulfillWithValue(result.data);
  }
);
