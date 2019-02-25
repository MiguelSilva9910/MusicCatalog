import React, { Component, Fragment } from 'react';
import SelectOld from './order/SelectOld';
import ShowAlbum from '../components/ShowAlbum';

class DisplayAlbum extends Component {
    state = {
        albumsOrderBy: ''
      }
    
      handleSelectOld = (e) => {
        const albumsOrderBy = e.target.value;
        this.setState(() => ({ albumsOrderBy }))
      }

    render() {
        return (
            <Fragment>
                <h3><p className="title">Albums</p></h3>
                <SelectOld onChange={this.handleSelectOld} />
                <hr />
                <ShowAlbum albumsOrderBy={this.state.albumsOrderBy} />
            </Fragment>
        );
    }
}

export default DisplayAlbum;