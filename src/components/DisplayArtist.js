import React, { Component, Fragment } from 'react';
import ShowArtist from '../components/ShowArtist';

class DisplayArtist extends Component {
    render() {
        return (
            <Fragment>
                <h3><p className="title">Artist</p></h3>
                <hr />
                <ShowArtist />
            </Fragment>
        );
    }
}

export default DisplayArtist;