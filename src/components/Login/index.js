import React, {Component} from 'react';
import './index.css';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const Login = () => (
    <div className='login'>
        <div className="loginForm">
            <div>please login ...</div>
            <TextField
                fullWidth
                hintText="userName Field"
                floatingLabelText="userName"
                type="userName"/>
            <TextField
                fullWidth
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"/>
            <RaisedButton label="Login" fullWidth primary style={{marginTop:'20px'}}/>
            <RaisedButton label="Register" fullWidth primary style={{marginTop:'20px'}}/>
        </div>
    </div>
);

export default Login;