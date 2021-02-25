import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

import App from './App'

describe('App', () => {
  const history = createMemoryHistory()

  beforeEach(() => {
    render(
      <Router history={history}>
        <App />
      </Router>
    )
  })

  test('landing on no match page with a bad path', () => {
    history.push('/some/bad/path')
    expect(
      screen.getByText(/you will be redirected to home page/i)
    ).toBeInTheDocument()
  })

  test('navigating to home from other location', () => {
    history.push('/some/path')
    history.push = jest.fn()
    userEvent.click(screen.getByText('Album Search'), { button: 0 })
    expect(history.push).toHaveBeenCalledWith('/')
  })
})
