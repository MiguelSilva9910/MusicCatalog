import { BrowserRouter } from 'react-router-dom';
import React, {Component} from 'react';
import Navbar from './components/navbar';
class Main extends Component {
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </div>
        );
    };
}

export default Main;