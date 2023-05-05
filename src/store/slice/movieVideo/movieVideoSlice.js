import { createSlice } from '@reduxjs/toolkit';
import { fetchMovieVideo } from './movieVideoApi';  
 
// Action
const movieVideoSlice = createSlice({
       name: "movieVideo",
       initialState: {
        isLoading: true,
        data: [],
        isError: false,
        },
    extraReducers: (builder) => {
        builder.addCase(fetchMovieVideo.pending, (state, action) => {
        state.isLoading = true
        })
        .addCase(fetchMovieVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
       })
       .addCase(fetchMovieVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
       })
    }
});

export const selectMovieVideo = state => state.movieVideo;
export const movieVideoReducer = movieVideoSlice.reducer;