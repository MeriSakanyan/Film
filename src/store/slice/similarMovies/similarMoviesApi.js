import { createAsyncThunk } from "@reduxjs/toolkit";

  export const fetchSimilarMovies = createAsyncThunk(
    'similarmovie/fetchSimilarMovies', async ({url}) => {
        const result = await fetch(`${url}`)
        const data = await result.json()
       
        return data
        
    }
    )

 


