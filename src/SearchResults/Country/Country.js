import React from 'react';
import './Country.css';
import { Button } from 'react-bootstrap';

function Country(props) {
    const result = props.result;
    const convert = new Intl.NumberFormat();
    return (
        <div className="result d-flex flex-column">
                <div className="result-header d-flex justify-content-center">
                    <img className="rounded-lg" src={result.countryInfo.flag} alt={result.country}/>
                    <h3>{result.country}</h3>
                </div>
                <div className="result-body d-flex flex-row justify-content-center mb-3">
                    <div className="country-card card bg-info mr-3 shadow">
                        <div>
                            <p className="card-text text-center text-white font-weight-bold">Total Confirmed</p>
                        </div>
                        <h3 className="text-center mt-2 text-white">{convert.format(result.cases)}</h3>
                    </div>
                    <div className="country-card card bg-warning mr-3 shadow">
                        <div>
                            <p className="card-text text-center text-white font-weight-bold">Total Active</p>
                        </div>
                        <h3 className="text-center mt-2 text-white">{convert.format(result.cases)}</h3>
                    </div>
                    <div className="country-card card bg-success mx-3 shadow">
                        <div>
                            <p className="card-text text-center text-white font-weight-bold">Total Recovered</p>
                        </div>
                        <h3 className="text-center mt-2 text-white">{convert.format(result.recovered)}</h3>
                    </div>
                    <div className="country-card card bg-danger mx-3 shadow">
                        <div>
                            <p className="card-text text-center text-white font-weight-bold">Total Deaths</p>
                        </div>
                        <h3 className="text-center mt-2 text-white">{convert.format(result.deaths)}</h3>
                    </div>
                </div>
                <div className="result-footer mt-4">
                    <Button variant="primary" onClick={props.handleClick}>More info</Button>
                </div>
            </div>
    );
}

export default Country;