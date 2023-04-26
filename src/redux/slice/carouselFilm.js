import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action
export const fetchCarouselFilms = createAsyncThunk('fetchCarouselFilms', async ({url}) => {
     try {
        const response = await fetch(`${url}`);
        return response.json();
        } catch (error) {
                   console.log(error)
                  }
});



const CarouselfilmSlice = createSlice({
    name: "carouselFilm",
    initialState: {
       isLoading: true,
       data: null,
       esError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCarouselFilms.pending, (state, action) => {
            state.isLoading = true
        })
       builder.addCase(fetchCarouselFilms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
       });
       builder.addCase(fetchCarouselFilms.rejected, (state, action) => {
        state.isError = false;
       })
    }
});

export default CarouselfilmSlice.reducer;