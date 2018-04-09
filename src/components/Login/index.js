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
            <Paper style={{height:'100%'}}>
                <Menu desktop={true} autoWidth={true} >
                    <MenuItem primaryText="Please login ..." />
                    <MenuItem>
                        <TextField
                            fullWidth={true}
                            hintText="userName Field"
                            floatingLabelText="userName"
                            type="userName"/>
                    </MenuItem>
                    <MenuItem >
                        <TextField
                            fullWidth={true}
                            hintText="Password Field"
                            floatingLabelText="Password"
                            type="password"/>
                    </MenuItem>
                    <RaisedButton label="Login" style={{marginTop:'30px',marginLeft:'24px',width:'75%'}} primary/>
                </Menu>
            </Paper>
        </div>
    </div>
);

export default Login;