import { createSlice } from '@reduxjs/toolkit';
import { fetchSimilarMovies } from './similarMoviesApi'; 

const similarMoviesSlice = createSlice({
       name: "similarMovie",
       initialState: {
        isLoading: true,
        data: [],
        isError: false,
        },
    extraReducers: (builder) => {
        builder.addCase(fetchSimilarMovies.pending, (state, action) => {
        state.isLoading = true
        })
        .addCase(fetchSimilarMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
       })
       .addCase(fetchSimilarMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
       })
    }
});

export const selectSimilarMovies = state => state.similarMovie;
export const similarMoviesReducer = similarMoviesSlice.reducer;