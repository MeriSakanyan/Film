import { createSlice } from '@reduxjs/toolkit';
import { fetchMoviesList } from './moviesListApi';

// Action
const moviesListSlice = createSlice({
       name: "filmList",
       initialState: {
        isLoading: true,
        data: [],
        isError: false,
        },
    extraReducers: (builder) => {
        builder.addCase(fetchMoviesList.pending, (state, action) => {
        state.isLoading = true
        })
        .addCase(fetchMoviesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
       })
       .addCase(fetchMoviesList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
       })
    }
});

export const selectMoviesList = state => state.filmList
export const moviesListReducer = moviesListSlice.reducer;