import { configureStore } from '@reduxjs/toolkit';
import { carouselFilmsReducer } from './slice/carouselFilms/carouselFilmsSlice';
import { moviesListReducer } from './slice/moviesList/moviesListSlice';
import { topMoviesReducer } from './topMovies/topMoviesSlice';

export const store = configureStore({
    reducer: {
        films: carouselFilmsReducer,
        filmList: moviesListReducer,
        topMoviesList: topMoviesReducer,
    },
});