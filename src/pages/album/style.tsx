import styled, { css } from 'styled-components'

import { mediaQueries } from '../../global.style'
import {
  AlbumInfo,
  Cover,
  Title,
  Artist,
  ReleaseDate,
} from '../../components/album-overview/style'

export const AlbumDetails = styled.div`
  width: 90%;
  max-width: 1000px;

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
  display: grid;
  grid-template-columns: 25px 1fr 50px;
  margin: 2rem 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  background-color: var(--border-color);
  row-gap: 1px;

  div {
    padding: 1rem 0;
    width: 100%;
    background-color: white;
  }
`
