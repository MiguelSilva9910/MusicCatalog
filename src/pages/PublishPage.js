import React, { Component } from 'react';
// import {artist, album, tracks} from '../firebase';
import '../style/publish.css';
import Track from '../components/Track';
import Artist from '../components/Artist';
import Album from '../components/Album';

class Publish extends Component {
    render() {
        return (
            <div className="forms">
                    <Artist />
                    <Track />
                    <Album />
            </div>
        );
    };
}

export default Publish;