import { createStore, compose, applyMiddleware } from 'redux'
import {rootReducer} from './reducers/index'
import { save } from 'redux-localstorage-simple'

const composeEnchancers = process.env.NODE_ENV !== 'production' && 
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 
        : compose 


const configureStore = preloaderState => (
    createStore(
        rootReducer,
        preloaderState,
        composeEnchancers(
            applyMiddleware(save({ namespace: 'todo-list'}))
        )
    )
)

export const store = configureStore({})
