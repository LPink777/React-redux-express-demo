import * as Actions from './loginType';

export function loginAction(){
    return { type: Actions.LOGIN }
}

export function logoutAction(){
    return { type: Actions.LOGOUT }
}