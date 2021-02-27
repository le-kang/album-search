import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import searchReducer from './search.slice'
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
