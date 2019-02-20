import React, { Component } from 'react';
// import {artist, album, tracks} from '../firebase';
import '../style/publish.css';
import { artists } from '../firebase';

class Publish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameAuthor: '',
            nationality: '',
            people: []
        };
        this.onHandleSubmitArtist = this.onHandleSubmitArtist.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onNationality = this.onNationality.bind(this);
    }

    componentDidMount() {
        artists.on('value', snapshot => {
            this.setState({
                people: Object.entries(snapshot.val())
                    .reduce((accumulator, obj) => ([...accumulator, obj[1]]), [])
                    .reverse()
            });
        });
    }

    onHandleSubmitArtist(e) {
        e.preventDefault();
        const artist = {
            nameAuthor: this.state.nameAuthor,
            nationality: this.state.nationality
        };
        artists.push(artist);
        this.setState({
            nameAuthor: '',
            nationality: ''
        });
    }

    onNameChange(e) {
        this.setState({
            nameAuthor: e.target.value
        });
    }

    onNationality(e) {
        this.setState({
            nationality: e.target.value
        });
    }

    renderAuthor() {
        return this.state.people.map((artist, index) => {
            return (
                <div key={index}>
                    <p>Name: {artist.nameAuthor} -> Nationality: {artist.nationality}</p>
                </div>
            )
        });
    }


    render() {
        return (
            <div>
                <div className="Publish">
                    <div className="Table">
                        <h2 className="title">Adding Artist</h2>
                    </div>
                    <form className="Adding-Artist" onSubmit={this.onHandleSubmitArtist}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                placeholder="Name Artist"
                                type="text"
                                name="nameAuthor"
                                ref="nameAuthor"
                                onChange={this.onNameChange}
                                value={this.state.nameAuthor}>
                            </input>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name="nationality"
                                ref="nationality"
                                onChange={this.onNationality}
                                value={this.state.nationality}
                                placeholder="Country Artist">
                            </input>
                        </div>
                        <button
                            className="btn btn-primary"
                        >Send</button>
                    </form>
                </div>
                <br />
                <br />
                <br />
                <div>
                    {this.renderAuthor()}
                </div>
            </div>
        );
    };
}

export default Publish;