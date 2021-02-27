import styled from 'styled-components'

export const PreviewLink = styled.a`
  position: absolute;
  right: 0.5rem;
  background-color: var(--secondary-color);
  color: white;
  top: 50%;
  transform: translateY(-50%);
  height: 24px;
  width: 60px;
  font-size: 0.75rem;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  display: none;
`

export const SongItem = styled.div`
  position: relative;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  padding: 1rem 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--border-color);

    ${PreviewLink} {
      display: flex;
    }
  }
`

export const TrackNumber = styled.div`
  width: 30px;
  color: grey;
`

export const SongName = styled.div`
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Duration = styled.div`
  width: 60px;
  text-align: right;
  color: grey;
`
