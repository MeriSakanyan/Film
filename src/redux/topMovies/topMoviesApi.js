import { createAsyncThunk } from "@reduxjs/toolkit";

  export const fetchTopMovies = createAsyncThunk(
    'topMovies/fetchTopMovies', async ({url}) => {
        const result = await fetch(`${url}`)
        const data = await result.json()
        return data
    }
    )


