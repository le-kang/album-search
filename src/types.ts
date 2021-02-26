type EntityData = {
  collectionId: number
  collectionName: string
  collectionViewUrl: string
  artistName: string
  artistViewUrl: string
  artworkUrl60?: string
  artworkUrl100?: string
  trackCount: number
  releaseDate: string
  primaryGenreName: string
}

export type AlbumData = EntityData & {
  wrapperType: 'collection'
  songs?: number[]
}

export type SongData = EntityData & {
  wrapperType: 'track'
  trackId: number
  trackNumber: number
  trackCensoredName: string
  trackTimeMillis: number
  previewUrl?: string
}
