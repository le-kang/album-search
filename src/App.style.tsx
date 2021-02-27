import styled, { css } from 'styled-components'

import { mediaQueries } from './global.style'

export const Header = styled.header`
  background-color: var(--primary-color);
  padding: 1rem;
  font-size: 1.5rem;
  color: white;
  font-weight: bolder;
  text-align: center;
  text-transform: uppercase;

  ${mediaQueries('xl')(css`
    font-size: 2.5rem;
  `)}
`

export const Main = styled.main`
  flex-grow: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
