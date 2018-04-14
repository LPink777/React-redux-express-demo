import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Appbar from '../../components/Appbar';

const mapStateToProps = (state) => {
    return {
        loginState: state.loginReducer.loginState
    }
}

export default connect(mapStateToProps)(Appbar)