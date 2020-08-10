import React from 'react';
import './SearchResults.css';

class SearchResults extends React.Component {
    render() {
        const result = this.props.result;
        const convert = new Intl.NumberFormat();
        return (
            <div className="SearchResults">
                <h3>Search Result</h3>
                <div className="result d-flex flex-column">
                    <div className="result-header">
                        <h3>{result.country}</h3>
                    </div>
                    <div className="result-body d-flex flex-column justify-content-start">
                        <p><strong>Total Confirmed:</strong> {convert.format(result.cases)}</p>
                        <p><strong>Total Active:</strong> {convert.format(result.active)}</p>
                        <p><strong>Total Recovered:</strong> {convert.format(result.recovered)}</p>
                        <p><strong>Total Deaths:</strong> {convert.format(result.deaths)}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchResults;