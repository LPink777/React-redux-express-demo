import * as Actions from './loginType';

export function loginAction1(){
    return { type: Actions.LOGIN }
}

export function loginAction2(){
    return { type: Actions.LOGING }
}

export function loginAction(){
    return function (dispatch) {
        dispatch(loginAction2())
        dispatch(loginAction1())
    }
}