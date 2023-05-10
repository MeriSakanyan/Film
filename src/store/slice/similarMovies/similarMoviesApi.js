import { createAsyncThunk } from "@reduxjs/toolkit";

  export const fetchSimilarMovies = createAsyncThunk(
    'similarMovies/fetchSimilarMovies', async ({url}) => {
        const result = await fetch(`${url}`)
        const data = await result.json()
        return data
    }
  )