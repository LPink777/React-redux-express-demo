import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
import loginReducer from './loginReducer/index';
import formReducer from "./formReducer/index";

//注册reducer，每个自定义的reducer都要来这里注册！！！不注册会报错。
const rootReducer = combineReducers({
    // routing: routerReducer,
    loginReducer,
    formReducer
});

export default rootReducer;