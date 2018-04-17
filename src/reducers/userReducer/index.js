import { SETUSERID } from '../../actions/userAction/userType';

const initState = {
    userId:''     //0-未登录  1-登陆成功  2正在登陆
}

const userReducer = (state = initState,action) => {
    switch (action.type) {
        case SETUSERID :
            console.log(state)
            return {
                ...state,
                userId: action.data.userId,
            }
        default:
            return initState;
    }
}

export default userReducer;