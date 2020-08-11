import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from './Searchbar/Searchbar';
import Search from '../src/util/API';
import Global from './GlobalResults/Global';
import Top from './TopResults/Top';
import SearchResults from './SearchResults/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      isReady: false
    }

    this.searchCountry = this.searchCountry.bind(this);
  }

  searchCountry(term, selection) {
    Search(term, selection)
    .then(data => {
      this.setState({result: data, isReady: true});
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>Covid-19 Tracker</h1>
        <Searchbar searchCountry={this.searchCountry}/>
        <div className="mainContent mt-4">
          <Global />
          <Top />
          {
            this.state.isReady ? <SearchResults result={this.state.result}/> : <h3>No results</h3>
          }
        </div>
      </div>
    );
  }
}

export default App;
