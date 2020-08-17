import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from './Searchbar/Searchbar';
import Global from './GlobalResults/Global';
import Top from './TopResults/Top';
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
        <Global />
        <Top />
        {
          isReady ? <SearchResults /> : <h3>No results</h3>
        }
      </div>
    </div>
    </Provider>
  );
}

export default App;
