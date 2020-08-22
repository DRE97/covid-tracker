import { FETCH_TOP_CONTINENTS_SEARCH_SUCCESS, FETCH_TOP_CONTINENTS_SEARCH_FAILURE } from './topContinentsTypes'

const initialState = {
    data: [],
    error: ''
}

const topContinentsSearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TOP_CONTINENTS_SEARCH_SUCCESS:
            return {
                data: action.payload,
                error: ''
            }
        case FETCH_TOP_CONTINENTS_SEARCH_FAILURE:
            return {
                data: [],
                error: ''
            }
        default: return state
    }
}

export default topContinentsSearchReducer;