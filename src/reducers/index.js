import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from './loginReducer/index';
import userReducer from "./userReducer/index";

//注册reducer，每个自定义的reducer都要来这里注册！！！不注册会报错。
const rootReducer = combineReducers({
    routing: routerReducer,
    /* your reducers */
    loginReducer,
    userReducer,
});

export default rootReducer;