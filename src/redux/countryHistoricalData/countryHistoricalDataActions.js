import { FETCH_HISTORICAL_SEARCH_REQUEST, FETCH_HISTORICAL_SEARCH_SUCCESS, FETCH_HISTORICAL_SEARCH_FAILURE } from './countryHistoricalDataTypes'
import axios from 'axios'

export const fetchHistoricalSearchRequest = (data) => {
    return {
        type: FETCH_HISTORICAL_SEARCH_REQUEST,
        payload: data
    }
}

export const fetchHistoricalSearchSuccess = (data) => {
    return {
        type: FETCH_HISTORICAL_SEARCH_SUCCESS,
        payload: data
    }
}

export const fetchHistoricalSearchFailure = (error) => {
    return {
        type: FETCH_HISTORICAL_SEARCH_FAILURE,
        payload: error
    }
}

export const fetchHistoricalSearch = (country, selection) => {
    if(selection === 'country') {
        const url = `https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`;
        return (dispatch) => {
           dispatch(fetchHistoricalSearchRequest([]))
            axios.get(url)
            .then(response => {
                const data = response.data
                const dataToPlot = Object.entries(data.timeline.cases);
                const dataArray2 = Object.entries(data.timeline.deaths);
                const dataArray3 = Object.entries(data.timeline.recovered);
                for (let i = 0; i < dataToPlot.length; i++) {
                    dataToPlot[i].push(dataArray2[i][1], dataArray3[i][1]);
                }
                dataToPlot.unshift(['Day', 'Cases', 'Deaths', 'Recovered'])
                dispatch(fetchHistoricalSearchSuccess(dataToPlot))
            })
            .catch(error => {
                dispatch(fetchHistoricalSearchFailure(error.message))
            })
        }
    }
    return (dispatch) => {
        dispatch(fetchHistoricalSearchFailure('No data available for continents'))
    }
}