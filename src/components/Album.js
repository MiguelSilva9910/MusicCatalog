import React, { Component } from 'react';
import { albums } from '../firebase';
import '../style/album.css';
import ShowTracksAlbum from './ShowTracksAlbum';

class Album extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            year: '',
            nameAlbum: '',
            gender: ''
        };
        this.onTrackChange = this.onTrackChange.bind(this);
        this.onGenderChange = this.onGenderChange.bind(this);
        this.onHandleSubmitAlbum = this.onHandleSubmitAlbum.bind(this);
        this.onNameAlbumChange = this.onNameAlbumChange.bind(this);
        this.onYearChange = this.onYearChange.bind(this);
    }

    onHandleSubmitAlbum(e) {
        e.preventDefault();
        const album = {
            tracks: this.state.tracks,
            year: this.state.year,
            nameAlbum: this.state.nameAlbum,
            gender: this.state.gender
        };
        albums.on('value', snapshot => {
            const val = snapshot.val();
            if (val) {
                const checkAlbum = Object.entries(val)
                    .reduce((accumulator, obj) => ([...accumulator, obj[1]]), []);

                const exists = checkAlbum.some((thisAlbum) => (thisAlbum.nameAlbum === album.nameAlbum));
                if (this.state.nameAlbum) {
                    if (!exists) {
                        albums.push(album);
                        this.setState({
                            tracks: [],
                            year: '',
                            nameAlbum: '',
                            gender: ''
                        });
                    } else {
                        this.setState({
                            error: true
                        });
                    }
                }else{
                    this.setState({
                        error: true
                    });
                }
            }
        });
    }

    onTrackChange(e) {
        this.setState({ tracks: [...e.target.selectedOptions].map(o => o.value) });
    }

    onYearChange(e) {
        this.setState({
            year: e.target.value
        });
    }

    onNameAlbumChange(e) {
        this.setState({
            nameAlbum: e.target.value
        })
    }

    onGenderChange(e) {
        this.setState({
            gender: e.target.value
        })
    }


    render() {
        return (
            <div>
                <form className="form border border-light p-5" onSubmit={this.onHandleSubmitAlbum}>
                    <h2 className="title">Adding Album</h2>
                    <div className="form-group">
                        <input
                            className={`form-control ${this.state.error ? "is-invalid" : ""}`}
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
                            name="year"
                            ref="year"
                            onChange={this.onYearChange}
                            value={this.state.year}
                            placeholder="Year">
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
                    <div className="form-group">
                        <ShowTracksAlbum onChange={this.onTrackChange} />
                    </div>
                    <br />
                    <button
                        className="btn btn-primary">
                        Send
                    </button>
                </form>
            </div>
        );
    }
}

export default Album;