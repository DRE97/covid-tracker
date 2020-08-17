import { FETCH_GLOBAL_SEARCH_SUCCESS, FETCH_GLOBAL_SEARCH_FAILURE } from './globalSearchTypes'

const initialState = {
    data: [],
    error: ''
}

const globalSearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_GLOBAL_SEARCH_SUCCESS:
            return {
                data: action.payload,
                error: ''
            }
        case FETCH_GLOBAL_SEARCH_FAILURE:
            return {
                data: [],
                error: ''
            }
        default: return state
    }
}

export default globalSearchReducer;