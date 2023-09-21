import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllComics = createAsyncThunk("", async () => {});

export const comicsSlice = createSlice({
  name: "Comics",
  initialState: [],
  reducers: {},
  extraReducers: {},
});
