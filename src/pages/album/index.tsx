import { useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../hooks'
import Album from '../../components/album'

import { AlbumDetails } from './style'

type MatchParams = {
  albumId: string
}

export default function AlbumPage() {
  const routeMatch = useRouteMatch<MatchParams>()
  const albumId = parseInt(routeMatch.params.albumId)
  const album = useAppSelector((state) => state.cache.cachedAlbums[albumId])

  useEffect(() => {
    if (!album || !album.songs) {
    }
  }, [album])

  return <AlbumDetails></AlbumDetails>
}
