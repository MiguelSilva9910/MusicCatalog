import React, { Component } from 'react';
import ShowArtist from './ShowArtist';
import ShowTracks from './ShowTracks';
import ShowAlbum from './ShowAlbum';
import '../style/app.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="form border border-light p-5">
          <h3><p className="title">Artist</p></h3>
          <ShowArtist />
        </div>
        <div className="form border border-light p-5">
          <h3><p className="title">Tracks</p></h3>
          <ShowTracks />
        </div>
        <div className="form border border-light p-5">
          <h3><p className="title">Albums</p></h3>
          <ShowAlbum />
        </div>
      </div>
    );
  }
}

export default App;
