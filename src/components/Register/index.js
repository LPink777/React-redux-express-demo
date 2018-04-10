import React, {Component} from 'react';
import './index.css';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';

const Register = () => (
    <div className='register'>
        <div className="registerForm">
            <div>please register ...</div>
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
            <RaisedButton label="Register" fullWidth primary style={{marginTop:'30px'}} containerElement={<Link to="/login" />}/>
        </div>
    </div>
);

export default Register;