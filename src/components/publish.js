import React, { Component } from 'react';
// import {artist, album, tracks} from '../firebase';
import '../style/publish.css';
import { artists } from '../firebase';

class Publish extends Component {
    constructor(props) {
        super(props);
        this.onHandleSubmitArtist = this.onHandleSubmitArtist.bind(this);

        this.state = {
            nameAuthor: '',
            nationality: '',
            people: []
        };
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

    renderAuthor() {
        return this.state.people.map((artist, index) => {
            return (
                <div key={index} className="post-container">
                    <div className="artists">
                        <p>{artist.nameAuthor}</p>
                        <hr className="hrPosts" />
                        <p>{artist.nationality}</p>
                    </div>
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
                            <input className="Input"
                                placeholder="Name Artist"
                                type="text"
                                name="nameAuthor"
                                ref="nameAuthor"
                                value={this.state.nameAuthor}>
                            </input>
                        </div>
                        <div className="form-group">
                            <input
                                className="Input"
                                type="text"
                                name="nationality"
                                ref="nationality"
                                value={this.state.nationality}
                                placeholder="Country Artist">
                            </input>
                        </div>
                        <br />
                        <button className="btn btn-primary">Send</button>
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