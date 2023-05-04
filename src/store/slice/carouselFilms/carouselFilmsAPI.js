import { createAsyncThunk } from "@reduxjs/toolkit";


  export const fetchCarouselFilms = createAsyncThunk(
    'carouselFilms/fetchCarouselFilms', async ({url}) => {
      console.log(url)
        const result = await fetch(`${url}`)
        const data = await result.json()
        return data
    }
    )