import { createAsyncThunk } from "@reduxjs/toolkit";
import { postRequest, putRequest } from "../../components/api/Api";

export const createMedia = createAsyncThunk(
  "/media/create",
  async (form, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    const token = window.localStorage.getItem("token");
    const { status, result, error } = await postRequest(
      "/media/create",
      form,
      token
    );
    console.log(result);
    return error
      ? rejectWithValue(`Cannot sign up - Error status ${status} - ${error}`)
      : fulfillWithValue(result);
  }
);

export const updateMedia = createAsyncThunk(
  "/media/upadate",
  async (form, thunkApi) => {
    console.log("form", form);
    const { fulfillWithValue, rejectWithValue } = thunkApi;

    const token = window.localStorage.getItem("token");
    const { status, result, error } = await putRequest(
      "/media/update",
      form,
      token
    );

    console.log(result);
    return error
      ? rejectWithValue(`Cannot get user - Error status ${status} - ${error}`)
      : fulfillWithValue(result);
  }
);
