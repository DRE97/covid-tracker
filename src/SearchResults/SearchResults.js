import React, { useState } from 'react';
import './SearchResults.css';
import Country from './Country/Country';
import Continent from './Continent/Continent';
import { connect } from 'react-redux'

function SearchResults(props) {
    const [isReady, setReady] = useState(false)

    function handleClick() {
        setReady(!isReady);
      };

    const result = props.searchData;
    return (
        <div className="SearchResults">
            <h3>Search Result</h3>
            <div className="SearchContent mt-2">
                {
                    result.country ? <Country result={result} handleClick={handleClick}/> : <Continent result={result} handleClick={handleClick}/>
                }
                {
                    isReady ?
                    <div id="more-info" className="more-info">
                        <h3>More info ...</h3>
                    </div> : <div></div>
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        searchData: state.singleSearch.data
    }
}

export default connect(mapStateToProps, null)(SearchResults)