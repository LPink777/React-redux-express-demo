import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
import loginReducer from './loginReducer/index';
// import testReducer from "./testReducer/index";

//注册reducer，每个自定义的reducer都要来这里注册！！！不注册会报错。
const rootReducer = combineReducers({
    // routing: routerReducer,
    loginReducer,
    // testReducer,
});

export default rootReducer;