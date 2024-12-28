// src/features/dog/dogSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface DogState {
  dogs: string[];
  loading: boolean;
  error: string | null;
}

const initialState: DogState = {
  dogs: [],
  loading: false,
  error: null,
};

export const fetchDogs = createAsyncThunk('dogs/fetchDogs', async () => {
  const response = await axios.get('https://dog.ceo/api/breeds/image/random/10');
  return response.data.message;
});

const dogSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDogs.fulfilled, (state, action) => {
        state.loading = false;
        state.dogs = action.payload;
      })
      .addCase(fetchDogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Что-то пошло не так';
      });
  },
});

export default dogSlice.reducer;
