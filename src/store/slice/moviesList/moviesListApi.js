import { createAsyncThunk } from "@reduxjs/toolkit";

  export const fetchMoviesList = createAsyncThunk(
    'moviesList/fetchMoviesList', async ({url}) => {
        const result = await fetch(`${url}`)
        const data = await result.json()
        return data
    }
  )