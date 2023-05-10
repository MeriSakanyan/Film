import { createSlice } from '@reduxjs/toolkit';
import { fetchUniquePageFilm }  from './uniquePageApi';
 
const uniquePageFilmSlice = createSlice({
       name: "uniquePageFilm",
       initialState: {
        isLoading: true,
        data: [],
        isError: false,
        },
    extraReducers: (builder) => {
        builder.addCase(fetchUniquePageFilm.pending, (state, action) => {
        state.isLoading = true
        })
        .addCase(fetchUniquePageFilm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
       })
       .addCase(fetchUniquePageFilm.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
       })
    }
});

export const selectUniquePageFilm = state => state.uniquePageFilm;
export const uniquePageFilmReducer = uniquePageFilmSlice.reducer;