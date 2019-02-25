import React, { Component } from 'react';
import DisplayAlbum from '../components/DisplayAlbum';
import DisplayArtist from '../components/DisplayArtist';
import DisplayTrack from '../components/DisplayTrack';
import '../style/app.css';

class App extends Component {

  render() {
    // TODO create albums component to manage select old/showAlbum component comunication
    return (
      <div className="App">
        <div className="form border border-light p-5">
          <DisplayArtist />
        </div>
        <div className="form border border-light p-5">
          <DisplayTrack />
        </div>
        <div className="form border border-light p-5">
          <DisplayAlbum />
        </div>
      </div>
    );
  }
}

export default App;
