import { createAsyncThunk } from "@reduxjs/toolkit";

  export const fetchSearch= createAsyncThunk(
    'seacrh/FetchSearch', async ({url}) => {
        const result = await fetch(`${url}`)
        const data = await result.json()
        return data
    }
  )