import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, {Component, Fragment} from 'react';
import Navbar from './components/navbar';
import App from './components/App';
import Publish from './components/publish';

class Main extends Component {
    render(){
        return(
            <BrowserRouter>
                <Fragment>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={App} />
                        <Route path='/Publish' component={Publish} />
                    </Switch>
                </Fragment>
            </BrowserRouter>
        );
    };
}

export default Main;