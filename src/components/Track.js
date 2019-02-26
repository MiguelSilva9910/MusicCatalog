import React, { Component } from 'react';
import { tracks } from '../firebase';

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameTrack: '',
            nameAlbum: '',
            duration: '',
            gender: '',
            error: false
        };
        this.onNameTrackChange = this.onNameTrackChange.bind(this);
        this.onNameAlbumChange = this.onNameAlbumChange.bind(this);
        this.onDurationChange = this.onDurationChange.bind(this);
        this.onHandleSubmitTrack = this.onHandleSubmitTrack.bind(this);
        this.onGenderChange = this.onGenderChange.bind(this);
    }

    onHandleSubmitTrack(e) {
        e.preventDefault();
        const track = {
            nameTrack: this.state.nameTrack,
            nameAlbum: this.state.nameAlbum,
            duration: this.state.duration,
            gender: this.state.gender
        };
        tracks.on('value', snapshot => {
            const val = snapshot.val();
            if (val) {
                const Music = Object.entries(val)
                    .reduce((accumulator, obj) => ([...accumulator, obj[1]]), []);

                const exist = Music.some((music) => (music.nameTrack === track.nameTrack));
                if (this.state.nameTrack) {
                    if (!exist) {
                        tracks.push(track);
                        this.setState({
                            nameTrack: '',
                            nameAlbum: '',
                            duration: '',
                            gender: ''
                        });
                    }else {
                        this.setState({
                            error: true,
                        });
                    }
                }else{
                    this.setState({
                        error: true,
                    });
                }
            }
        });
    }

    onNameTrackChange(e) {
        this.setState({
            nameTrack: e.target.value
        });
    }

    onGenderChange(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onNameAlbumChange(e) {
        this.setState({
            nameAlbum: e.target.value
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
                <form className="form border border-light p-5" onSubmit={this.onHandleSubmitTrack}>
                    <h2 className="title">Adding Tracks</h2>
                    <div className="form-group">
                        <input
                            className={`form-control ${this.state.error ? "is-invalid" : ""}`}
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
                            type="text"
                            name="duration"
                            ref="duration"
                            onChange={this.onDurationChange}
                            value={this.state.duration}
                            placeholder="Duration">
                        </input>
                    </div>
                    <div className="form-group">
                        <select className="form-control" value={this.state.gender} onChange={this.onGenderChange}>
                            <option value="...">Choose the gender</option>
                            <option value="Blues">Blues</option>
                            <option value="Eletronica">Eletronica</option>
                            <option value="Grunge">Grunge</option>
                            <option value="Hard Rock">Hard Rock</option>
                            <option value="Hardcore">Hardcore</option>
                            <option value="Heavy Metal">Heavy Metal</option>
                            <option value="Hip Hop">Hip Hop</option>
                            <option value="Hip Hop Tuga">Hip Hop Tuga</option>
                            <option value="House">House</option>
                            <option value="Indie">Indie</option>
                            <option value="Rap">Rap</option>
                            <option value="RapTuga">RapTuga</option>
                            <option value="Reggae">Reggae</option>
                        </select>
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
