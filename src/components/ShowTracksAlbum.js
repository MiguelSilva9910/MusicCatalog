import React, { Component, Fragment } from 'react';
import { tracks } from '../firebase';

class ShowTracksAlbum extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tracks: []
        };
    }

    componentDidMount() {
        tracks.on('value', snapshot => {
            const val = snapshot.val();
            if (val) {
                this.setState({
                    tracks: Object.entries(val)
                        .reduce((accumulator, obj) => ([...accumulator, obj[1]]), [])
                });
            }
        });
    }


    render() {
        return (
            <Fragment>
                <select className="form-control" multiple="multiple" ref="tracksSelect" onChange={this.props.onChange}>
                    <option value="">if you want choose the track</option>
                    {
                        this.state.tracks.map(function (track, index) {
                            return <option key={index}
                                value={track.nameTrack}>{track.nameTrack}</option>;
                        })
                    }
                </select>
                
            </Fragment>
        );
    }

}

export default ShowTracksAlbum;
