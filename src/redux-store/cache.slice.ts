import { createSlice } from '@reduxjs/toolkit'

import { AlbumData } from './../types'
import { searchAlbums, searchAlbumWithSongs } from './search.slice'

type Cache = {
  searchHistory: { [key: string]: number[] }
  cachedAlbums: { [key: number]: AlbumData }
}

const initialState: Cache = {
  searchHistory: {},
  cachedAlbums: {},
}

const cacheSlice = createSlice({
  name: 'cache',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchAlbums.fulfilled, (state, action) => {
      const { term, results } = action.payload
      // add search results into history after a new search is fulfilled
      state.searchHistory[term] = results.map((album) => album.collectionId)
      // add searched albums into cached albums
      results.forEach((album) => {
        state.cachedAlbums[album.collectionId] = album
      })
    })
    builder.addCase(searchAlbumWithSongs.fulfilled, (state, action) => {
      const { album, songs } = action.payload
      // update fetched album in cached albums in case this album was never
      // appeared in the search result
      if (!album) return
      state.cachedAlbums[album.collectionId] = album
      // update fetched album with its songs
      state.cachedAlbums[album.collectionId]['songs'] = songs.sort(
        (a, b) => a.trackNumber - b.trackNumber
      )
    })
  },
})

export default cacheSlice.reducer
