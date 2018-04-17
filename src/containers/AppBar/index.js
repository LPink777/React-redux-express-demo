import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Appbar from '../../components/Appbar';
import { loginAction,logoutAction } from "../../actions/loginAction/index";
import { setUserIdAction } from "../../actions/userAction/index";

const mapStateToProps = (state) => {
    return {
        loginState: state.loginReducer.loginState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginClick:bindActionCreators(loginAction,dispatch),
        logOutClick: bindActionCreators(logoutAction,dispatch),
        setUserId: bindActionCreators(setUserIdAction,dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Appbar)