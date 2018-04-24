import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import './index.css';

const style = {
    width: "80%",
    padding: 20,
    display: 'inline-block',
};

class UserInfo extends Component{
    constructor(props){
        super(props)
        
    }

    render(){
        return (
            <div className='user'>
                <Paper style={style} zDepth={1} rounded={false} >
                    <div className="row">
                        <div className="col-10">
                            <RaisedButton label="Default" fullWidth />
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default UserInfo;