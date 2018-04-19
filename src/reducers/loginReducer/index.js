import { handleActions } from "redux-actions";
import { LOGIN, LOGOUT } from '../../actions/loginAction/loginType';

const initState = {
    loginState: 0,      //0-未登录  1-登陆成功  2正在登陆
    userId: ''
}

const loginReducer = handleActions({
    LOGIN: (state,action) => {
        return {
            loginState: 1,
            userId: action.payload.userId,
        }
    }    ,
    LOGOUT: (state,action) => ({
        loginState: 0,
        userId: '',
    })
},initState)

export default loginReducer;