import React, { Component } from 'react';

class SelectOld extends Component {
    render() {
        return (
            <div className="form-group">
                <select className="form-control" onChange={this.props.onChange}>
                    <option >Order By...</option>
                    <option value="Most Recent">Most Recent</option>
                    <option value="Most Old">Most old</option>
                    <option value="Gender">Gender</option>
                </select>
            </div>
        );
    }
}

export default SelectOld;