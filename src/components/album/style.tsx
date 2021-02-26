import styled from 'styled-components'

export const AlbumContainer = styled.article`
  display: flex;
  flex-direction: column;
`

export const Cover = styled.div`
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  position: relative;
  background-color: white;
  box-shadow: var(--box-shadow);
  cursor: pointer;

  img {
    position: absolute;
    width: 100%;
    height: auto;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const Title = styled.h2`
  padding: 0;
  margin: 0.25rem 0 0;
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.1rem;
  min-height: 2.2rem;
`

export const Artist = styled.a`
  margin-top: 0.25rem;
  width: 100%;
  font-size: 0.75rem;
  color: var(--secondary-color);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`

export const ReleaseDate = styled.time`
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: grey;
`
