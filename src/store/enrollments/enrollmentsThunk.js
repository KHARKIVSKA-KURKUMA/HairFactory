import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMasterEnrollmentsThunk = createAsyncThunk(
  "enrollments/masterEnrollments",
  async (masterId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/enrollments/master/${masterId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getEnrollmentsThunk = createAsyncThunk(
  "enrollments/getEnrollments",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/enrollments/", credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
