import { combineReducers } from 'redux'
import {
  configureStore,
  createSelector,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import searchReducer, { processSearchKeywords } from './search.slice'
import cacheReducer from './cache.slice'

const rootReducer = combineReducers({
  search: searchReducer,
  cache: cacheReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cache'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store

export type RootState = ReturnType<typeof store.getState>
export const persistor = persistStore(store)
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
