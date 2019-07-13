import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// //  pro rozsireni do chrome - redux devtools
import { composeWithDevTools } from "redux-devtools-extension";

import { rootSaga } from '../sagas'


import rootReducer from "./reducers/index";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)
sagaMiddleware.run(rootSaga)

export default store;
