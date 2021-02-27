import styled from 'styled-components'

export const SearchBar = styled.div`
  position: sticky;
  width: 100%;
  z-index: 10;
  top: 0;
  padding: 1.5rem 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchForm = styled.form`
  width: 90%;
  max-width: 800px;
  display: flex;
  border: 1px solid var(--border-color);
  border-radius: 25px;
  padding: 0 25px;
  background: white;

  &:hover,
  &:focus-within {
    box-shadow: var(--box-shadow);
  }
`

export const SearchInput = styled.input`
  height: 50px;
  flex-grow: 1;
  font-size: 1.5rem;
  border: none;
  outline: none;
  color: var(--primary-color);
  font-weight: bold;
`

export const SearchButton = styled.button`
  width: 30px;
  height: 50px;
  margin: 0;
  padding: 0;
  border: none;
  color: var(--primary-color);
  font-size: 1.5rem;
  outline: none;
  flex-shrink: 0;
  cursor: pointer;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
