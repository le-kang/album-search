import { useAppSelector } from '../../hooks'
import Spinner from '../spinner'
import Album from '../album'

import { ResultContainer } from './style'

export default function SearchResult() {
  const search = useAppSelector((state) => state.search)

  return (
    <ResultContainer>
      {search.searching && <Spinner />}
      {!search.searching &&
        search.results.map((album) => (
          <Album key={album.collectionId} album={album} />
        ))}
    </ResultContainer>
  )
}
