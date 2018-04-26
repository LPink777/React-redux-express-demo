import { handleActions } from "redux-actions";
import { formInitState } from "./model";
import { ONFORMUPDATEPROPS, formChildrenName } from "../../actions/formAction/formType";

const formReducer = handleActions({
    [ONFORMUPDATEPROPS]: (state, { payload }) => (
        state.setIn([payload.formName, formChildrenName], payload.children)
    ),
},formInitState)

export default formReducer;