import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from '../components/Home/index';
import Login from '../components/Login/index';
import '../assets/style/index.css';

class App extends Component {
    render() {
        return (
            <Router>
                <MuiThemeProvider>
                    <div className="mainbody">
                        <Route path="/" exact component={Home}/>
                        <Route path="/login" component={Login}/>
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    }
}

export default App;