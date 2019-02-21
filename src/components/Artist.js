import React, { Component } from 'react';
import { artists } from '../firebase';
import '../style/artist.css';

class Artist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameAuthor: '',
            nationality: ''
        };
        this.onHandleSubmitArtist = this.onHandleSubmitArtist.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onNationality = this.onNationality.bind(this);
    }



    onHandleSubmitArtist(e) {
        e.preventDefault();
        const artist = {
            nameAuthor: this.state.nameAuthor,
            nationality: this.state.nationality,
            error: false,
        };

        artists.on('value', snapshot => {
            const val = snapshot.val();
 
            if(val) {
                const people = Object.entries(val)
                .reduce((accumulator, obj) => ([...accumulator, obj[1]]), []);

                const exists = people.some((person) => (person.nameAuthor === artist.nameAuthor));

                if(!exists){
                    artists.push(artist);   
                    this.setState({
                        nameAuthor: '',
                        nationality: ''
                    });
                } else {
                    this.setState({
                        error: true,
                    });
                }
            }
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


    render() {
        return (
            <div>
                <form className="form border border-light p-5" onSubmit={this.onHandleSubmitArtist}>
                    <h2 className="title">Adding Artist</h2>
                    <div className="form-group">
                        <input
                            className={`form-control ${this.state.error ? "is-invalid" : ""}`}
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
                        className="btn btn-primary">
                        Send
                    </button>
                </form>
            </div>
        );
    }
}

export default Artist;