import React, { Component } from 'react';
import { albums } from '../firebase';
import stateOrderBy from './enums/enums';

class ShowAlbum extends Component {
    state = {
        albums: []
    }

    // sortingFunction = (a, b) => {
    //     switch(this.props.albumsOrderBy){
    //         case "Most Recent": 
    //             return this.orderByName;
    //         case "Most Old": 
    //             return this.orderByDate;
    //         default:

    //     }
    // };

    // orderByName = (a, b) => {
    //     console.log("ordering by name...");
    // }

    // orderByDate = (a, b) => {
    //     console.log("ordering by date...");
    // }

    componentDidMount() {
        albums.on('value', snapshot => {
            const val = snapshot.val();

            if (val) {
                this.setState({
                    albums: Object.entries(val)
                        .reduce((accumulator, obj) => ([...accumulator, obj[1]]), [])
                });
            }
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.albums.sort((a, b) => { //TODO move String to enum
                        switch (this.props.albumsOrderBy) {
                            case stateOrderBy.MOSTRECENT:
                                return a.year < b.year ? 1 : -1;
                            case stateOrderBy.MOSTOLD:
                                return a.year > b.year ? 1 : -1;
                            case stateOrderBy.GENDER: 
                                return a.gender.localeCompare(b.gender);
                            default: // Will return the most recent to oldest expense by default
                                return a.year < b.year ? 1 : -1;
                        }
                    }).map((album, index) => {
                        return (
                            <div key={index}>
                                <p>Name: {album.nameAlbum}</p>
                                <p>Gender: {album.gender}</p>
                                <p>Track: {album.tracks}</p>
                                <p>Year: {album.year}</p>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default ShowAlbum;