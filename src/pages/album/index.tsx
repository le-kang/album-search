import { useEffect } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

import { useAppSelector, useAppDispatch } from '../../hooks'
import { searchAlbumWithSongs } from '../../redux-store/search.slice'
import { SongData } from '../../types'
import AlbumOverview from '../../components/album-overview'
import Spinner from '../../components/spinner'
import Song from '../../components/song'

import { BackToSearch, AlbumDetails, SongList, ExtraInfo } from './style'

dayjs.extend(duration)

type MatchParams = {
  albumId: string
}

const getAlbumTotalTime = (songs: SongData[]) =>
  Math.ceil(
    dayjs
      .duration(
        songs.reduce((total, song) => (total += song.trackTimeMillis), 0)
      )
      .asMinutes()
  )

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
    <>
      <BackToSearch>
        <Link to="/">Back to Search</Link>
      </BackToSearch>
      <AlbumDetails>
        {album && <AlbumOverview album={album} />}
        <SongList>
          {(!album || !album.songs) && <Spinner />}
          {album &&
            album.songs?.map((song) => <Song key={song.trackId} song={song} />)}
          <ExtraInfo>
            {album && album.songs && (
              <p>
                {album.songs.length} SONGS, {''}
                {getAlbumTotalTime(album.songs)} MINUTES
                <br />
                {album.copyright}
              </p>
            )}
          </ExtraInfo>
        </SongList>
      </AlbumDetails>
    </>
  )
}
