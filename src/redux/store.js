import { configureStore } from '@reduxjs/toolkit';
import filmReducer from './slice/film';
import carouselFilmReducer from './slice/carouselFilm'
export const store = configureStore({
    reducer: {
       film: filmReducer,
       carouselFilm: carouselFilmReducer
    },
});