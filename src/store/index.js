import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createReducer from '../reducers'
import createSagaMiddleware  from 'redux-saga';


const rootReducer = createReducer()
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const middlewares = [
  sagaMiddleware
]

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  middlewares.push(require('redux-logger').createLogger())
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
)


export default function configStore () {
  const store = createStore(rootReducer, enhancer)

  store.runSaga = sagaMiddleware.run;
  store.addReducers = {}; // Reducer add
  store.addSagas = {}; // Saga add

  return store
}


