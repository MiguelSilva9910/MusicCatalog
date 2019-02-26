import React, { Component, Fragment } from 'react';
import Searching from './Searching';
import { Icon } from 'react-fa';
class Search extends Component {
    state = {
        searchDB: ''
      }
    
      handleSearch = (e) => {
        const searchDB = e.target.value;
        this.setState(() => ({ searchDB }))
      }

    render() {
        return (
            <Fragment>
                <div className="form-inline md-form form-sm active-purple active-purple-2 col-md-2">
                    <Icon className="fas fa-search " aria-hidden="true" />
                    <input className="form-control form-control-sm" onChange={this.handleSelectOld} type="text" placeholder="Search" aria-label="Search" />
                    <hr />
                    <Searching searchDB={this.state.searchDB} />
                </div>
            </Fragment>
        );
    }
}

export default Search;