import { configureStore } from '@reduxjs/toolkit';
import { carouselFilmsReducer } from './slice/carouselFilms/carouselFilmsSlice';

export const store = configureStore({
    reducer: {
        films: carouselFilmsReducer,
    },
});