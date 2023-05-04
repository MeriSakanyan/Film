import { createAsyncThunk } from "@reduxjs/toolkit";


  export const fetchUniquePageFilm = createAsyncThunk(
    'uniquePageFilm/fetchUniquePageFilm', async ({url}) => {
        const result = await fetch(`${url}`)
        const data = await result.json()
        return data
    }
    )