import React from 'react';
import './SearchResults.css';
import Country from './Country/Country';
import Continent from './Continent/Continent';

function SearchResults(props) {
    const result = props.result;
    return (
        <div className="SearchResults">
            {
                result.country ? <Country result={result}/> : <Continent result={result}/>
            }
        </div>
    );
}

export default SearchResults;