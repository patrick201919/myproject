import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteRequest,
  postRequest,
  putRequest,
  getRequest,
} from "../../components/api/Api";

export const createVehicle = createAsyncThunk(
  "/vehicles/create",
  async (form, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    const token = window.localStorage.getItem("token");
    const { status, result, error } = await postRequest(
      "/vehicles/create",
      form,
      token
    );
    const vehicleId = result.data.result.id;

    console.log("resultID", vehicleId);

    localStorage.setItem("vehicleId", vehicleId);
    return error
      ? rejectWithValue(`Cannot sign up - Error status ${status} - ${error}`)
      : fulfillWithValue({ result, vehicleId });
  }
);
export const getAllVehicle = createAsyncThunk(
  "/vehicles/readall",
  async (_, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    const { status, result, error } = await getRequest(
      "/vehicles/readall"
      // token
    );
    console.log("resut", result);
    return error
      ? rejectWithValue(`Cannot get user - Error status ${status} - ${error}`)
      : fulfillWithValue(result.data);
  }
);

export const readVehicle = createAsyncThunk(
  "/vehicles/read",
  async (_, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    const token = window.localStorage.getItem("token");
    const { status, result, error } = await getRequest("/vehicles/read", token);
    return error
      ? rejectWithValue(`Cannot get user - Error status ${status} - ${error}`)
      : fulfillWithValue(result.data);
  }
);

export const updateVehicle = createAsyncThunk(
  "/vehicles/upadate",
  async (form, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    const token = window.localStorage.getItem("token");
    const { status, result, error } = await putRequest(
      "/vehicles/update",
      form,
      token
    );
    console.log(result);
    return error
      ? rejectWithValue(`Cannot get user - Error status ${status} - ${error}`)
      : fulfillWithValue(result);
  }
);

export const deleteVehicle = createAsyncThunk(
  "/vehicles/delete",
  async (id, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    const token = window.localStorage.getItem("token");
    const { status, result, error } = await deleteRequest(
      "/vehicles/delete",
      { id: id },
      token
    );
    return error
      ? rejectWithValue(`Cannot get user - Error status ${status} - ${error}`)
      : fulfillWithValue(result.data);
  }
);
