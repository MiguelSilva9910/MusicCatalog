import React, { Component } from 'react';
import ShowArtist from './ShowArtist';
import ShowTracks from './ShowTracks';
import ShowAlbum from './ShowAlbum';
import SelectOld from './order/SelectOld';
import '../style/app.css';

class App extends Component {
  state = {
    albumsOrderBy: ''
  }

  handleSelectOld = (e) => {
    const albumsOrderBy = e.target.value;
    this.setState(() => ({ albumsOrderBy }))
  }

  render() {
    // TODO create albums component to manage select old/showAlbum component comunication
    return (
      <div className="App">
        <div className="form border border-light p-5">
          <h3><p className="title">Artist</p></h3>
          <hr />
          <ShowArtist />
        </div>
        <div className="form border border-light p-5">
          <h3><p className="title">Tracks</p></h3>
          <hr />
          <ShowTracks />
        </div>
        <div className="form border border-light p-5">
          <h3><p className="title">Albums</p></h3>
          <SelectOld onChange={this.handleSelectOld} />
          <hr />
          <ShowAlbum albumsOrderBy={this.state.albumsOrderBy} />
        </div>
      </div>
    );
  }
}

export default App;
