import React, { Component } from 'react';
import { tracks } from '../firebase';

class ShowTracksAlbum extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tracks: []
        };
    }

    render() {
        return (
                <select ref="tracksSelect" defaultValue="" required>
                    <option value="" disabled>Tracks</option>
                    {
                        tracks.map(function (track) {
                            return <option key={track.nameTrack}
                                value={track.nameTrack}>{track.nameTrack}</option>;
                        })
                    }
                </select>
        );
    }

}

export default ShowTracksAlbum;