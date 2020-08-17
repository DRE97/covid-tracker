import { combineReducers } from 'redux'
import singleSearchReducer from './singleSearch/singleSearchReducer'
import globalSearchReducer from './globalSearch/globalSearchReducer'
import topSearchReducer from './topSearch/topSearchReducer'

const rootReducer = combineReducers({
    singleSearch: singleSearchReducer,
    globalSearch: globalSearchReducer,
    topSearch: topSearchReducer
})

export default rootReducer