import React, {Component} from 'react';
import { albums } from '../firebase';

class ShowAlbum extends Component {
    constructor(props){
        super(props);
        this.state = {
            albums: []
        }
    }

    componentDidMount() {
        albums.on('value', snapshot => {
           const val = snapshot.val();

           if(val) {
            this.setState({ 
                albums: Object.entries(val)
                 .reduce((accumulator, obj) => ([...accumulator, obj[1]]), [])
            });
           }
        });
    }

    render() {
        return this.state.albums.map((album, index) => {
            return (
                <div key={index}>
                    <p>Name: {album.nameAlbum}</p>
                    <p>Gender: {album.gender}</p>
                </div>
            )
        });
    }
}

export default ShowAlbum;