import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Appbar from '../../components/Appbar';
import { loginAction,logoutAction } from "../../actions/loginAction/index";

const mapStateToProps = (state) => {
    const data = state.toJS();
    return {
        loginState: data.loginReducer.loginState,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginClick:bindActionCreators(loginAction,dispatch),
        logOutClick: bindActionCreators(logoutAction,dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Appbar)