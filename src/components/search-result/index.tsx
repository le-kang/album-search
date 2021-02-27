import { useSelector } from 'react-redux'

import { useAppSelector } from '../../hooks'
import Spinner from '../spinner'
import AlbumOverview from '../album-overview'
import { cachedSearchResultsSelector } from '../../redux-store'

import { ResultContainer } from './style'

export default function SearchResult() {
  const search = useAppSelector((state) => state.search)
  const cachedSearchResults = useSelector(cachedSearchResultsSelector)

  return (
    <ResultContainer>
      {search.searching && <Spinner />}
      {!search.searching &&
        search.results.map((album) => (
          <AlbumOverview key={album.collectionId} album={album} />
        ))}
      {!search.searching &&
        search.results.length === 0 &&
        cachedSearchResults &&
        cachedSearchResults.map((album) => (
          <AlbumOverview key={album.collectionId} album={album} />
        ))}
    </ResultContainer>
  )
}
