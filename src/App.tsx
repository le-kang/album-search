import { Switch, Route, Link } from 'react-router-dom'

import HomePage from './pages/home'
import AlbumPage from './pages/album'
import NoMatchPage from './pages/no-match'

import { Header, Main, Footer } from './App.style'

export default function App() {
  return (
    <>
      <Header>
        <Link to="/">Album Search</Link>
      </Header>
      <Main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/album">
            <AlbumPage />
          </Route>
          <Route path="*">
            <NoMatchPage />
          </Route>
        </Switch>
      </Main>
      <Footer>
        &copy; Le Kang {new Date().getFullYear()} All rights reserved.
      </Footer>
    </>
  )
}
