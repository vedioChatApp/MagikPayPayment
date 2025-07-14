// src/features/user/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../services/userService';

export const addUserThunk = createAsyncThunk(
  'users/addUser',
  async (userData, { rejectWithValue }) => {
    try {
      return await userService.addUser(userData);
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);


const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    data:{},
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(addUserThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(addUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

  },
});

export default userSlice.reducer;
