import React, { Component } from 'react';
// import {artist, album, tracks} from '../firebase';
import '../style/publish.css';
import Track from './Track';
import Artist from './Artist';
import Album from './Album';

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