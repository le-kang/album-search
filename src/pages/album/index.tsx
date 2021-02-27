import { useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../hooks'
import { searchAlbumWithSongs } from '../../redux-store/search.slice'
import AlbumOverview from '../../components/album-overview'
import Song from '../../components/song'

import { AlbumDetails, SongList } from './style'

type MatchParams = {
  albumId: string
}

export default function AlbumPage() {
  const routeMatch = useRouteMatch<MatchParams>()
  const albumId = parseInt(routeMatch.params.albumId)
  const album = useAppSelector((state) => state.cache.cachedAlbums[albumId])
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!album || !album.songs) {
      dispatch(searchAlbumWithSongs(albumId))
    }
  }, [albumId, album, dispatch])

  return (
    <AlbumDetails>
      {album && <AlbumOverview album={album} />}
      <SongList>
        {album &&
          album.songs?.map((song) => <Song key={song.trackId} song={song} />)}
      </SongList>
    </AlbumDetails>
  )
}
