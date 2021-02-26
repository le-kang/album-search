import { createSlice } from '@reduxjs/toolkit'

import { AlbumData, SongData } from './../types'
import { searchAlbum } from './search.slice'
import { getSongs } from './album.slice'

type Cache = {
  searchHistory: { [key: string]: number[] }
  cachedAlbums: { [key: number]: AlbumData }
  cachedSongs: { [key: number]: SongData }
}

const initialState: Cache = {
  searchHistory: {},
  cachedAlbums: {},
  cachedSongs: {},
}

const cacheSlice = createSlice({
  name: 'cache',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchAlbum.fulfilled, (state, action) => {
      const { term, results } = action.payload
      // add search results into history after a new search is fulfilled
      state.searchHistory[term] = results.map((album) => album.collectionId)
      // add searched albums into cached albums
      results.forEach((album) => {
        state.cachedAlbums[album.collectionId] = album
      })
    })
    builder.addCase(getSongs.fulfilled, (state, action) => {
      const { albumId, songs } = action.payload
      // update fetched album with a list of song trackId
      state.cachedAlbums[albumId]['songs'] = songs.map((song) => song.trackId)
      // add songs to cached songs
      songs.forEach((song) => {
        state.cachedSongs[song.trackId] = song
      })
    })
  },
})

export default cacheSlice.reducer
