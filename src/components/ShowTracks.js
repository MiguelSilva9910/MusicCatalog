import React, { Component } from 'react';
import { tracks } from '../firebase';

class ShowTracks extends Component{
    constructor(props){
        super(props);

        this.state = {
            tracks: []
        };
    }

    componentDidMount() {
        tracks.on('value', snapshot => {
            const val = snapshot.val();
            if(val){
                this.setState({ 
                    tracks: Object.entries(val)
                    .reduce((accumulator, obj) => ([...accumulator, obj[1]]), [])
                });
            }
        });
    }

    render() {
        return this.state.tracks.map((track, index) => {
          return (
            <div key={index}>
              <p>Name Track: {track.nameTrack} </p>
              <p>Name Album: {track.nameAlbum}</p>
              <p>Name Music: {track.nameMusic}</p>
              <p>Duration: {track.duration}</p>
              <br />
            </div>
          )
        });
      }
}

export default ShowTracks;