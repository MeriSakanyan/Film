import { createSlice } from '@reduxjs/toolkit';
import { fetchTopMovies } from './topMoviesApi';

const topMoviesSlice = createSlice({
       name: "topMoviesList",
       initialState: {
        isLoading: true,
        data: [],
        isError: false,
        },
    extraReducers: (builder) => {
        builder.addCase(fetchTopMovies.pending, (state, action) => {
        state.isLoading = true
        })
        .addCase(fetchTopMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
       })
       .addCase(fetchTopMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
       })
    }
    
});

export const selectTopMovies = state => state.topMoviesList;
export const topMoviesReducer = topMoviesSlice.reducer;