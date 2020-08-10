import React from 'react';
import './Global.css';

class Global extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cases: '',
            recovered: '',
            deaths: ''
        }

        this.displayGlobalData = this.displayGlobalData.bind(this);
    }

    componentDidMount() {
        this.displayGlobalData();
    }

    async displayGlobalData() {
        const convert = new Intl.NumberFormat();
        const url = 'https://disease.sh/v3/covid-19/all?yesterday=true&allowNull=true';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            cases: convert.format(data.cases),
            recovered: convert.format(data.recovered),
            deaths: convert.format(data.deaths)
        });
    }

    render() {
        return (
            <div className="global">
                <h3>Global stats</h3>
                <div className="d-inline-flex ml-4 mb-3">
                    <div className="card bg-info mr-3 shadow">
                        <h3 className="text-center mt-4 text-white">{this.state.cases}</h3>
                        <div>
                            <p className="card-text text-center text-white font-weight-bold">Total Confirmed</p>
                        </div>
                    </div>
                    <div className="card bg-success mx-3 shadow">
                        <h3 className="text-center mt-4 text-white">{this.state.recovered}</h3>
                        <div>
                            <p className="card-text text-center text-white font-weight-bold">Total Recovered</p>
                        </div>
                    </div>
                    <div className="card bg-danger mx-3 shadow">
                        <h3 className="text-center mt-4 text-white">{this.state.deaths}</h3>
                        <div>
                            <p className="card-text text-center text-white font-weight-bold">Total Deaths</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Global;