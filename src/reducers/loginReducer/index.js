import { LOGIN, LOGOUT } from '../../actions/loginAction/loginType';

const initState = {
    loginState: 0      //0-未登录  1-登陆成功  2正在登陆
}

const loginReducer = (state = initState,action) => {
    switch (action.type) {
        case LOGIN:
            return {
                loginState: 1
            }
        case LOGOUT:
            return initState;
        default:
            return initState;
    }
}

export default loginReducer;