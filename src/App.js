import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from './Searchbar/Searchbar';
import Global from './GlobalResults/Global';
import TopContinents from './TopContinents/TopContinents';
import TopCountries from './TopCountries/TopCountries';
import SearchResults from './SearchResults/SearchResults';
import { Provider } from 'react-redux';
import store from './redux/store';

function App(props) {
  const [isReady, setReady] = useState(false)

  function isLoaded(result) {
    setReady(result);
  }

  return (
    <Provider store={store}>
    <div className="App">
      <h1>Covid-19 Tracker</h1>
      <Searchbar isLoaded={isLoaded}/>
      <div className="mainContent mt-4">
        <TopCountries />
        <Global />
        <TopContinents />
        {
          isReady ? <SearchResults /> : <div></div>
        }
      </div>
    </div>
    </Provider>
  );
}

export default App;
