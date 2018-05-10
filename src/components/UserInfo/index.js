import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { userInfo } from '../../axios/userLogin';
import Snackbar from 'material-ui/Snackbar';
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
            open: false,
            message: '',
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
        console.log(this.props)
        const { setUserInfo } = this.props;
        userInfo(data).then(res => {
            if (res.code === 1) {
                this.setState({
                    open: true,
                    message: res.message,
                },()=>{
                    setUserInfo(data)
                    setTimeout(() => {
                        this.props.history.push('/')
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

    render(){
        return (
            <div className='user'>
                <Paper style={style} zDepth={1} rounded={false} >
                    <div className="row userHeader">
                        <span>请填写您的个人资料</span>
                    </div>
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
                                type="Number"
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
                    <Snackbar
                        open={this.state.open}
                        message={this.state.message}
                        autoHideDuration={1000}
                        style={{textAlign:'center',width:'45%'}}
                    />
                </Paper>
            </div>
        )
    }
}

export default UserInfo;