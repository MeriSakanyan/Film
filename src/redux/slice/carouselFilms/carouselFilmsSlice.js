import { createSlice } from '@reduxjs/toolkit';
import { fetchCarouselFilms } from './carouselFilmsAPI';

// Action
const carouselFilmsSlice = createSlice({
       name: "films",
       initialState: {
        isLoading: true,
        data: [],
        isError: false,
        },
    extraReducers: (builder) => {
        builder.addCase(fetchCarouselFilms.pending, (state, action) => {
        state.isLoading = true
        })
        .addCase(fetchCarouselFilms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
       })
       .addCase(fetchCarouselFilms.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
       })
    }
});

export const selectCarouselFilms = state => state.films
export const carouselFilmsReducer = carouselFilmsSlice.reducer;