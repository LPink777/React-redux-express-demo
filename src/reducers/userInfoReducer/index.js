import { handleActions } from "redux-actions";
import { USERINFO } from '../../actions/userInfoAction/type';
import { userInfoInitState } from './model';

const userInfoReducer = handleActions({
    USERINFO: (state, { payload }) => {
        return {
            name: payload.name,
            age: payload.age,
            sex: payload.sex,
            signature: payload.signature,
        }
    },
},userInfoInitState)

export default userInfoReducer;