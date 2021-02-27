import styled, { css } from 'styled-components'

import { mediaQueries } from '../../global.style'
import {
  AlbumInfo,
  Cover,
  Title,
  Artist,
  ReleaseDate,
} from '../../components/album-overview/style'

export const BackToSearch = styled.div`
  width: 90%;
  max-width: 1000px;
  padding: 1rem 0;
  color: var(--primary-color);
  font-weight: bold;
`

export const AlbumDetails = styled.div`
  flex: 1;
  width: 90%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;

  ${mediaQueries('md')(css`
    ${AlbumInfo} {
      display: grid;
      grid-template-columns: 180px 1fr;
      grid-template-rows: 2fr 1fr 1fr;
      grid-template-areas: 'cover title' 'cover artist' 'cover date';
      grid-gap: 1rem;
    }

    ${Cover} {
      grid-area: cover;
    }

    ${Title} {
      grid-area: title;
      font-size: 1.5rem;
      align-self: center;
      line-height: 1.6rem;
      height: 3.2rem;
    }

    ${Artist} {
      grid-area: artist;
      font-size: 1.2rem;
      align-self: end;
    }

    ${ReleaseDate} {
      grid-area: date;
      font-size: 1rem;
      align-self: start;
    }
  `)}
`

export const SongList = styled.div`
  position: relative;
  flex-grow: 1;
  border-top: 1px solid var(--border-color);
  margin-top: 2rem;
`

export const ExtraInfo = styled.div`
  color: grey;
`
