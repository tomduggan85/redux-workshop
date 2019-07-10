import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import MovieDetailsPage from './components/MovieDetailsPage'
import SearchBar from './components/SearchBar'
import MovieSearchResults from './components/MovieSearchResults'
import './App.css'
import {
  MemoryRouter as Router, /* Use MemoryRouter so that the routes are not exposed in the browser url bar (which prevents users from directly visiting /:movieIndex) */
  Switch,
  Route
} from 'react-router-dom'

/* Create a redux store with just one reducer, and add the thunk middleware */
const store = createStore( reducer, applyMiddleware( thunk ))

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/:movieIndex' component={MovieDetailsPage} />
            <Route render={() => (
              <>
                <SearchBar />
                <MovieSearchResults />
              </>
            )} />
          </Switch>
        </Router>
      </div>
    </Provider>
  )
}

export default App
