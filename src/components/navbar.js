import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import '../style/navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="AppNavbar">
                <header className="App-header">
                    <Router>
                        <div>
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <ul className="navbar-nav mr-auto">
                                    <li><NavLink to='/'  className="nav-link"> Home</NavLink></li>
                                    <li><NavLink to='/Publish'  className="nav-link">Publish</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                    </Router>
                </header>
            </div>
        );
    };
}

export default Navbar;