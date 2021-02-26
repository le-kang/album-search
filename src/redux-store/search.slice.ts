import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { AlbumData } from './../types'

const API_URL =
  'https://itunes.apple.com/search?attribute=albumTerm&entity=album&country=AU&term='

type Search = {
  term: string
  searching: boolean
  results: AlbumData[]
}

const initialState: Search = {
  term: '',
  searching: false,
  results: [],
}

export const searchAlbum = createAsyncThunk(
  'search/getAlbumData',
  async (term: string) => {
    const response = await fetch(API_URL + encodeURIComponent(term))
    const data = JSON.parse(await response.text()) as {
      resultCount: number
      results: AlbumData[]
    }
    return { term, results: data.results }
  }
)

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchAlbum.pending, (state) => {
      state.searching = true
    })
    builder.addCase(searchAlbum.fulfilled, (state, action) => {
      state.results = action.payload.results
      state.searching = false
    })
  },
})

export default searchSlice.reducer
