import { configureStore } from '@reduxjs/toolkit';
import { carouselFilmsReducer } from './slice/carouselFilms/carouselFilmsSlice';
import { moviesListReducer } from './slice/moviesList/moviesListSlice';
import { topMoviesReducer } from './slice/topMovies/topMoviesSlice';
import { cinemaMoviesReducer } from './slice/cinemaMovies/cinemaMoviesSlice';

export const store = configureStore({
    reducer: {
        films: carouselFilmsReducer,
        filmList: moviesListReducer,
        topMoviesList: topMoviesReducer,
        cinemaMovies: cinemaMoviesReducer,
    },
});