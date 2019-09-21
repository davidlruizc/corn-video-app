import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducers/index'
// Redux helper middleware
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

/**
 * Initializing the store withe the reducers, state
 * 
 * -Old store-
  const store = createStore(reducer, {
    categoryList: [],
    suggestionList: []
  })
*/

// Store persisted
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['selectedMovie']
}

// Component Persisted
const persistedReducer = persistReducer(persistConfig, reducer)

/**
 * navigation middleware
 * Middlewares recieves new functions that returns the new state to manipulate them
 */
const navigationMiddleware = createReactNavigationReduxMiddleware(
  /**
   * navStateSelector - state from store
   * name of the applications like and id
   */
  state => state.navigation,
  'root',
)

const store = createStore(
  persistedReducer,
  applyMiddleware(navigationMiddleware)
)
const persistor = persistStore(store)

export { store, persistor }