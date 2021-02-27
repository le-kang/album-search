import { Link, useRouteMatch } from 'react-router-dom'
import dayjs from 'dayjs'

import { AlbumData } from '../../types'

import { AlbumInfo, Cover, Title, Artist, ReleaseDate } from './style'

type AlbumProps = {
  album: AlbumData
}

export default function AlbumOverview({ album }: AlbumProps) {
  const routeMatch = useRouteMatch()
  const AlbumLink = ({ children }: { children: React.ReactNode }) =>
    routeMatch.path === '/' ? (
      <Link to={`/album/${album.collectionId}`}>{children}</Link>
    ) : (
      <a href={album.collectionViewUrl} target="_blank" rel="noreferrer">
        {children}
      </a>
    )

  return (
    <AlbumInfo>
      <Cover>
        <AlbumLink>
          <img src={album.artworkUrl100} alt="Album Cover" />
        </AlbumLink>
      </Cover>
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
    </AlbumInfo>
  )
}
