import React, { Component } from 'react';
import { tracks } from '../firebase';

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameTrack: '',
            nameAlbum: '',
            nameMusic: '',
            duration: ''
        };
        this.onNameTrackChange = this.onNameTrackChange.bind(this);
        this.onNameMusicChange = this.onNameMusicChange.bind(this);
        this.onNameAlbumChange = this.onNameAlbumChange.bind(this);
        this.onDurationChange = this.onDurationChange.bind(this);
        this.onHandleSubmitTrack = this.onHandleSubmitTrack.bind(this);
    }


    onHandleSubmitTrack(e) {
        e.preventDefault();
        const track = {
            nameTrack: this.state.nameTrack,
            nameAlbum: this.state.nameAlbum,
            nameMusic: this.state.nameMusic,
            duration: this.state.duration
        };
        tracks.push(track);
        this.setState({
            nameTrack: '',
            nameAlbum: '',
            nameMusic: '',
            duration: ''
        });
    }

    onNameTrackChange(e) {
        this.setState({
            nameTrack: e.target.value
        });
    }

    onNameAlbumChange(e) {
        this.setState({
            nameAlbum: e.target.value
        });
    }

    onNameMusicChange(e) {
        this.setState({
            nameMusic: e.target.value
        });
    }

    onDurationChange(e) {
        this.setState({
            duration: e.target.value
        });
    }

    render() {
        return (
            <div>
                <div className="TableTracks">
                    <h2 className="title">Adding Tracks</h2>
                </div>
                <form className="Adding-tracks" onSubmit={this.onHandleSubmitTrack}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="Name Track"
                            type="text"
                            name="nameTrack"
                            ref="nameTrack"
                            onChange={this.onNameTrackChange}
                            value={this.state.nameTrack}>
                        </input>
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="Name Album"
                            type="text"
                            name="nameAlbum"
                            ref="nameAlbum"
                            onChange={this.onNameAlbumChange}
                            value={this.state.nameAlbum}>
                        </input>
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="Name Music"
                            type="text"
                            name="nameMusic"
                            ref="nameMusic"
                            onChange={this.onNameMusicChange}
                            value={this.state.nameMusic}>
                        </input>
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="duration"
                            ref="duration"
                            onChange={this.onDurationChange}
                            value={this.state.duration}
                            placeholder="Duration">
                        </input>
                    </div>
                    <button
                        className="btn btn-primary"
                    >Send</button>
                </form>
            </div>
        );
    }
}

export default Track;
