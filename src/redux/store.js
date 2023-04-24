import { configureStore } from '@reduxjs/toolkit';
import filmReducer from './slice/film';

export const store = configureStore({
    reducer: {
       film: filmReducer,
    },
});