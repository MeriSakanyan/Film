import { configureStore } from '@reduxjs/toolkit';
import { carouselFilmsReducer } from './slice/carouselFilms/carouselFilmsSlice';
import { moviesListReducer } from './slice/MoviesList/MoviesListSlice';

export const store = configureStore({
    reducer: {
        films: carouselFilmsReducer,
        filmList: moviesListReducer
    },
});