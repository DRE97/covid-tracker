import React from 'react';
import './Continent.css';
import { Button } from 'react-bootstrap';

function Continent(props) {
    const result = props.result;
    const convert = new Intl.NumberFormat();
    return (
        <>
            <div>
                <h3>Search Result</h3>
            </div>
            <div className="result mt-1 d-flex flex-column">
                <div className="result-header mt-2 d-flex justify-content-center">
                    
                    <h3>{result.continent}</h3>
                </div>
                <div className="result-body d-flex flex-column justify-content-start">
                    <p><strong>Total Confirmed:</strong> {convert.format(result.cases)}</p>
                    <p><strong>Total Active:</strong> {convert.format(result.active)}</p>
                    <p><strong>Total Recovered:</strong> {convert.format(result.recovered)}</p>
                    <p><strong>Total Deaths:</strong> {convert.format(result.deaths)}</p>
                </div>
                <div className="result-footer mb-2">
                    <Button variant="primary">More info</Button>
                </div>
            </div>
        </>
    );
}

export default Continent;