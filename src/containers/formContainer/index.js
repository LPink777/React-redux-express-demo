import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Form from "../../components/Form";
import { formReducerName, formChildrenName } from "../../actions/formAction/formType";
import { onFormInitial } from "../../actions/formAction/index";

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onInitial: () => dispatch(onFormInitial(props)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);