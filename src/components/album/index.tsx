import { Link, useRouteMatch } from 'react-router-dom'
import dayjs from 'dayjs'

import { AlbumData } from '../../types'

import { AlbumContainer, Cover, Title, Artist, ReleaseDate } from './style'

type AlbumProps = {
  album: AlbumData
}

export default function Album({ album }: AlbumProps) {
  const routeMatch = useRouteMatch()
  console.log(routeMatch)

  return (
    <AlbumContainer>
      <Link to={`/album/${album.collectionId}`}>
        <Cover>
          <img src={album.artworkUrl100} alt="Album Cover" />
        </Cover>
      </Link>
      <Title title={album.collectionName}>{album.collectionName}</Title>
      <Artist
        href={album.artistViewUrl}
        title={album.artistName}
        target="_blank"
        rel="noreferrer"
      >
        {album.artistName}
      </Artist>
      <ReleaseDate dateTime={album.releaseDate}>
        {dayjs(album.releaseDate).format('DD MMM YYYY')}
      </ReleaseDate>
    </AlbumContainer>
  )
}
