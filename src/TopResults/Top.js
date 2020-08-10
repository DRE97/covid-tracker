import React from 'react';
import './Top.css';

class Top extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: []
        }

        this.displayTopData = this.displayTopData.bind(this);
    }

    componentDidMount() {
        this.displayTopData();
    }

    async displayTopData() {
        const url = 'https://disease.sh/v3/covid-19/countries?sort=cases&allowNull=true';
        const response = await fetch(url);
        const data = await response.json();
        const convert = new Intl.NumberFormat();
        data.slice(0, 10);
        let topResults = [];
            for (let i = 0; i < 10; i++) {
                const obj = {
                    country: data[i].country,
                    flag: data[i].countryInfo.flag,
                    cases: convert.format(data[i].cases),
                };

                topResults.push(obj);
            }
        this.setState({results: topResults});
        //console.log(this.state.results);
    }

    render() {
        const results = this.state.results;
        return (
            <div className="top">
                <h3>Top stats</h3>
                {results.map((item, key) => {
                    return <div className="country" key={key}><img src={item.flag} className="rounded-lg" alt={item.country}/><strong>{item.country}:</strong>{item.cases}</div>;
                })}
            </div>
        );
    }
}

export default Top;