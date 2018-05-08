import React, {Component} from 'react';
import './index.css';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import { Link } from 'react-router-dom';
import { register } from '../../axios/userLogin';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            open: false,
            message: '',
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
        if (username.length < 4 || password.length < 6) {
            this.setState({
                open: true,
                message: '请输入正确的格式!'
            })
        }else{
            register({ username, password }).then(res => {
                if (res.code === 1) {
                    this.setState({
                        open: true,
                        message: res.message,
                    },()=>{
                        setTimeout(() => {
                            window.location.href = '/userInfo';
                        }, 1000);
                    });
                }else{
                    this.setState({
                        open: true,
                        message: res.message,
                        username:'',
                        password:'',
                    });
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
                        value={this.state.username}
                    />
                    <TextField
                        fullWidth
                        hintText="Password Field"
                        floatingLabelText="Password"
                        type="password"
                        onChange={this.passwordChange}
                        value={this.state.password}
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
                    <Snackbar
                        open={this.state.open}
                        message={this.state.message}
                        autoHideDuration={1000}
                        style={{textAlign:'center',width:'45%'}}
                    />
                </div>
            </div>
        )
    }
};

export default Register;
