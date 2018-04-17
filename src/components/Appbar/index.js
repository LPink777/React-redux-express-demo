import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import AppBars from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationList from 'material-ui/svg-icons/Action/list';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Logged from "../Logged";
import { logout } from '../../axios/userLogin';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

class IsLogin extends Component {
    static muiName = 'FlatButton';
    render() {
        return (<FlatButton {...this.props} label="Login" containerElement={<Link to="/login" />}/>);
    }
}

class Appbar1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            logged:false,
            open: false,
        }
    }

    logoutClick = () => {
        this.props.logOutClick();
        logout();
    }

    componentDidMount() {
        if (!document.cookie) {
            this.setState({
                logged: false,
            });
        }else{
            const { loginState } = this.props;
            console.log(this.props)
            const userCookie = queryString.parse(document.cookie);
            if (loginState === 0) {
                this.props.loginClick();
                this.props.setUserId(userCookie)
            }
            this.setState({
                logged: true,
            });
        }
    }

    handleToggle = () => this.setState({open: !this.state.open});

    componentWillReceiveProps(nextProps) {
        if (nextProps.loginState === 0) {
            this.setState({
                logged: false,
            });
        }
    }

    render() {
        return (
            <div>
                <AppBars
                    title="ナミヤ雑貨店の奇蹟"
                    iconElementLeft={<IconButton onClick={this.handleToggle}><NavigationList/></IconButton>}
                    titleStyle={{textAlign:'center',fontSize:'20px'}}
                    iconElementRight={this.state.logged
                    ? <Logged logOutClick={this.logoutClick} />
                    : <IsLogin/>}/>
                <Drawer
                    open={this.state.open}
                    docked={false}
                    onRequestChange={(open) => this.setState({open})}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}

const Appbar =  withRouter(Appbar1)

export default Appbar;