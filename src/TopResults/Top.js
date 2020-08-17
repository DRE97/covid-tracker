import React, { useEffect } from 'react';
import './Top.css';
import { fetchTopSearch } from '../redux';
import { connect } from 'react-redux';

function Top({ searchData, fetchTopSearch }) {
    useEffect(() => {
        fetchTopSearch()
    });
    
    const results = searchData;

   return (
       <div className="top">
           <h3>Top Countries</h3>
           {results.map((item, key) => {
               return <div className="country" key={key}><img src={item.flag} className="rounded-lg" alt={item.country}/><strong>{item.country}:</strong>{item.cases}</div>;
           })}
       </div>
   );
}

const mapStateToProps = state => {
    return {
        searchData: state.topSearch.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTopSearch: () => dispatch(fetchTopSearch())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Top);