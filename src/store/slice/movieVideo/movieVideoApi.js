import { createAsyncThunk } from "@reduxjs/toolkit";

  export const fetchMovieVideo = createAsyncThunk(
    'movieVideo/fetchMovieVideo', async ({url}) => {
        const result = await fetch(`${url}`)
        const data = await result.json()
        return data
    }
  )