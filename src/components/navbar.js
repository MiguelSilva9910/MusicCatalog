import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import App from './App';
import Publish from './publish';
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
                                    <li><NavLink to='/' className="nav-link"> Home</NavLink></li>
                                    <li><NavLink to='/Publish' className="nav-link">Publish</NavLink></li>
                                </ul>
                            </nav>
                            <Switch>
                                <Route exact path='/' component={App} />
                                <Route path='/Publish' component={Publish} />
                            </Switch>
                        </div>
                    </Router>
                </header>
            </div>
        );
    };
}

export default Navbar;