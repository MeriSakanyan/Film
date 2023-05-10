import { configureStore } from '@reduxjs/toolkit';
import { carouselFilmsReducer } from './slice/carouselFilms/carouselFilmsSlice';
import { moviesListReducer } from './slice/moviesList/moviesListSlice';
import { topMoviesReducer } from './slice/topMovies/topMoviesSlice';
import { cinemaMoviesReducer } from './slice/cinemaMovies/cinemaMoviesSlice';
import {uniquePageFilmReducer} from './slice/uniquePage/uniquePageSlice'
import { similarMoviesReducer } from './slice/similarMovies/similarMoviesSlice';
import { movieVideoReducer } from './slice/movieVideo/movieVideoSlice';
import { searchReducer } from './slice/search/searchSlice';

export const store = configureStore({
    reducer: {
        films: carouselFilmsReducer,
        filmList: moviesListReducer,
        topMoviesList: topMoviesReducer,
        cinemaMovies: cinemaMoviesReducer,
        uniquePageFilm: uniquePageFilmReducer,
        similarMovie: similarMoviesReducer,
        movieVideo: movieVideoReducer,
        search: searchReducer,
    },
});