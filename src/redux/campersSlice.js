import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  campers: [],
  status: "idle",
  error: null,
};

// export const fetchCampers = createAsyncThunk(
//   "campers/fetchCampers",
//   async (filters) => {
//     const { data } = await axios.get(
//       "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
//       { params: filters }
//     );
//     return data;
//   }
// );

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (filters, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
        { params: filters }
      );
      if (!Array.isArray(data)) {
        throw new Error("Response is not an array");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredCampers = createAsyncThunk(
  "campers/fetchFilteredCampers",
  async (filters) => {
    const { data } = await axios.get(
      "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
      { params: filters }
    );
    return data;
  }
);

// const campersSlice = createSlice({
//   name: "campers",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCampers.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchCampers.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.campers = action.payload;
//       })
//       .addCase(fetchCampers.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.campers = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch campers.";
      });
  },
});

export default campersSlice.reducer;
