import React, {Component} from 'react';

import AppBars from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationList from 'material-ui/svg-icons/Action/list';

import { Link } from 'react-router-dom';

class IsLogin extends Component {
    static muiName = 'FlatButton';
    render() {
        return (<FlatButton {...this.props} label="Login" containerElement={<Link to="/login" />}/>);
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={<IconButton> <MoreVertIcon/> </IconButton>}
        targetOrigin={{
            horizontal: 'right',
            vertical: 'top'
        }}
        anchorOrigin={{
        horizontal: 'right',
        vertical: 'top'
    }}>
        <MenuItem primaryText="Sign out"/>
    </IconMenu>
);

class Appbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            logged:false,
        }
    }

    componentDidMount() {
        const { loginState } = this.props;
        if (loginState === 1) {
            this.setState({
                logged: !this.state.logged,
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
                    ? <Logged/>
                    : <IsLogin/>}/>
            </div>
        );
    }
}

export default Appbar;