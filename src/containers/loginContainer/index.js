import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction, logingAction } from '../../actions/loginAction/index';
import Login from '../../components/Login';

const mapStateToProps = (state) => {
    return {
        loginState: state.loginReducer.loginState,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginClick: bindActionCreators(loginAction, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)