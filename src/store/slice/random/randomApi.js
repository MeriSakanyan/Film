import { createAsyncThunk } from "@reduxjs/toolkit";

  export const fetchRandom= createAsyncThunk(
    'random/fetchRandom', async ({url}) => {
        const result = await fetch(`${url}`)
        const data = await result.json()
        return data
    }
  )