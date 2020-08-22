import React from 'react'

function Rates(props) {
    const result = props.result;

    return (
        <div className="rates">
            <div className="country-card card bg-warning mx-3 shadow">
                <div>
                    <p className="card-text text-center text-white font-weight-bold">Total Active</p>
                </div>
                <h3 className="text-center mt-2 text-white">{((result.active * 100) / result.cases).toFixed(2)}%</h3>
            </div>
            <div className="country-card card bg-danger mx-3 shadow">
                <div>
                    <p className="card-text text-center text-white font-weight-bold">Mortality rate:</p>
                </div>
                <h3 className="text-center mt-2 text-white">{((result.deaths * 100) / result.cases).toFixed()}%</h3>
            </div>
            <div className="country-card card bg-success mx-3 shadow">
                <div>
                    <p className="card-text text-center text-white font-weight-bold">Recovery rate:</p>
                </div>
                <h3 className="text-center mt-2 text-white">{((result.recovered * 100) / result.cases).toFixed()}%</h3>
            </div>
        </div>
    )
}

export default Rates
