import React, { Component } from 'react';
import { artists, tracks } from '../firebase';

class ShowArtist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        };
    }

    componentDidMount() {
        artists.on('value', snapshot => {
            const val = snapshot.val();

            if (val) {
                this.setState({
                    people: Object.entries(val)
                        .reduce((accumulator, obj) => ([...accumulator, obj[1]]), [])
                        .reverse()
                });
            }
        });
    }

    render() {
        return this.state.people.map((artist, index) => {
            return (
                    <div className="" key={index}>
                        <p>Name: {artist.nameAuthor}</p>
                        <p>Nationality: {artist.nationality}</p>
                        <p>Tracks: {artist.tracks}</p>
                        <hr />
                    </div>
            )
        });
    }
}

export default ShowArtist;