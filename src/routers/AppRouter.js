import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, {Component, Fragment} from 'react';
import Navbar from '../components/navbar';
import HomePage from '../pages/HomePage';
import PublishPage from '../pages/PublishPage';

class AppRouter extends Component {
    render(){
        return(
            <BrowserRouter>
                <Fragment>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/Publish' component={PublishPage} />
                    </Switch>
                </Fragment>
            </BrowserRouter>
        );
    };
}
export default AppRouter;