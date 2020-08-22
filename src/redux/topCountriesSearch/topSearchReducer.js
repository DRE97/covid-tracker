import { FETCH_TOP_SEARCH_SUCCESS, FETCH_TOP_SEARCH_FAILURE } from './topSearchTypes'

const initialState = {
    data: [],
    error: ''
}

const topSearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TOP_SEARCH_SUCCESS:
            return {
                data: action.payload,
                error: ''
            }
        case FETCH_TOP_SEARCH_FAILURE:
            return {
                data: [],
                error: ''
            }
        default: return state
    }
}

export default topSearchReducer;