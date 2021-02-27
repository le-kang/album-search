import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

import { SongData } from '../../types'

import { SongItem, TrackNumber, SongName, Duration, PreviewLink } from './style'

dayjs.extend(duration)

type SongProps = {
  song: SongData
}

export default function Song({ song }: SongProps) {
  return (
    <SongItem>
      <TrackNumber>{song.trackNumber}</TrackNumber>
      <SongName>{song.trackName}</SongName>
      <Duration>
        {dayjs.duration(song.trackTimeMillis).format('mm:ss')}
      </Duration>
      {song.previewUrl && (
        <PreviewLink href={song.previewUrl} target="_blank" rel="noreferrer">
          Preview
        </PreviewLink>
      )}
    </SongItem>
  )
}
