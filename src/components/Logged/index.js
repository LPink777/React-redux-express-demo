import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Logged extends Component {
    constructor(props){
        super(props)
    }

    handleClick = () => {
        this.props.logOutClick()
    }

    render() {
        return (
            <div>
                <IconMenu
                    iconButtonElement={<IconButton> <MoreVertIcon/> </IconButton>}
                    targetOrigin={{
                    horizontal: 'right',
                    vertical: 'top'
                }}
                    anchorOrigin={{
                    horizontal: 'right',
                    vertical: 'top'
                }}>
                    <MenuItem primaryText="Sign out" onClick = {this.handleClick}/>
                </IconMenu>
            </div>
        );
    }
}

export default Logged;