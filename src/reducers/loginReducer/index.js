import { handleActions } from "redux-actions";
import { LOGIN, LOGOUT } from '../../actions/loginAction/type';
import { LoginInitState } from './model';

const loginReducer = handleActions({
    LOGIN: (state, { payload }) => {
        return {
            loginState: 1,
            userId: payload.userId,
        }
    }    ,
    LOGOUT: (state,action) => ({
        loginState: 0,
        userId: '',
    })
},LoginInitState)

export default loginReducer;