import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Appbar from '../../components/Appbar';
import { logoutAction } from "../../actions/loginAction/index";

const mapStateToProps = (state) => {
    return {
        loginState: state.loginReducer.loginState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOutClick: bindActionCreators(logoutAction,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Appbar)