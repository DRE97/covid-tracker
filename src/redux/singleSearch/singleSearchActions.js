import { FETCH_SINGLE_SEARCH_SUCCESS, FETCH_SINGLE_SEARCH_FAILURE } from './singleSearchTypes'
import axios from 'axios'

export const fetchSingleSearchSuccess = (data) => {
    return {
        type: FETCH_SINGLE_SEARCH_SUCCESS,
        payload: data
    }
}

export const fetchSingleSearchFailure = (error) => {
    return {
        type: FETCH_SINGLE_SEARCH_FAILURE,
        payload: error
    }
}

export const fetchSingleSearch = (term, selection) => {
    let url = '';
    if(selection === 'country') {
        url = `https://disease.sh/v3/covid-19/countries/${term}?yesterday=true&strict=true&allowNull=true`;
    } else {
        url = `https://disease.sh/v3/covid-19/continents/${term}?yesterday=true&strict=true&allowNull=true`;
    }
    
    return (dispatch) => {
        axios.get(url)
        .then(response => {
            const data = response.data
            dispatch(fetchSingleSearchSuccess(data))
        })
        .catch(error => {
            dispatch(fetchSingleSearchFailure(error.message))
        })
    }
}