import React, { Component } from 'react';
// import {artist, album, tracks} from '../firebase';
import '../style/publish.css';
import Track from './Track';
import Artist from './Artist';

class Publish extends Component {
    render() {
        return (
            <div className="forms">
                    <Artist />
                    <Track />
            </div>
        );
    };
}

export default Publish;