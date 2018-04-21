import Immutable from 'immutable';

export const LoginInitState = Immutable.fromJS({
    loginState: 0,  // 0表示未登录 1表示已登陆
    userId: '',
})