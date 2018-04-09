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

class Login extends Component {
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
        <MenuItem primaryText="Refresh"/>
        <MenuItem primaryText="Help"/>
        <MenuItem primaryText="Sign out"/>
    </IconMenu>
);

class Appbar extends Component {
    constructor(){
        super();
        this.state = {
            logged:true
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event, logged) => {
        this.setState({logged: logged});
    };

    render() {
        return (
            <div>
                <Toggle
                    label="Logged"
                    defaultToggled={true}
                    onToggle={this.handleChange}
                    labelPosition="right"/>
                <AppBars
                    title="ナミヤ雑貨店の奇蹟"
                    iconElementLeft={<IconButton> <NavigationList/> </IconButton>}
                    titleStyle={{textAlign:'center',fontSize:'20px'}}
                    iconElementRight={this.state.logged
                    ? <Logged/>
                    : <Login/>}/>
            </div>
        );
    }
}

export default Appbar;