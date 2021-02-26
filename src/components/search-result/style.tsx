import styled, { css } from 'styled-components'
import { mediaQueries } from '../../global.style'

export const ResultContainer = styled.div`
  position: relative;
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  width: 90%;
  max-width: 1000px;

  ${mediaQueries('md')(css`
    grid-template-columns: repeat(3, 1fr);
  `)}

  ${mediaQueries('lg')(css`
    grid-template-columns: repeat(4, 1fr);
  `)}

  ${mediaQueries('xl')(css`
    grid-template-columns: repeat(5, 1fr);
  `)}
`
