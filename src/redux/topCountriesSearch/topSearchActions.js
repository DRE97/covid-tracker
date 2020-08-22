import { FETCH_TOP_SEARCH_SUCCESS, FETCH_TOP_SEARCH_FAILURE } from './topSearchTypes'
import axios from 'axios'

export const fetchTopSearchSuccess = (data) => {
    return {
        type: FETCH_TOP_SEARCH_SUCCESS,
        payload: data
    }
}

export const fetchTopSearchFailure = (error) => {
    return {
        type: FETCH_TOP_SEARCH_FAILURE,
        payload: error
    }
}

export const fetchTopSearch = () => {
    const url = 'https://disease.sh/v3/covid-19/countries?yesterday=true&sort=cases&allowNull=true'
    return (dispatch) => {
        axios.get(url)
        .then(response => {
            const data = response.data;
            const convert = new Intl.NumberFormat();
            let topResults = [];
            for (let i = 0; i < 10; i++) {
                const obj = {
                    country: data[i].country,
                    flag: data[i].countryInfo.flag,
                    cases: convert.format(data[i].cases)
                };
                topResults.push(obj);
            }
            dispatch(fetchTopSearchSuccess(topResults));
        })
        .catch(error => {
            dispatch(fetchTopSearchFailure(error.message))
        })
    }
}