import { useAppSelector } from '../../hooks'
import Spinner from '../spinner'
import AlbumOverview from '../album-overview'

import { ResultContainer } from './style'

export default function SearchResult() {
  const search = useAppSelector((state) => state.search)

  return (
    <ResultContainer>
      {search.searching && <Spinner />}
      {!search.searching &&
        search.results.map((album) => (
          <AlbumOverview key={album.collectionId} album={album} />
        ))}
    </ResultContainer>
  )
}
