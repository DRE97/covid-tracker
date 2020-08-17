import { FETCH_GLOBAL_SEARCH_SUCCESS, FETCH_GLOBAL_SEARCH_FAILURE } from './globalSearchTypes'
import axios from 'axios'

export const fetchGlobalSearchSuccess = (data) => {
    return {
        type: FETCH_GLOBAL_SEARCH_SUCCESS,
        payload: data
    }
}

export const fetchGlobalSearchFailure = (error) => {
    return {
        type: FETCH_GLOBAL_SEARCH_FAILURE,
        payload: error
    }
}

export const fetchGlobalSearch = () => {
    const url = 'https://disease.sh/v3/covid-19/all?yesterday=true&allowNull=true';
    
    return (dispatch) => {
        axios.get(url)
        .then(response => {
            const data = response.data
            dispatch(fetchGlobalSearchSuccess(data))
        })
        .catch(error => {
            dispatch(fetchGlobalSearchFailure(error.message))
        })
    }
}