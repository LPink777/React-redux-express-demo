import React, {Component} from 'react';
import './index.css';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import { register } from '../../axios/register';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
        }
        this.registerClick = this.registerClick.bind(this);
    }

    useranmeChange = (e) => {
        this.setState({
            username:e.target.value
        });
    }

    passwordChange = (e) => {
        this.setState({
            password:e.target.value
        });
    }

    registerClick(){
        const { username, password } = this.state;
        if (!username || !password) {
            alert('请输入正确的信息')
        }else{
            register({ username, password }).then(res => {
                if (res.code === 1) {
                    alert(res.message)
                    window.location.href = '/login';
                }
            })
        }
    }

    render() {
        return (
            <div className='register'>
                <div className="registerForm">
                    <div>please register ...</div>
                    <TextField
                        fullWidth
                        hintText="userName Field"
                        floatingLabelText="userName"
                        type="userName"
                        onChange={this.useranmeChange}
                    />
                    <TextField
                        fullWidth
                        hintText="Password Field"
                        floatingLabelText="Password"
                        type="password"
                        onChange={this.passwordChange}
                    />
                    <RaisedButton
                        label="Register"
                        fullWidth
                        primary
                        style={{
                            marginTop: '30px'
                        }}
                        onClick={this.registerClick}
                    />
                </div>
            </div>
        )
    }
};

export default Register;
