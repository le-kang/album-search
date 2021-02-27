import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

import { SongData } from '../../types'

import { TrackNumber, SongName, Duration } from './style'

type SongProps = {
  song: SongData
}

dayjs.extend(duration)

export default function Song({ song }: SongProps) {
  return (
    <>
      <TrackNumber>{song.trackNumber}</TrackNumber>
      <SongName>{song.trackName}</SongName>
      <Duration>
        {dayjs.duration(song.trackTimeMillis).format('mm:ss')}
      </Duration>
    </>
  )
}
