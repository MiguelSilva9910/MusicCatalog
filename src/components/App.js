import React, { Component } from 'react';
import ShowArtist from './ShowArtist';
import ShowTracks from './ShowTracks';
class App extends Component {

  render() {
    return (
      <div className="App">
        <ShowArtist />
        <ShowTracks />
      </div>
    );
  }
}

export default App;
