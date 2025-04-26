import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080/category";

export const fetchproducts = createAsyncThunk("category/fetch", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const CategorySlice = createSlice({
  name: "CategorySlice",
  initialState: {
    error: null,
    categories: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchproducts.pending, (state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(fetchproducts.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
        state.error = null;
    })
    .addCase(fetchproducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
    })
  },
});

export default CategorySlice;