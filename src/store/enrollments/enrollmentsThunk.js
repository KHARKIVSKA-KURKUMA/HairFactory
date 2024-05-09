import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* ------------------------- GET MASTER'S ENROLMENT ------------------------- */
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
/* --------------------------------- GET ALL -------------------------------- */
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
/* -------------------------------- GET BY ID ------------------------------- */
export const getEnrolmentThunk = createAsyncThunk(
  "enrollments/getEnrolment",
  async (enrolmentId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/enrollments/${enrolmentId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
/* ----------------------------------- ADD ---------------------------------- */
export const postEnrollmentsThunk = createAsyncThunk(
  "enrollments/postEnrollments",
  async (newEnrolment, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/enrollments/", newEnrolment);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
/* --------------------------------- DELETE --------------------------------- */
export const deleteEnrollmentsThunk = createAsyncThunk(
  "enrollments/deleteEnrolment",
  async (enrolmentId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/enrollments/${enrolmentId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
/* --------------------------------- UPDATE --------------------------------- */
export const putEnrollmentsThunk = createAsyncThunk(
  "enrollments/updateEnrolment",
  async ({ enrolmentId, newEnrolment }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `/enrollments/${enrolmentId}`,
        newEnrolment
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
