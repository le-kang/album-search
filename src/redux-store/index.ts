import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import searchReducer from './search.slice'
import albumReducer from './album.slice'
import cacheReducer from './cache.slice'

const rootReducer = combineReducers({
  search: searchReducer,
  album: albumReducer,
  cache: cacheReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store

export type RootState = ReturnType<typeof store.getState>
