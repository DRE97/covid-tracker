import { FETCH_SINGLE_SEARCH_SUCCESS, FETCH_SINGLE_SEARCH_FAILURE } from './singleSearchTypes'

const initialState = {
    data: [],
    isReady: false,
    error: ''
}

const singleSearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SINGLE_SEARCH_SUCCESS:
            return {
                data: action.payload,
                isReady: true,
                error: ''
            }
        case FETCH_SINGLE_SEARCH_FAILURE:
            return {
                data: [],
                isReady: false,
                error: ''
            }
        default: return state
    }
}

export default singleSearchReducer;