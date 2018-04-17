import * as Actions from './userType';

export function setUserIdAction(data){
    return {
        type: Actions.SETUSERID,
        data
    }
}