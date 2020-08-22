import { combineReducers } from 'redux'
import singleSearchReducer from './singleSearch/singleSearchReducer'
import globalSearchReducer from './globalSearch/globalSearchReducer'
import topSearchReducer from './topCountriesSearch/topSearchReducer'
import topContinentsSearchReducer from './topContinentsSearch/topContinentsReducer'
import historicalDataReducer from './countryHistoricalData/countryHistoricalDataReducer'

const rootReducer = combineReducers({
    singleSearch: singleSearchReducer,
    globalSearch: globalSearchReducer,
    topCountriesSearch: topSearchReducer,
    topContinentsSearch: topContinentsSearchReducer,
    historicalData: historicalDataReducer
})

export default rootReducer