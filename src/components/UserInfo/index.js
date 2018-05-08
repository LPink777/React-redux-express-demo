import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import './index.css';

const style = {
    width: "80%",
    padding: 20,
    display: 'inline-block',
};

class UserInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            sex: '',
            name: '',
            age: '',
            signature: '',
        }
    }

    sexChange = (event, index, value) => this.setState({
        sex: value,
    })

    nameChange = (event,value) => this.setState({
        name: value,
    })

    ageChange = (event,value) => this.setState({
        age: value,
    })

    signatureChange = (event,value) => this.setState({
        signature: value,
    })

    submit = () => {
        const { sex, name, age, signature } = this.state;
        const data = { sex, name, age, signature };
        console.log(this)
        this.props.history.push('/')
    }

    render(){
        return (
            <div className='user'>
                <Paper style={style} zDepth={1} rounded={false} >
                    <div className="row">
                        <div className="col-12">
                            <TextField
                                hintText="请输入昵称"
                                floatingLabelText="昵称"
                                onChange={this.nameChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <SelectField
                                floatingLabelText="性别"
                                value={this.state.sex}
                                onChange={this.sexChange}
                            >
                                <MenuItem value={'man'} primaryText="男" />
                                <MenuItem value={'woman'} primaryText="女" />
                            </SelectField>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <TextField
                                hintText="请输入年龄"
                                floatingLabelText="年龄"
                                onChange={this.ageChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <TextField
                                hintText="请输入您的自述"
                                floatingLabelText="自述"
                                onChange={this.signatureChange}
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center submit">
                        <div className="col-10">
                            <RaisedButton
                                label='提交'
                                fullWidth
                                onClick={this.submit}
                            />
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default UserInfo;