import React, { Component } from 'react';
import { artists } from '../firebase';

class ShowArtist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
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
        return this.state.people.map((artist) => {
            return (
                <div className="">
                    <p>Name: {artist.nameAuthor} -> Nationality: {artist.nationality}</p>
                </div>
            )
        });
    }
}

export default ShowArtist;