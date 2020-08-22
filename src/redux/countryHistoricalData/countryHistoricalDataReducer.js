import { FETCH_HISTORICAL_SEARCH_REQUEST, FETCH_HISTORICAL_SEARCH_SUCCESS, FETCH_HISTORICAL_SEARCH_FAILURE } from './countryHistoricalDataTypes'

const initialState = {
    data: [],
    error: ''
}

const globalSearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_HISTORICAL_SEARCH_REQUEST:
            return {
                data: [],
                error: ''
            }
        case FETCH_HISTORICAL_SEARCH_SUCCESS:
            return {
                data: action.payload,
                error: ''
            }
        case FETCH_HISTORICAL_SEARCH_FAILURE:
            return {
                data: [],
                error: ''
            }
        default: return state
    }
}

export default globalSearchReducer;