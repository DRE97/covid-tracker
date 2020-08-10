import React from 'react';
//import logo from './logo.svg';
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
      visibility: 'hidden'
    }

    this.searchCountry = this.searchCountry.bind(this);
  }

  searchCountry(country) {
    Search(country)
    .then(data => {
      this.setState({result: data, visibility: 'visible'});
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
          <div className="SearchResults" style={{visibility: this.state.visibility}}>
            <SearchResults result={this.state.result}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
