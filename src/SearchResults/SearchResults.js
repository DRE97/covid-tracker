import React, { useState } from 'react';
import './SearchResults.css';
import Country from './Country/Country';
import Continent from './Continent/Continent';
import ChartContainer from './MoreInfo/ChartContainer';
import Rates from './MoreInfo/Rates';
import { connect } from 'react-redux'
import { fetchHistoricalSearch } from '../redux'

function SearchResults(props) {
    const result = props.searchData;
    const dataToPlot = props.historicalData;
    const [isReady, setReady] = useState(false);

    function handleClick() {
        setReady(!isReady);
        if(result.country) {
            props.fetchHistoricalSearch(result.country, 'country')
        }
      };
    
    return (
        <div className="SearchResults">
            <div className="SearchTitle">
                <h3>Search Result</h3>
            </div>
            <div className="SearchContent mt-2">
                <div className="result-container">
                    {
                        result.country ? 
                        <Country result={result} handleClick={handleClick}/> 
                        : <Continent result={result} handleClick={handleClick}/>
                    }
                </div>
                {
                    isReady ?
                    <div className="more-info shadow">
                        <h3 className="mt-2">{result.country} Last Month Stats</h3>
                        <div className="info-container">
                            <ChartContainer historicalData={dataToPlot}/>
                            <Rates result={result}/>
                        </div>
                    </div> : <div></div>
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        searchData: state.singleSearch.data,
        historicalData: state.historicalData.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchHistoricalSearch: (term, selection) => dispatch(fetchHistoricalSearch(term, selection))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)