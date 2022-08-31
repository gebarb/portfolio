import { combineReducers } from 'redux'
import portfolioReducer from './myReducer'

const rootReducer = combineReducers({
    portfolio: portfolioReducer,
})

export default rootReducer
