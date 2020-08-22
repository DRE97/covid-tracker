import { FETCH_TOP_CONTINENTS_SEARCH_SUCCESS, FETCH_TOP_CONTINENTS_SEARCH_FAILURE } from './topContinentsTypes'
import axios from 'axios'

export const fetchTopContinentsSearchSuccess = (data) => {
    return {
        type: FETCH_TOP_CONTINENTS_SEARCH_SUCCESS,
        payload: data
    }
}

export const fetchTopContinentsSearchFailure = (error) => {
    return {
        type: FETCH_TOP_CONTINENTS_SEARCH_FAILURE,
        payload: error
    }
}

export const fetchTopContinentsSearch = () => {
    const url = 'https://disease.sh/v3/covid-19/continents?yesterday=true&sort=cases&allowNull=true'
    return (dispatch) => {
        axios.get(url)
        .then(response => {
            const data = response.data;
            const convert = new Intl.NumberFormat();
            let topContinentsResults = [];
            for (let i = 0; i < 6; i++) {
                const obj = {
                    continent: data[i].continent,
                    cases: convert.format(data[i].cases)
                };
                topContinentsResults.push(obj);
            }
            dispatch(fetchTopContinentsSearchSuccess(topContinentsResults));
        })
        .catch(error => {
            dispatch(fetchTopContinentsSearchFailure(error.message))
        })
    }
}