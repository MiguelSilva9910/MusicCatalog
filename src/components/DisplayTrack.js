import React, { Component, Fragment } from 'react';
import ShowTracks from './ShowTracks';

class DisplayTrack extends Component {
    render() {
        return (
            <Fragment>
                <h3><p className="title">Tracks</p></h3>
                <hr />
                <ShowTracks />
            </Fragment>
        );
    }
}

export default DisplayTrack;