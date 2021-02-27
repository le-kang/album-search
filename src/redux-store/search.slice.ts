import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { AlbumData, SongData } from './../types'

const ALBUM_API_URL =
  'https://itunes.apple.com/search?attribute=albumTerm&entity=album&country=AU&term='

const SONG_API_URL =
  'https://itunes.apple.com/lookup?country=AU&entity=song&id='

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

const processSearchKeywords = (keywords: string) =>
  keywords
    .split(' ')
    .filter((word) => !!word)
    .join('+')

export const searchAlbums = createAsyncThunk(
  'search/Albums',
  async (term: string) => {
    term = processSearchKeywords(term)
    const response = await fetch(ALBUM_API_URL + term)
    const data = JSON.parse(await response.text()) as {
      resultCount: number
      results: AlbumData[]
    }
    return { term, results: data.results }
  }
)

export const searchAlbumWithSongs = createAsyncThunk(
  'search/AlbumWithSongs',
  async (albumId: number) => {
    const response = await fetch(SONG_API_URL + encodeURIComponent(albumId))
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

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchAlbums.pending, (state) => {
      state.searching = true
    })
    builder.addCase(searchAlbums.fulfilled, (state, action) => {
      state.results = action.payload.results
      state.searching = false
    })
  },
})

export const { updateSearchTerm } = searchSlice.actions

export default searchSlice.reducer
