import React, { useEffect } from 'react';
import './TopCountries.css';
import Table from 'react-bootstrap/Table';
import { fetchTopSearch } from '../redux';
import { connect } from 'react-redux';

function TopCountries({ searchData, fetchTopSearch }) {
    useEffect(() => {
        fetchTopSearch()
    });
    
    const results = searchData;

   return (
       <div className="top">
           <Table striped bordered hover>
                <thead><tr><td><h3>Top Countries</h3></td></tr></thead>
                <tbody>
                    {results.map((item, key) => {
                        return (
                            <tr key={key}>
                                <td>
                                    <div className="country" >
                                        <img src={item.flag} className="rounded-lg" alt={item.country}/>
                                        <strong>{item.country}:</strong>{item.cases}
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
           </Table>
       </div>
   );
}

const mapStateToProps = state => {
    return {
        searchData: state.topCountriesSearch.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTopSearch: () => dispatch(fetchTopSearch())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopCountries);