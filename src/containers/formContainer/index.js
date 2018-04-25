import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Form from "../../components/Form";
import { formReducerName, formChildrenName } from "../../actions/formAction/formType";

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitial: () => dispatch(onFormInitial(props)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);