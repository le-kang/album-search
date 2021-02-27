import { combineReducers } from 'redux'
import { configureStore, createSelector } from '@reduxjs/toolkit'

import searchReducer, { processSearchKeywords } from './search.slice'
import cacheReducer from './cache.slice'

const rootReducer = combineReducers({
  search: searchReducer,
  cache: cacheReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const searchSelector = (state: RootState) => state.search
const cacheSelector = (state: RootState) => state.cache

export const cachedSearchResultsSelector = createSelector(
  [searchSelector, cacheSelector],
  (search, cache) =>
    cache.searchHistory[processSearchKeywords(search.term)]?.map(
      (albumId) => cache.cachedAlbums[albumId]
    )
)
