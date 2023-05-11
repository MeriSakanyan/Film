import { createSlice } from '@reduxjs/toolkit';
import { fetchRandom } from './randomApi';
 
const randomSlice = createSlice({
       name: "random",
       initialState: {
        isLoading: true,
        data: [],
        isError: false,
        },
    extraReducers: (builder) => {
        builder.addCase(fetchRandom.pending, (state, action) => {
        state.isLoading = true
        })
        .addCase(fetchRandom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
       })
       .addCase(fetchRandom.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
       })
    }
});

export const selectRandom = state => state.random;
export const randomReducer = randomSlice.reducer;