import React, { useEffect } from 'react';
import './Global.css';
import { connect } from 'react-redux';
import { fetchGlobalSearch } from '../redux';

function Global({ searchData, fetchGlobalSearch }) {
    useEffect(() => {
        fetchGlobalSearch()
    });

    const convert = new Intl.NumberFormat();
    const data = searchData;
    const cases = convert.format(data.cases)
    const recovered = convert.format(data.recovered);
    const deaths = convert.format(data.deaths);

    return (
        <div className="global">
            <h3>Global stats</h3>
            <div className="d-inline-flex ml-4 mb-3">
                <div className="card bg-info mr-3 shadow">
                    <h3 className="text-center mt-4 text-white">{cases}</h3>
                    <div>
                        <p className="card-text text-center text-white font-weight-bold">Total Confirmed</p>
                    </div>
                </div>
                <div className="card bg-success mx-3 shadow">
                    <h3 className="text-center mt-4 text-white">{recovered}</h3>
                    <div>
                        <p className="card-text text-center text-white font-weight-bold">Total Recovered</p>
                    </div>
                </div>
                <div className="card bg-danger mx-3 shadow">
                    <h3 className="text-center mt-4 text-white">{deaths}</h3>
                    <div>
                        <p className="card-text text-center text-white font-weight-bold">Total Deaths</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        searchData: state.globalSearch.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGlobalSearch: () => dispatch(fetchGlobalSearch())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Global);