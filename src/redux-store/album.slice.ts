import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { AlbumData, SongData } from './../types'

const API_URL = 'https://itunes.apple.com/lookup?country=AU&entity=song&id='

type Album = {
  songs: SongData[]
  loading: boolean
}

const initialState: Album = {
  songs: [],
  loading: false,
}

export const getSongs = createAsyncThunk(
  'album/getSongs',
  async (albumId: number) => {
    const response = await fetch(API_URL + encodeURIComponent(albumId))
    const data = JSON.parse(await response.text()) as {
      resultCount: number
      results: (AlbumData | SongData)[]
    }
    return {
      album: data.results.find(
        (entity) => entity.wrapperType === 'collection'
      )! as AlbumData,
      songs: data.results.filter(
        (entity) => entity.wrapperType === 'track'
      ) as SongData[],
    }
  }
)

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSongs.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getSongs.fulfilled, (state, action) => {
      state.songs = action.payload.songs
      state.loading = false
    })
  },
})

export default albumSlice.reducer
