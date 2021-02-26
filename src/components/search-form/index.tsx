import { useRef, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'

import { useAppSelector, useAppDispatch } from '../../hooks'
import { updateSearchTerm, searchAlbum } from '../../redux-store/search.slice'

import { SearchBar, SearchForm, SearchInput, SearchButton } from './style'

export default function SearchBox() {
  const inputRef = useRef<HTMLInputElement>(null)

  const searchTerm = useAppSelector((state) => state.search.term)
  const dispatch = useAppDispatch()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    dispatch(searchAlbum(searchTerm))
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(updateSearchTerm(e.target.value))
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <SearchBar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          ref={inputRef}
          type="text"
          name="term"
          value={searchTerm}
          onChange={handleChange}
        />
        <SearchButton type="submit">
          <FaSearch />
        </SearchButton>
      </SearchForm>
    </SearchBar>
  )
}
