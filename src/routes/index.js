import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from '@/components/Home/index';

import asyncComponent from '@/utils/asyncComponent';

const Login = asyncComponent(() => require("@/containers/loginContainer/index"));
const Register = asyncComponent(() => require("@/components/Register/index"));
const UserInfo = asyncComponent(() => require("@/containers/userInfoContainer/index"));

class App extends Component {
    render() {
        return (
            <Router>
                <MuiThemeProvider>
                    <div className="mainbody">
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/userInfo" component={UserInfo}/>
                        </Switch>
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    }
}

export default App;