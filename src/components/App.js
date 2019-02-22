import React, { Component } from 'react';
import ShowArtist from './ShowArtist';
import ShowTracks from './ShowTracks';
import ShowAlbum from './ShowAlbum';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ShowArtist />
        <hr />
        <ShowTracks />
        <hr />
        <ShowAlbum />
      </div>
    );
  }
}

export default App;
