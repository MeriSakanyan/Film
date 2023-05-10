import { createSlice } from '@reduxjs/toolkit';
import { fetchCinemaMovies } from './cinemaMoviesAPI';

const cinemaMoviesSlice = createSlice({
       name: "cinemaMovies",
       initialState: {
        isLoading: true,
        data: [],
        isError: false,
        },
    extraReducers: (builder) => {
        builder.addCase(fetchCinemaMovies.pending, (state, action) => {
        state.isLoading = true
        })
        .addCase(fetchCinemaMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
       })
       .addCase(fetchCinemaMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
       })
    }
});

export const selectCinemaMovies = state => state.cinemaMovies;
export const cinemaMoviesReducer = cinemaMoviesSlice.reducer;