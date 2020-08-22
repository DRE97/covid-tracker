import React, { useEffect } from 'react';
import './TopContinents.css';
import Table from 'react-bootstrap/Table';
import { fetchTopContinentsSearch } from '../redux';
import { connect } from 'react-redux';

function TopContinents(props) {
    useEffect(() => {
        props.fetchTopSearch()
    });
    
    const results = props.searchData;
   return (
       <div className="top-continents">
           <Table striped bordered hover>
                <thead><tr><td><h3>Top Continents</h3></td></tr></thead>
                <tbody>
                    {results.map((item, key) => {
                        return (
                            <tr key={key}>
                                <td>
                                    <div className="continent">
                                        <strong>{item.continent}:</strong>{item.cases}
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
        searchData: state.topContinentsSearch.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTopSearch: () => dispatch(fetchTopContinentsSearch())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopContinents)
