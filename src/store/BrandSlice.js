import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080/brands";

export const saveBrands = createAsyncThunk("brands/save", async (brands) => {
  const response = await axios.post(`${API_URL}/save`, brands);
  console.log(response);
  return response.data;
});

export const fetchBrands = createAsyncThunk("brands/fetch", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const BrandSlice = createSlice({
  name: "brands",
  initialState: {
    brands: [],
    loading: false,
    error: null,
    successfulOnSave: false,
  },
  extraReducers: (builder) => {
    builder
      // saveBrands
      .addCase(saveBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successfulOnSave = false;
      })
      .addCase(saveBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands.push(action.payload);
        state.error = null;
        state.successfulOnSave = true;
      })
      .addCase(saveBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.successfulOnSave = false;
      })

      // fetchBrands
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successfulOnSave = false;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.brands = action.payload;
        state.successfulOnSave = false;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.successfulOnSave = false;
      });
  },
});

export default BrandSlice;
