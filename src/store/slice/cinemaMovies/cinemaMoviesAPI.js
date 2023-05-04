import { createAsyncThunk } from "@reduxjs/toolkit";


  export const fetchCinemaMovies = createAsyncThunk(
    'cinemaMovies/fetchCinemaMovies', async ({url}) => {
        const result = await fetch(`${url}`)
        const data = await result.json()
        console.log(data)
        return data
    }
    )