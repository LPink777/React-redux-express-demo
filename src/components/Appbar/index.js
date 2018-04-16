import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import AppBars from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationList from 'material-ui/svg-icons/Action/list';
import Logged from "../Logged";
import { logout } from '../../axios/userLogin';
import { Link } from 'react-router-dom';

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
            if (loginState === 0) {
                this.props.loginClick();
            }
            this.setState({
                logged: true,
            });
        }
    }

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
                    iconElementLeft={<IconButton> <NavigationList/> </IconButton>}
                    titleStyle={{textAlign:'center',fontSize:'20px'}}
                    iconElementRight={this.state.logged
                    ? <Logged logOutClick={this.logoutClick} />
                    : <IsLogin/>}/>
            </div>
        );
    }
}

const Appbar =  withRouter(Appbar1)

export default Appbar;