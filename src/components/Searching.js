import React, { Component, Fragment } from 'react';
import { database, artists, albums, tracks } from '../firebase';
class Searching extends Component {
    state = {
        search: []
    }

    componentDidMount() {
        database.on('value', snapshot => {
            const val = snapshot.val();

            if (val) {
                this.setState({
                    search: Object.entries(val)
                        .reduce((accumulator, obj) => ([...accumulator, obj[1]]), [])
                });
            }
        });
    }


    render() {
        return (
            <Fragment>
                {
                    this.state.albums.find((a) => {
                        if (this.props.albumsOrderBy) {
                            albums.val(a);
                            artists.val(a);
                            tracks.val(a);
                        }
                    }).map((search, index) => {
                        return (
                            <div key={index}>
                                <p>Name: {search.nameAlbum}</p>
                                <p>Author: {search.nameAuthor}</p>
                                <p>Tracks: {search.tracks + ''}</p>
                                <p>Year: {search.year}</p>
                                <hr />
                            </div>
                        )
                    })
                }
            </Fragment>
        );
    }
}

export default Searching;