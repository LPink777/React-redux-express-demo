import { handleAction } from "redux-actions";
import { TEST } from "../../actions/testAction/testType";

const testReducer = handleAction(
    TEST,
    (state,action) => ({
        id: 1
    }),
    {
        id: 0
    }
)

export default testReducer;