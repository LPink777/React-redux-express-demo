import React, {Component} from 'react';
import './index.css';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import { login } from '../../axios/userLogin';
import Snackbar from 'material-ui/Snackbar';

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:'',
            open: false,
            message: '',
        }
        this.loginClick = this.loginClick.bind(this);
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

    loginClick(){
        const { username, password } = this.state;
        const { loginClick } = this.props;
        login({ username, password }).then(res => {
            if (res.code === 1) {
                this.setState({
                    open: true,
                    message: res.message,
                },()=>{
                    setTimeout(() => {
                        loginClick()
                        this.props.history.push('/')
                    }, 2000);
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

    render(){
        const { loginState } = this.props;
        return (
            <div className='login'>
                <div className="loginForm">
                    <div>please login ...</div>
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
                        label={ loginState === 0 ? 'Login' : 'Logging ...' }
                        fullWidth
                        primary
                        style={{marginTop:'20px'}}
                        onClick={this.loginClick}
                        />
                    <RaisedButton
                        label="Register"
                        fullWidth
                        primary
                        style={{marginTop:'20px'}}
                        containerElement={<Link to='/register' />}
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
}

export default Login;