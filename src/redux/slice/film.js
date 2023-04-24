import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action
export const fetchFilms = createAsyncThunk('fetchFilms', async ({language, page}) => {

    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c90960472340983f37679878e271035a&language=${language}&page=${page}`);
    return response.json();
});

const filmSlice = createSlice({
    name: "film",
    initialState: {
       isLoading: true,
       data: null,
       esError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFilms.pending, (state, action) => {
            state.isLoading = true
        })
       builder.addCase(fetchFilms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
       });
       builder.addCase(fetchFilms.rejected, (state, action) => {
        state.isError = false;
       })
    }
});

export default filmSlice.reducer;