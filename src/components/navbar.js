import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="AppNavbar">
                <header className="App-header">
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <ul className="navbar-nav mr-auto">
                                <li><Link to='/'  className="nav-link"> Home</Link></li>
                                <li><Link to='/Publish'  className="nav-link">Publish</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        );
    };
}

export default Navbar;