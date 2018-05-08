import { handleActions } from "redux-actions";
import { LOGIN, LOGOUT } from '../../actions/loginAction/type';
import { LoginInitState } from './model';

const loginReducer = handleActions({
    LOGIN: (state, { payload }) => {
        return {
            loginState: 1,
            userName: payload.username,
        }
    }    ,
    LOGOUT: (state, { payload } ) => ({
        loginState: 0,
        userName: undefined,
    })
},LoginInitState)

export default loginReducer;