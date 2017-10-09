import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';

class App extends Component {
  render() {
    return (
      <div className="weather-search">
        <SearchBar />
      </div>
    );
  }
}

export default App;
