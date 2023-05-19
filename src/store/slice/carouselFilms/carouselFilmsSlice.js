import { createSlice } from '@reduxjs/toolkit';
import { fetchCarouselFilms } from './carouselFilmsAPI';

const carouselFilmsSlice = createSlice({
       name: "films",
       initialState: {
        isLoading: true,
        data: [],
        isError: false,
        firstFilm: null
        },
    extraReducers: (builder) => {
        builder.addCase(fetchCarouselFilms.pending, (state, action) => {
        state.isLoading = true
        })
        .addCase(fetchCarouselFilms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.firstFilm = {id: action.payload.results[0].id, image: action.payload.results[0].backdrop_path}
       })
       .addCase(fetchCarouselFilms.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
       })
    }
});

export const selectCarouselFilms = state => state.films;
export const carouselFilmsReducer = carouselFilmsSlice.reducer;